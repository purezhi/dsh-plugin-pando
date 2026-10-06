/**
 * Pando companion plugin, node half.
 *
 * Registers same-origin proxy routes on the DSH web server:
 *
 * 1. GET /pando/sprites?page=&limit=&sort=  — live sprite list from
 *    api.sprites.confirmo.love (the list API only allows the gallery origin
 *    via CORS; server-side fetch has no such restriction).
 *
 * 2. GET /pando/sprite/<id>?url=<spriteUrl> — raw sprite sheet with a
 *    persistent disk cache under <cacheDir>. The browser loads sheets through
 *    this route instead of hitting the remote CDN directly, so the original
 *    images survive browser-data clearing, are unlimited by browser quota, and
 *    are instantly re-servable. Only pub-sprites.confirmo.love URLs are
 *    accepted.
 *
 * 3. GET /pando/local/<file> — local sprite sheets served straight from
 *    disk (no download, no cache): the row's `spriteDir` is searched first, so
 *    a user can override or add sprites, and the package's own assets/ is the
 *    fallback.
 *
 * 4. GET /pando/local-sprites — menu-ready metadata for every sprite found
 *    in those directories, so dropping `<name>/sheet.png` (+ optional
 *    `thumb.png` / `sprite.json`) into `spriteDir` is enough to get it into the
 *    pet's context menu. The package no longer hardcodes MJ/MC: those are
 *    ordinary entries in `spriteDir`.
 *
 * ## Configuration
 *
 * Declared with the documented `export const Config` form, so the row's
 * `config` is validated at activation and the schema is discoverable:
 *
 * ```yaml
 * - id: pando            # id-targeted override of the bundle's own row
 *   config:
 *     spriteDir: ~/my-sprites        # local sprite sheets (menu + serving)
 *     cacheDir: ~/pando-cache     # downloaded community sheet cache
 * ```
 *
 * - `spriteDir` (default "") — directory holding `<name>/sheet.png` sprites,
 *   searched before the bundled assets for /pando/local/<name>/sheet.png and
 *   scanned by route 4 so its sprites appear in the menu. `~` expands to the
 *   home directory; relative paths resolve against the working directory.
 * - `cacheDir` (default `<DSH_HOME>/cache/pando`) — on-disk cache for the
 *   community sheets downloaded by route 2.
 *
 * Both fields carry `.volatile()`, which is what puts them in a settings form:
 * the settings service projects only fields sitting under a volatile schema
 * node (dsh-settings `volatileForm`/`isVolatilePath`). A write reloads the row
 * through the active profile's patch, so these routes pick the new directories
 * up without a restart — nothing here reloads itself.
 *
 * The browser half ships its own configuration page on the Plugins page, so
 * `apply` also registers the documented `configure({ auto: false }, ctx.fiber)`
 * policy while the settings service exists. That only tells the Settings
 * inventory to list this entry read-only; the row's config stays writable
 * through the Plugins page and through YAML.
 *
 * `inject: ['webServer']` mirrors the pattern of dsh-community-market: it
 * tells the cordis loader to only apply this plugin once the webServer
 * service exists, so `ctx.webServer.register(...)` is safe to call.
 */
import { mkdir, readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import { dirname, extname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { homedir } from "node:os";

export const name = "pando";
export const inject = ["webServer"];

const PACKAGE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
/** Bundled sprites shipped inside the package (mj, mc, qpanda). */
const ASSETS_DIR = join(PACKAGE_ROOT, "assets");
/** Default cache location for downloaded community sheets. */
const DEFAULT_CACHE_DIR = join(process.env.DSH_HOME || join(homedir(), ".dsh"), "cache", "pando");
const ALLOWED_PREFIX = "https://pub-sprites.confirmo.love/";
const MIME = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp" };

// `Config` is the documented way to expose plugin settings. It needs
// @deepseek-ai/schemastery, which ships with dsh.
//
// Resolving it is surprisingly fragile for a plugin installed as a `link:`
// dependency: Node resolves bare specifiers against the *realpath*, so the
// profile's node_modules symlink farm is not on the search chain, and a symlink
// pointing into app.asar fails with ENOTDIR. So: try normal resolution first,
// then the running installation's own copy by absolute path (the harness itself
// loads its modules from inside app.asar, so those file URLs are importable).
// If nothing works we degrade to no schema — the official loader treats a
// missing Config as "pass the raw config through", and `apply` reads it anyway.
function schemaCandidates() {
  const out = [];
  const exec = process.execPath || "";
  if (exec) {
    const contents = dirname(dirname(exec));           // <App>.app/Contents
    const resources = join(contents, "Resources");     // macOS layout
    const rel = ["dsh", "node_modules", "@deepseek-ai", "schemastery"];
    for (const sub of ["app.asar", "app.asar.unpacked"]) {
      out.push(join(resources, sub, ...rel, "lib/index.mjs"));
      out.push(join(resources, sub, "node_modules", "@deepseek-ai", "schemastery", "lib/index.mjs"));
    }
    // Windows / Linux layout: <install>/resources/app.asar/...
    out.push(join(dirname(exec), "resources", "app.asar", ...rel, "lib/index.mjs"));
    out.push(join(dirname(exec), "resources", "app", ...rel, "lib/index.mjs"));
  }
  return out;
}

async function loadSchema() {
  try {
    return (await import("@deepseek-ai/schemastery")).default;
  } catch { /* fall through to the absolute-path candidates */ }
  for (const p of schemaCandidates()) {
    try {
      const mod = await import(pathToFileURL(p).href);
      if (mod && mod.default) return mod.default;
    } catch { /* try the next candidate */ }
  }
  return null;
}

const Schema = await loadSchema();

export const Config = Schema
  ? Schema.object({
      // volatile: the settings form edits these live, without a remount
      spriteDir: Schema.string().default("").volatile(),
      cacheDir: Schema.string().default(DEFAULT_CACHE_DIR).volatile()
    })
  : undefined;

/**
 * Read a config field. A `.volatile()` field arrives as a cosmokit reference
 * whose snapshot is read with `.get()` (same as dsh-agent-default-model does:
 * `this.config.provider.get()`); plain fields arrive as ordinary values. String-
 * ifying a reference directly yields "[object Object]", which silently broke
 * spriteDir.
 */
function configValue(value) {
  if (value && typeof value === "object" && typeof value.get === "function") {
    try {
      const unwrapped = value.get();
      if (unwrapped !== undefined) return unwrapped;
    } catch { /* not a readable reference: fall through to the raw value */ }
  }
  return value;
}

/** Expand a leading `~` and make the path absolute. */
function resolveDir(value, fallback) {
  const raw = String(configValue(value) ?? "").trim() || fallback || "";
  if (!raw) return "";
  let p = raw;
  if (p === "~") p = homedir();
  else if (p.startsWith("~/")) p = join(homedir(), p.slice(2));
  return isAbsolute(p) ? resolve(p) : resolve(process.cwd(), p);
}

/** True when `full` is `dir` itself or a descendant of it (path traversal guard). */
function insideDir(full, dir) {
  return full === dir || full.startsWith(dir + "/");
}

function sanitizeId(id) {
  return String(id).replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80) || "sprite";
}

/** Resolve the cached file for a sprite; download + persist it on a miss. */
async function getCachedSheet(cacheDir, id, url) {
  let ext;
  try {
    ext = extname(new URL(url).pathname) || ".png";
  } catch {
    ext = ".png";
  }
  const file = join(cacheDir, sanitizeId(id) + ext);
  try {
    const st = await stat(file);
    if (st.isFile() && st.size > 0) return { file, ext };
  } catch { /* miss */ }
  const resp = await fetch(url, {
    headers: { "user-agent": "dsh-plugin-pando" },
    signal: AbortSignal.timeout(60000)
  });
  if (!resp.ok) throw new Error("download failed: " + resp.status);
  const buf = Buffer.from(await resp.arrayBuffer());
  if (!buf.length) throw new Error("empty download");
  await mkdir(cacheDir, { recursive: true });
  const tmp = file + "." + process.pid + ".tmp";
  await writeFile(tmp, buf);
  await rename(tmp, file);
  return { file, ext };
}

function apply(ctx, config) {
  const cfg = config || {};
  // user-supplied sprite directory is searched BEFORE the bundled assets, so
  // it can override a built-in sprite or add new ones without breaking others
  // The loader treats a volatile-only config change as a value swap: it writes
  // the new value into the existing volatile references and does NOT re-apply
  // the plugin. Resolving spriteDir/cacheDir once here would therefore keep the
  // old directories for the life of the fiber (a new spriteDir only took effect
  // after a restart). Read them per request instead, so an edit in the settings
  // form is live immediately.
  const currentSpriteDir = () => resolveDir(cfg.spriteDir, "");
  const currentSpriteRoots = () => {
    const dir = currentSpriteDir();
    return dir && dir !== ASSETS_DIR ? [dir, ASSETS_DIR] : [ASSETS_DIR];
  };
  const currentCacheDir = () => resolveDir(cfg.cacheDir, DEFAULT_CACHE_DIR);

  // 0) settings page policy — optional and never required by the pet.
  //    The browser half registers its own page on the Plugins page, so the
  //    Settings inventory should list this entry without generating a page of
  //    its own. `ctx.inject` creates a child fiber that waits for the service,
  //    so a deployment without @deepseek-ai/dsh-settings is unaffected; the
  //    policy names THIS row's fiber, because the settings service looks
  //    presentations up by the profile entry's own fiber.
  try {
    ctx.inject(["settings"], (sctx) => {
      try {
        sctx.effect(
          () => sctx.settings.configure({ auto: false }, ctx.fiber),
          "pando: settings page policy"
        );
      } catch { /* a policy is already registered for this instance (reload race) */ }
    });
  } catch { /* no inject support: YAML and the Plugins page still configure the row */ }

  try {
    // 1) live sprite list proxy
    ctx.effect(() => ctx.webServer.register({
      kind: "exact",
      path: "/pando/sprites",
      handler: async (req, res) => {
        try {
          const u = new URL(req.url ?? "/", "http://x");
          const params = new URLSearchParams(u.search);
          if (!params.get("page")) params.set("page", "1");
          if (!params.get("limit")) params.set("limit", "20");
          if (!params.get("sort")) params.set("sort", "trending");
          const resp = await fetch(`https://api.sprites.confirmo.love/sprites?${params.toString()}`, {
            headers: { "user-agent": "dsh-plugin-pando" },
            signal: AbortSignal.timeout(15000)
          });
          const body = await resp.text();
          res.writeHead(resp.status, {
            "content-type": resp.headers.get("content-type") ?? "application/json",
            "cache-control": "no-store"
          });
          res.end(body);
        } catch (err) {
          res.writeHead(502, { "content-type": "application/json" });
          res.end(JSON.stringify({ error: String((err && err.message) || err) }));
        }
      }
    }), "pando: sprite list proxy route");

    // 2) raw sprite sheet with persistent disk cache
    ctx.effect(() => ctx.webServer.register({
      kind: "prefixes",
      path: "/pando/sprite",
      handler: async (req, res) => {
        try {
          const u = new URL(req.url ?? "/", "http://x");
          const url = u.searchParams.get("url") || "";
          if (!url.startsWith(ALLOWED_PREFIX)) {
            res.writeHead(400, { "content-type": "application/json" });
            res.end(JSON.stringify({ error: "url must be on " + ALLOWED_PREFIX }));
            return;
          }
          const id = decodeURIComponent(u.pathname.slice("/pando/sprite/".length));
          const { file, ext } = await getCachedSheet(currentCacheDir(), id, url);
          const data = await readFile(file);
          res.writeHead(200, {
            "content-type": MIME[ext] ?? "application/octet-stream",
            "cache-control": "public, max-age=604800",
            "access-control-allow-origin": "*"
          });
          res.end(data);
        } catch (err) {
          res.writeHead(502, { "content-type": "application/json" });
          res.end(JSON.stringify({ error: String((err && err.message) || err) }));
        }
      }
    }), "pando: sprite sheet disk-cache route");

    // 3) local sprite sheets: GET /pando/local/<path>
    //    spriteRoots = [configured spriteDir?, bundled assets]
    ctx.effect(() => ctx.webServer.register({
      kind: "prefixes",
      path: "/pando/local",
      handler: async (req, res) => {
        try {
          const u = new URL(req.url ?? "/", "http://x");
          const rel = decodeURIComponent(u.pathname.slice("/pando/local/".length));
          let data = null;
          let hitExt = "";
          for (const root of currentSpriteRoots()) {
            // path traversal guard: must resolve inside the root
            const full = resolve(root, rel);
            if (!insideDir(full, root)) continue;
            try {
              data = await readFile(full);
              hitExt = extname(full).toLowerCase();
              break;
            } catch { /* try the next root */ }
          }
          if (data === null) {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({ error: "asset not found" }));
            return;
          }
          res.writeHead(200, {
            "content-type": MIME[hitExt] ?? "application/octet-stream",
            // local assets change between releases: never cache them so a
            // re-served sheet always reflects the file on disk
            "cache-control": "no-cache",
            "access-control-allow-origin": "*"
          });
          res.end(data);
        } catch (err) {
          res.writeHead(404, { "content-type": "application/json" });
          res.end(JSON.stringify({ error: "asset not found" }));
        }
      }
    }), "pando: local sprite route");

    // 4) sprite discovery: GET /pando/local-sprites
    //    Scans spriteRoots for `<name>/sheet.png` so any sprite placed in the
    //    configured spriteDir becomes selectable in the pet's menu. The
    //    configured dir wins over the bundled assets for the same name.
    ctx.effect(() => ctx.webServer.register({
      kind: "exact",
      path: "/pando/local-sprites",
      handler: async (_req, res) => {
        const list = [];
        const seen = new Set();
        try {
          for (const root of currentSpriteRoots()) {
            let entries = [];
            try {
              entries = await readdir(root, { withFileTypes: true });
            } catch { continue; /* unreadable root: skip it */ }
            for (const ent of entries) {
              const id = ent.name;
              if (!id || id.startsWith(".") || seen.has(id)) continue;
              if (!ent.isDirectory() && !ent.isSymbolicLink()) continue;
              const dir = join(root, id);
              let st;
              try {
                st = await stat(join(dir, "sheet.png"));
              } catch { continue; /* no sheet.png: not a sprite dir */ }
              if (!st.isFile() || !st.size) continue;
              seen.add(id);
              // optional <name>/sprite.json overrides the discovery defaults
              let meta = {};
              try {
                const raw = await readFile(join(dir, "sprite.json"), "utf8");
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === "object") meta = parsed;
              } catch { /* no metadata file: defaults below */ }
              let hasThumb = false;
              try {
                const t = await stat(join(dir, "thumb.png"));
                hasThumb = t.isFile() && t.size > 0;
              } catch { /* no thumb: the menu crops frame 1 from the sheet */ }
              // mtime in the URL so an edited sheet is never served stale
              const v = Math.round(st.mtimeMs) || 1;
              list.push({
                id: String(meta.id || id),
                name: String(meta.name || id),
                // mtime doubles as the HTTP cache-buster (?v=) and as the
                // client's IDB cache version, so an edited sheet is never
                // served or rendered from a stale copy
                version: v,
                sheetUrl: `/pando/local/${encodeURIComponent(id)}/sheet.png?v=${v}`,
                // empty thumbUrl tells the client to grid-crop the sheet instead
                thumbUrl: hasThumb ? `/pando/local/${encodeURIComponent(id)}/thumb.png?v=${v}` : "",
                // sheets from the prepare.py pipeline are already keyed; a raw
                // magenta sheet can opt out with {"preprocessed": false}
                preprocessed: meta.preprocessed !== false,
                frameWidth: Number(meta.frameWidth) || 256,
                frameHeight: Number(meta.frameHeight) || 256,
                frameCount: Number(meta.frameCount) || 56,
                source: root === ASSETS_DIR ? "bundled" : "user"
              });
            }
          }
          res.writeHead(200, { "content-type": "application/json", "cache-control": "no-store" });
          res.end(JSON.stringify(list));
        } catch (err) {
          res.writeHead(500, { "content-type": "application/json" });
          res.end(JSON.stringify({ error: String((err && err.message) || err) }));
        }
      }
    }), "pando: local sprite discovery route");

    // 5) self-check: GET /pando/info — what this instance actually resolved.
    //    `configSchema` tells whether the Config schema loaded, and
    //    `configVolatile` prints the fields the settings form can edit
    //    (schemastery marks them `meta.volatile`), which is what a settings
    //    form needs before it offers any field at all.
    ctx.effect(() => ctx.webServer.register({
      kind: "exact",
      path: "/pando/info",
      handler: (_req, res) => {
        let configKeys = [];
        let configVolatile = [];
        try {
          // Config.dict holds one schema per field; schemastery marks the ones a
          // form may edit with `meta.volatile`. (toJSON() is not used here: it
          // factors shared field schemas out into `refs`.)
          const dict = (Config && Config.dict) || {};
          configKeys = Object.keys(dict);
          configVolatile = configKeys.filter((key) => !!dict[key]?.meta?.volatile);
        } catch (_) {}
        res.writeHead(200, { "content-type": "application/json", "cache-control": "no-store" });
        res.end(JSON.stringify({
          package: "@purezhi/dsh-plugin-pando",
          version: "1.1.0",
          configSchema: !!Schema,
          configKeys,
          configVolatile,
          spriteDir: currentSpriteDir() || null,
          spriteRoots: currentSpriteRoots(),
          cacheDir: currentCacheDir(),
          assetsDir: ASSETS_DIR,
          packageRoot: PACKAGE_ROOT
        }));
      }
    }), "pando: self-check route");

    try {
      ctx.logger?.info?.(
        `pando: spriteDir=${currentSpriteDir() || "(bundled only)"} cacheDir=${currentCacheDir()} (resolved per request)`
      );
    } catch (_) { /* logging is best-effort */ }
  } catch (err) {
    // route registration unavailable — browser half falls back to the CDN directly
    try { ctx.logger.warn("pando: failed to register routes: " + String((err && err.message) || err)); } catch (_) {}
  }
}
export { apply };
