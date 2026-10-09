/**
 * Type declarations for the server half of `@purezhi/dsh-plugin-pando`.
 *
 * The plugin runs inside the DSH profile process and registers same-origin HTTP
 * routes that serve sprite sheets, list the sprites found on disk, and report
 * the configuration that is currently in effect.
 */

/** Configuration declared by the plugin's schema; every field is optional. */
export interface PandoConfig {
  /**
   * Directory scanned for local sprite sheets, laid out as `<name>/sheet.png`
   * with an optional `thumb.png` and `sprite.json` (`{ "name": "..." }`).
   * Empty means only the sprites bundled with the package are available.
   */
  spriteDir?: string;
  /** On-disk cache for sheets downloaded from the community gallery. */
  cacheDir?: string;
}

/** A sprite the plugin is able to serve. */
export interface PandoSpriteInfo {
  id: string;
  /** Display name: `sprite.json`'s `name`, else the directory name. */
  name: string;
  /** `bundled` for sheets shipped in the package, `user` for `spriteDir` sheets. */
  source?: "bundled" | "user";
  sheetUrl?: string;
  thumbUrl?: string;
  /** True when the sheet is already an 8x7 preprocessed grid. */
  preprocessed?: boolean;
  frameWidth?: number;
  frameHeight?: number;
  frameCount?: number;
}

/** Route shape accepted by `ctx.webServer.register`. */
export interface PandoRoute {
  kind: "prefix" | "exact";
  path: string;
  handler(req: unknown, res: unknown): unknown;
}

/** The subset of the DSH plugin context this plugin uses. */
export interface PandoContext {
  logger?: { info?(message: string): void; warn?(message: string): void };
  webServer?: { register(route: PandoRoute): unknown };
  effect?(callback: () => unknown, label?: string): unknown;
  inject?(deps: string[], callback: (ctx: PandoContext) => unknown): unknown;
  fiber?: unknown;
}

/** Plugin name as registered with the DSH loader. */
export declare const name: "pando";
/** Services the plugin waits for before starting. */
export declare const inject: readonly string[];
/**
 * Schema describing the configuration fields shown in the Plugin Manager.
 * `undefined` when the bundled schema module cannot be resolved.
 */
export declare const Config: unknown;
/**
 * Mount the plugin: HTTP routes for sprite discovery, sheet delivery and the
 * currently resolved configuration.
 */
export declare function apply(ctx: PandoContext, config?: PandoConfig): void;
