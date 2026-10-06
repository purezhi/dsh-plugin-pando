#!/usr/bin/env bash
# ============================================================================
# DSH Pando Plugin - 卸载脚本
#
# 反向执行 install.sh:摘掉 profile 的 bundle 依赖、软链与 config 覆盖。
# 用法: ./uninstall.sh [profile]   默认 desktop
# ============================================================================
set -euo pipefail

DSH_HOME="${DSH_HOME:-$HOME/.dsh}"
PKG_NAME="@purezhi/dsh-plugin-pando"
PROFILE="${1:-desktop}"
PROFILE_DIR="$DSH_HOME/profiles/$PROFILE"

echo "卸载 DSH Pando Plugin (profile: $PROFILE)..."

if [ ! -d "$PROFILE_DIR" ]; then
  echo "✗ 未找到 profile 目录: $PROFILE_DIR"
  exit 1
fi

# 1. 移除 node_modules 软链(只删链接, 不动仓库)
LINK="$PROFILE_DIR/node_modules/@purezhi/dsh-plugin-pando"
if [ -L "$LINK" ]; then
  rm -f "$LINK"
  echo "✓ 已删除链接: $LINK"
else
  echo "(未找到链接, 跳过)"
fi
# 旧的共享目录副本(历史安装方式)
LEGACY="$DSH_HOME/profiles/node_modules/dsh-plugin-pando"
if [ -e "$LEGACY" ]; then
  rm -rf "$LEGACY"
  echo "✓ 已删除旧副本: $LEGACY"
fi
for p in "$DSH_HOME/profiles"/*/node_modules/dsh-plugin-pando; do
  [ -L "$p" ] && rm -f "$p" && echo "✓ 已删除旧链接: $p"
done

# 2. 从 package.json 移除 bundle / 依赖
node - "$PROFILE_DIR" "$PKG_NAME" <<'NODE'
const fs = require("node:fs");
const [dir, name] = process.argv.slice(2);
const file = dir + "/package.json";
if (!fs.existsSync(file)) process.exit(0);
const pkg = JSON.parse(fs.readFileSync(file, "utf8"));
const bundles = pkg.dsh?.profile?.bundles;
if (Array.isArray(bundles)) {
  pkg.dsh.profile.bundles = bundles.filter((b) => b !== name && b !== "dsh-plugin-pando");
}
if (pkg.dependencies) {
  delete pkg.dependencies[name];
  delete pkg.dependencies["dsh-plugin-pando"];
}
fs.writeFileSync(file, JSON.stringify(pkg, null, 2) + "\n");
console.log("  ✓ package.json: bundles / dependencies 已清理");
NODE

# 3. 从 cordis.patch.yml 移除 config 覆盖与历史 insert 段
PATCH="$PROFILE_DIR/cordis.patch.yml"
if [ -f "$PATCH" ]; then
  perl -0pi -e 's/\n*# Pando 桌宠配置.*?\n- id: pando\n  config:\n(?:    .*\n|\n)*//s' "$PATCH"
  perl -0pi -e 's/\n*# Pando companion plugin:.*?- insert:\n    - id: pando\n      name: (?:"\@purezhi\/dsh-plugin-pando"|dsh-plugin-pando)\n*//s' "$PATCH"
  echo "✓ 已清理 $PATCH"
else
  echo "(跳过 config: 无 $PATCH)"
fi

echo ""
echo "完成。请重启 DSH Desktop 生效。"
