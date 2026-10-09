# Pando 桌宠 · Pando Desktop Pet

在 [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) 的 Web UI 里放一只桌面宠物：
会动、可拖拽、可换形象，并按 agent 的运行状态自动切换动作。

本地精灵目录 + 内置形象 + [sprites.confirmo.love](https://sprites.confirmo.love/) 社区画廊三者合并展示，
菜单里按来源标注 **内置 / 本地 / 共享**。

> 交互、视觉与素材规范致敬 [confirmo.love](https://confirmo.love/) 及其社区精灵图画廊。

## 📸 效果预览

| 待机 | 拖拽 | 工作状态 |
|---|---|---|
| ![待机](https://raw.githubusercontent.com/purezhi/dsh-plugin-pando/main/docs/screenshots/shot-idle.png) | ![拖拽](https://raw.githubusercontent.com/purezhi/dsh-plugin-pando/main/docs/screenshots/shot-drag.png) | ![工作状态](https://raw.githubusercontent.com/purezhi/dsh-plugin-pando/main/docs/screenshots/shot-working.png) |

| 开心 | 兴奋 | 睡觉 |
|---|---|---|
| ![开心](https://raw.githubusercontent.com/purezhi/dsh-plugin-pando/main/docs/screenshots/shot-happy.png) | ![兴奋](https://raw.githubusercontent.com/purezhi/dsh-plugin-pando/main/docs/screenshots/shot-excited.png) | ![睡觉](https://raw.githubusercontent.com/purezhi/dsh-plugin-pando/main/docs/screenshots/shot-sleep.png) |

## ✨ 功能

- **7 个状态**：待机 / 开心（单击）/ 兴奋（双击，整体弹跳）/ 睡觉（5 分钟无动作）/
  工作（检测到 agent 运行）/ 生气（快速连点 5 次或出错）/ 拖拽。每个形象是 8 列 × 7 行 = 56 帧
- **手势延迟提交**（250ms 去抖窗口）区分单击、双击与连点，不依赖浏览器 `dblclick`
- **右键菜单**：7 个状态可 10 秒预览；精灵图网格可即时切换形象，并标注来源
- **三种形象来源合并**：包内置（QPanda）、本地精灵目录、社区画廊，同名时本地优先
- **配置页**：在插件页面直接编辑配置（保存后**即时生效**，无需重启或刷新）
- **随插件启停**：停用插件即移除宠物，重新启用干净重挂载

## 📦 安装

在 DSH 中打开 **设置 → 插件 → 插件市场**安装，或把它加入某个 profile 的 bundle 依赖：

```jsonc
// ~/.dsh/profiles/<profile>/package.json
{
  "dsh": { "profile": { "bundles": ["@purezhi/dsh-plugin-pando"] } },
  "dependencies": { "@purezhi/dsh-plugin-pando": "^1.0.0" }
}
```

**插件集变更后需要重启 DSH**（client 模块的包元数据在启动时缓存）。之后可在插件页面按 id 覆盖配置：

```yaml
# ~/.dsh/profiles/<profile>/cordis.patch.yml
- id: pando
  config:
    spriteDir: ~/my-sprites    # 本地精灵图目录（可选）
    cacheDir: ~/.dsh/cache/pando  # 社区精灵图缓存目录（可选）
```

## ⚙️ 配置

| 配置项 | 默认值 | 说明 |
|---|---|---|
| `spriteDir` | `""` | **本地精灵图目录**：放 `<name>/sheet.png` 即可，会被自动登记进右键菜单，无需改代码。查找顺序在此目录与内置 `assets/` 之间，可覆盖内置形象。支持 `~` |
| `cacheDir` | `<DSH_HOME>/cache/pando` | 社区精灵图下载后的持久化缓存位置，浏览器数据清理后仍可复用 |

两项均可省略：省略时只提供内置的 QPanda。

### 本地精灵目录约定

```
spriteDir/
├── mj/
│   ├── sheet.png     # 必需：8×7 帧、透明背景
│   ├── thumb.png     # 可选：菜单缩略图；缺失时自动裁第 1 帧
│   └── sprite.json   # 可选：{ "name": "MJ", "preprocessed": true }
└── mc/ …
```

- `sprite.json` 可覆盖 `name` / `preprocessed` / `frameWidth` / `frameHeight` / `frameCount`
- 默认按**已预处理**（品红已抠、帧已居中）对待；若放的是带品红底的原始图，加
  `{"preprocessed": false}` 让浏览器端运行时抠图
- sheet 的修改时间会进入缓存键，重新生成同名精灵不会命中旧缓存

## 🔌 生命周期

宠物 DOM、样式、计时器与观察者都归属同一个 `ctx.effect`：插件被停用/卸载（含热重载）时一并释放，
重新启用可干净重挂载，不会出现两只宠物。

## 📜 致谢与声明

- 交互、视觉与精灵图规范致敬 [confirmo.love](https://confirmo.love/)，社区画廊由
  [sprites.confirmo.love](https://sprites.confirmo.love/) 提供
- 默认形象 QPanda 与本插件代码以 MIT 协议发布；社区精灵图的版权归各自作者所有

## ⚖️ License

MIT
