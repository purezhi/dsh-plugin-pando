#!/usr/bin/env bash
# ============================================================================
# DSH Pando Plugin - 安装脚本
# 在 DeepSeek Harness (DSH) 的 Web UI 里放一只桌宠:
#   - 默认 QPanda 形象(包内置), 其余形象来自本地精灵目录 spriteDir
#   - 支持社区 sprite:sprites.confirmo.love 的 8x7 精灵图
#   - 右键菜单:切换形象 / 调整大小 / 单击互动
#   - 位置、所选 sprite、大小持久化(localStorage)
#   - 全部注册在 ~/.dsh(用户配置), 不碰应用安装目录
#
# 安装方式 = profile 的 bundle 依赖 + link: 指向本仓库(不再拷贝文件):
#   改完代码刷新页面即可生效, 不会留下第二份陈旧副本。
# ============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PKG_DIR="$SCRIPT_DIR/dsh-plugin-pando"
PKG_NAME="@purezhi/dsh-plugin-pando"
DSH_HOME="${DSH_HOME:-$HOME/.dsh}"
PROFILE="${1:-desktop}"

echo "=============================================="
echo " DSH Pando Plugin 安装 (profile: $PROFILE)"
echo "=============================================="

if [ ! -f "$PKG_DIR/package.json" ] || [ ! -f "$PKG_DIR/lib/client.js" ]; then
  echo "✗ 错误: 找不到插件包文件, 请确认本脚本与 dsh-plugin-pando/ 在同一目录"
  echo "  (若缺少 lib/client.js, 先运行: node dsh-plugin-pando/build.js)"
  exit 1
fi

if [ ! -d "$DSH_HOME/profiles/$PROFILE" ]; then
  echo "✗ 错误: 未找到 profile '$PROFILE' ($DSH_HOME/profiles/$PROFILE)"
  exit 1
fi

PROFILE_DIR="$DSH_HOME/profiles/$PROFILE"
NM="$PROFILE_DIR/node_modules"

# --- 1. node_modules/@purezhi/<pkg> -> 本仓库 -------------------------------
mkdir -p "$NM/@purezhi"
ln -sfn "$PKG_DIR" "$NM/@purezhi/dsh-plugin-pando"
echo "✓ 已链接: $NM/@purezhi/dsh-plugin-pando -> $PKG_DIR"

# --- 2. 注册为 profile bundle(package.json 的 bundles + dependencies) ------
node - "$PROFILE_DIR" "$PKG_NAME" "$PKG_DIR" <<'NODE'
const fs = require("node:fs");
const [dir, name, pkgDir] = process.argv.slice(2);
const file = dir + "/package.json";
const pkg = JSON.parse(fs.readFileSync(file, "utf8"));
pkg.dsh ??= {};
pkg.dsh.profile ??= {};
pkg.dsh.profile.bundles ??= [];
if (!pkg.dsh.profile.bundles.includes(name)) pkg.dsh.profile.bundles.push(name);
pkg.dependencies ??= {};
delete pkg.dependencies["dsh-plugin-pando"];   // drop the legacy unscoped entry
pkg.dependencies[name] = "link:" + pkgDir;
fs.writeFileSync(file, JSON.stringify(pkg, null, 2) + "\n");
console.log("  ✓ package.json: bundles + dependencies 已更新");
NODE

# --- 3. 配置覆盖(按 id,不要用 insert;否则会与 bundle 自身插入的行重复) -----
PATCH="$PROFILE_DIR/cordis.patch.yml"
if [ -f "$PATCH" ]; then
  if grep -q "^- id: pando$" "$PATCH" 2>/dev/null; then
    echo "  (config 覆盖已存在, 跳过)"
  else
    # 移除历史上遗留的 insert 段(会与 bundle 的插入重复)
    if grep -q "name: \"$PKG_NAME\"" "$PATCH" 2>/dev/null && grep -q "insert:" "$PATCH" 2>/dev/null; then
      echo "  ! 检测到 insert 段, 请手工确认是否需要移除(重复声明会导致两只宠物)"
    fi
    cat >> "$PATCH" <<EOF

# Pando 桌宠配置(按 id 覆盖 bundle 插入的行)
- id: pando
  config:
    # 本地精灵目录: <名称>/sheet.png (+ 可选 thumb.png / sprite.json)
    # spriteDir: ~/my-sprites
    # 社区精灵下载缓存目录
    cacheDir: ~/.dsh/cache/pando
EOF
    echo "  ✓ config 覆盖已写入 $PATCH"
  fi
else
  echo "  (跳过 config: 无 $PATCH)"
fi

echo ""
echo "=============================================="
echo " ✓ 安装完成"
echo ""
echo " 下一步:"
echo "   1. 重启 DSH Desktop(插件集变更需要重启)"
echo "   2. 界面左下角出现桌宠; 右键切换形象, 拖动移动"
echo "   3. 本地形象: 把 <名称>/sheet.png 放进上面配置的 spriteDir"
echo ""
echo " 卸载: ./uninstall.sh $PROFILE"
echo "=============================================="
