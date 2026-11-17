# Kali Custom Lab · 官网 2.0

两个开源项目的官方网站（当前内容为 **KDE 魔改 V5 / Kali 2026.3**）：

- [kali-linux-kde-beautify](https://github.com/CuriousLearnerDev/kali-linux-kde-beautify)（KDE 魔改 V5）
- [kali-linux-i3wm-beautify](https://github.com/CuriousLearnerDev/kali-linux-i3wm-beautify)（i3wm 魔改，已归档）

1.0（`../`）保留不动，本目录是完全重写的 2.0。

## 技术栈

| 层 | 选择 |
| --- | --- |
| 框架 | Astro 7（静态输出，产物是纯 HTML） |
| 样式 | Tailwind CSS v4（CSS-first，配置全在 `src/styles/global.css` 的 `@theme`） |
| 文档 | MDX 内容集合（`src/content/docs/`） |
| 图片 | 构建期用 sharp 生成多尺寸 WebP/AVIF，自托管 |
| 数据 | 结构化事实用 TS 常量，GitHub 数据用本地快照 JSON |
| 部署 | 单容器 nginx 托管 `dist/` |

**为什么不是 Next.js**：这是内容站，交互只有灯箱、复制提取码、文档搜索；
Astro 默认 0 业务 JS，图片在构建期处理完，部署侧没有 Node 进程要守护。
另外本机访问 GitHub API 需要代理，改成「脚本同步快照」后**构建完全离线可重复**。

## 本地开发

```bash
npm install
npm run dev          # http://localhost:4321
```

构建与预览：

```bash
npm run build        # 会先跑字体子集化 + 内容校验
npm run preview
npm run check        # astro check 类型检查
npm run validate     # 内容/素材/链接校验
```

## 深浅色主题

页头有一个三态切换按钮：**跟随系统 → 浅色 → 深色**，点击循环切换。

- 选中值存在 `localStorage` 的 `theme-choice`（`auto` / `light` / `dark`）；
- 选「跟随系统」时，系统切换会被 `matchMedia` 实时跟随；
- `<head>` 里有一段内联脚本，在首屏渲染前就把 `data-theme` 写到 `<html>` 上，
  所以不会闪白；
- 无 JS 时默认浅色，内容完全可用。

样式上只维护一处：

- 浅色是默认值，在 `@theme` 与 `@layer base :root`；
- 深色在 `global.css` 末尾的 `:root[data-theme="dark"]` 里把 token 覆盖一遍；
- 少数背景（玻璃、窗口框、胶囊、页头）走 `--glass-*` / `--frame-*` / `--pill-bg` /
  `--header-bg`，组件里没有硬编码颜色，改配色只需改这两处。

## 后台（Pages CMS）

内容不再写死在 TS 里，而是放在 `src/data/*.json`，由一个挂在仓库上的 CMS 编辑：

| 文件 | 管什么 |
| --- | --- |
| `src/data/downloads.json` | 版本、体积、网盘链接、提取码 |
| `src/data/versions.json` | 版本号、内核、桌面、默认账号、变更列表 |
| `src/data/faq.json` | 常见问题 |
| `src/data/site.json` | 站点信息与免责声明 |
| `src/data/shots.json` | 截图标题、描述、分类（换图另见下文） |
| `src/content/docs/*.mdx` | 文档正文 |

配置文件是根目录的 `.pages.yml`。

**使用方式**

1. 站点仓库推到 GitHub
2. 打开 https://app.pagescms.org → GitHub 登录 → 授权该仓库
3. 左侧选内容 → 右侧填表单 → 点「保存」
4. 保存 = 提交一次 commit → 触发重新构建 → 1–2 分钟后线上生效

**注意**

- TS 文件（`src/data/*.ts`）现在只负责类型和派生值，**不要在里面写数据**，改数据一律改 JSON。
- 后台没有实时预览，改完先本地 `npm run dev` 看效果。
- 截图目前走 `scripts/assets.manifest.json` + `npm run assets:fetch`（远程 URL 抓取转 WebP），
  CMS 的图片上传还没有接上；如果要用后台上传截图，需要把图片注册表改成扫描目录。

## 日常维护（90% 的改动都在这里）

| 想做什么 | 改哪里 |
| --- | --- |
| 改版本号 / 内核 / 默认账号 | `src/data/versions.json`（后台可编辑） |
| 版本说明原文（溯源底稿） | `scripts/readme-snapshot-v5.md` |
| 改网盘链接 / 提取码 / 文件大小 | `src/data/downloads.json`（后台可编辑） |
| 加一条 FAQ | `src/data/faq.json`（后台可编辑，带 `relatedIssues`） |
| 改快捷键 | `src/data/shortcuts.json` |
| 改外观 / 预装项 | `src/data/tools.json` |
| 写 / 改文档 | `src/content/docs/*.mdx`（frontmatter 见 `src/content.config.ts`） |
| 加一张截图 | `scripts/assets.manifest.json` → `npm run assets:fetch` |
| 刷新 GitHub 数据 | `npm run data:sync` |

### 改完文案记得重跑字体子集化

中文字体是按**当前文案用到的字**裁剪的。新增生僻字后如果没重跑，会出现方框字。
`npm run build` 的 prebuild 会自动执行，开发时手动跑：

```bash
npm run fonts:subset
```

### 换首页大图 / 截图墙

首页每个位置用哪张图，由 `src/data/home.json` 决定（后台「首页图片」模块可改）：

| 配置项 | 对应位置 |
| --- | --- |
| `HERO` | 首屏铺满整屏的背景图 |
| `EDITIONS.kde` / `.i3` | 两条产品线通栏的主图 |
| `GALLERY` | 截图墙的 6 张（数组顺序 = 显示顺序） |
| `AI.MAIN` / `.SECONDARY` | AI 终端专题的主图与副图 |
| `TOPBARS` | 三代顶栏对比图 |

值填 `shots.json` 里的 **slug**（不是文件名）。改了不存在的 slug，构建会直接报错并列出可用的 slug。

**发新版本时的完整流程**：

1. 把新截图放进 `src/assets/screens/`，文件名就是新 slug，例如 `v6-ui-01.webp`
2. 后台「截图」→ 添加一条，slug 填 `v6-ui-01`，写标题和描述
3. 后台「首页图片」→ 把 `HERO` / `EDITIONS` / `GALLERY` 里的值换成新 slug
4. 保存 → 自动构建 → 上线

### 加 / 换截图

图片和元数据是分开的两份东西：

| 东西 | 位置 | 谁维护 |
| --- | --- | --- |
| 图片文件 | `src/assets/screens/<slug>.webp` | 后台可上传，或直接放文件 |
| 标题/描述/分类 | `src/data/shots.json` | 后台可编辑 |

**换一张图**：上传新文件到 `src/assets/screens/`，**文件名必须和 `shots.json` 里的 slug 一致**（例如 `v5-ui-03.webp`）。宽高由 Astro 构建时自动读取，不用填。

**加一张图**：

1. 把 `xxx.webp` 放进 `src/assets/screens/`
2. 在后台「截图」里点「添加」，填 slug（要和文件名一致）、描述、分类
3. 页面里用 `shot("xxx")` 引用

**从远程地址抓新图**（可选）：在 `shots.json` 里给该条填 `sourceUrl`，然后执行

```bash
npm run assets:fetch            # 只处理有 sourceUrl 的条目
npm run assets:fetch -- --force # 强制重新下载覆盖
```

脚本只负责下载 + 转 WebP，**不会改动 `shots.json`**。

> 构建时会校验：`shots.json` 里每个 slug 都必须有对应的 `.webp` 文件，缺了会直接报错并指出文件名。

### 刷新 GitHub 数据

```bash
GITHUB_TOKEN=xxx npm run data:sync
# 国内网络：
# HTTPS_PROXY=http://127.0.0.1:7897 NODE_USE_ENV_PROXY=1 GITHUB_TOKEN=xxx npm run data:sync
```

脚本拉取仓库统计、Release、Issue、最近提交与作者信息，写入
`src/data/github.snapshot.json`。失败时**不会覆盖旧快照**。页面会显示快照日期，
超过 45 天构建时给出警告。

## 目录结构

```
scripts/          素材抓取、数据同步、字体子集化、内容校验、OG 生成
  readme-snapshot.md   两份仓库 README 的存档 —— 所有数字的溯源底稿
  readme-snapshot-v5.md  V5 发布说明存档
src/
  assets/screens/     截图（webp，文件名 = shots.json 里的 slug）
  components/         layout / ui / media / home / product / download / docs
  content/docs/       8 篇 MDX 文档
  data/               所有结构化内容（版本、下载、FAQ、快捷键、工具…）
  layouts/            BaseLayout / DocLayout
  lib/                github（快照读取+降级）、docs、格式工具
  pages/              路由
  styles/             global.css（设计 token + 组件类）、prose.css
public/fonts/       Space Grotesk / IBM Plex Mono / Noto Sans SC（OFL 1.1）
deploy/nginx.conf   静态托管、缓存与安全头
```

## 部署

```bash
cp .env.example .env      # 改 SITE_URL、WEB_PORT
docker compose up -d --build
```

- 2.0 默认跑在 **8080**，与占用 80 端口的 1.0 并行，验证无误后再切换。
- 容器名 `kali-lab-2-web`，compose project 名 `kali-custom-lab-2`，互不干扰。

## 验收清单

```bash
npm run build && npm run preview
```

- [ ] 15 个页面都能打开，无控制台报错
- [ ] 390 / 768 / 1024 / 1440 / 1920 无横向滚动
- [ ] 禁用 JavaScript 后：正文、提取码、下载链接、图集仍可见
- [ ] `grep -r myqcloud dist` 为空（素材全部自托管）
- [ ] 提取码与文件大小逐条对照 `scripts/readme-snapshot.md`
- [ ] `/nonexistent` 返回 404
- [ ] Lighthouse 移动端 Performance / A11y ≥ 90

## 内容原则（改文案前请读）

1. **不编造**。所有版本号、体积、日期、提取码都必须能在
   `scripts/readme-snapshot.md` 里找到出处。
2. **不美化事实**。两个仓库都没有 LICENSE，全站只能说「仓库公开」；
   两个 GitHub Release 都没有说明和附件，页面就如实写。
3. **作者没说的不写**。比如没有 ISO、不支持 ARM（issue #5）、
   不要整体更新系统（issue #3），这些都是有原文依据的。
4. **截图 caption 必须与画面一致**。没把握就用中性描述。

## 已知限制

- GitHub 数据是**快照**，不是实时的。参数与截图年代也可能与最新版有差异。
- 字形子集是按当前文案裁的，新增生僻字需要重跑 `npm run fonts:subset`。
- 站点只做中文（`zh-CN`）。
