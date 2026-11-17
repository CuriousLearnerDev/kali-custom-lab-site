## 💻 版本信息

> 🧩 **版本**：KDE 魔改 V5（基于 Kali Linux 2026.3）
>
> 🧬 **内核**：7.1.5+kali-amd64
>
> 🖥️ **桌面**：KDE Plasma 6.7.4 / Qt 6.11.2
>
> 🧱 **固件类型**：BIOS
>
> 👤 **默认用户**：zss / 密码：ss
>
> 📅 **发布日期**：2026 年



## 🧰 完整版

> 系统压缩包大小：**待发布**
> 解压后大小：**待发布**



## 💿 系统版

> 系统压缩包大小：6.20 GB
>
> 解出来：25.00GB 左右

## 🪄前言

过去七八年间，我持续打磨 Kali 桌面体验，目标是让它在不同硬件平台上都保持稳定、流畅和实用性。Kali 从工具层面的强大出发，桌面体验也应当服务于效率与长期使用的舒适性。此次我们将经过多代迭代的 KDE 魔改带到了 **V5（基于 KDE Plasma 6.7）**

目前来说物理机当作主力机完全够用。

- **2021–2022 年**：在「**DRT安全团队**」发布首个 KDE 美化版
- **2023 年**：推出 i3 魔改版（超轻量，适合高级用户）
- **2024 年 5 月**：发布 KDE 魔改 V2，受到众多用户使用
- **2024 年底**：在「**知攻善防实验室**」推出 KDE 魔改 V3，重点优化虚拟机运行流畅度
- **2025 年 10 月**：全新升级至 KDE Plasma 6（V4），界面更现代，性能更轻盈
- **2026 年**：升级至 **KDE Plasma 6.7（V5）**，重构输入法方案、精简启动项，物理机与虚拟机双端适配

## 🧠 系统介绍：Kali Linux

Kali Linux 是一个专为 **渗透测试人员与安全研究者** 设计的开源操作系统，基于 Debian 发行版，由 Offensive Security 维护。它提供了上千个安全工具的官方仓库，并在版本发布时针对硬件兼容性、性能和 UI 进行长期优化。


## ⚡ 系统优化

本版本针对**虚拟机与物理机双场景**做过针对性调整，去掉了只为了好看、却持续吃 CPU 的美化项：

1. **内存优化**：精简启动项与常驻服务，桌面空闲内存占用更低
2. **硬盘优化**：定期 TRIM 维护，虚拟机镜像不会无限膨胀
3. **界面优化**：去掉高开销的桌面特效，保留观感但降低重绘负担

> 💡 特别说明：V4 时期使用过的「面板模糊」类第三方插件在本版已被移除 —— 实测在虚拟机软件渲染下它会持续占用约 60% 单核，得不偿失。

## 🖥️V5版本更新说明

2026 年 Kali 一共发布了三个版本（2026.1 / 2026.2 / 2026.3），累计新增 **23 个工具**，内核从 6.18 一路升级到 **7.1.5**

2026.1内核升级至 6.18

2026.2同时做了虚拟机启动优化

2026.3（当前版本V5）针对 Intel 核显、多全屏窗口场景做了性能与功耗优化

| 版本           | 视觉变化                                                     |
| -------------- | ------------------------------------------------------------ |
| Plasma 5(v3)   | ![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20250929101815834.png) |
| Plasma 6(v4)   | ![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251009160752454.png) |
| Plasma 6.7(v5) | ![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116163429525.png) |

### 🧩 V5 新特点

- **输入法方案更换**：从搜狗（fcitx4）迁移到 **fcitx5 + 雾凇拼音**，解决 Qt6 程序下无法输入的问题
- **终端环境升级**：zsh + **zim + powerlevel10k** 组合，启动更快
- 去掉冗余插件和启动项
- 内存占用更低，界面更简洁清爽

### 🧾 2026.3 新增工具（6 个）

| 工具名          | 简介                              |
| --------------- | --------------------------------- |
| **dalfox**      | 强大的开源 XSS 扫描器，面向自动化 |
| **katana**      | 下一代爬虫与资产发现框架          |
| **qsreplace**   | 替换 URL 中的查询参数值           |
| **rustscan**    | 现代端口扫描器                    |
| **sdrangel**    | 基于 Qt 的 SDR（软件无线电）前端  |
| **snaffler-ng** | SMB 共享凭据与敏感数据扫描        |

> 126 项包更新，内核从 6.19 升级至 **7.1.5**（即 V5 使用的内核）

### 🧾 2026.2 新增工具（9 个）

| 工具名           | 简介                                   |
| ---------------- | -------------------------------------- |
| **arsenal-ng**   | 基于 Go 的命令库，内置 200+ 安全速查表 |
| **hydra-gtk**    | hydra 的 GTK+ 图形界面（重新加入）     |
| **legba**        | 多协议凭据爆破 / 密码喷洒与枚举        |
| **oletools**     | 分析 MS OLE2 与 Office 文档            |
| **penelope**     | 强大的 shell 处理器                    |
| **shell-gpt**    | AI 大模型驱动的命令行效率工具          |
| **tailscale**    | 安全组网平台                           |
| **tookie-osint** | 社媒账号 OSINT 信息搜集                |
| **uro**          | 精简 URL，方便爬取与测试               |

> 内核升级至 **6.19**

### 🧾 2026.1 新增工具（8 个）

| 工具名              | 简介                                            |
| ------------------- | ----------------------------------------------- |
| **AdaptixC2**       | 可扩展的后渗透与对抗模拟框架                    |
| **Atomic-Operator** | 跨操作系统执行 Atomic Red Team 测试             |
| **Fluxion**         | 安全审计与社工研究工具                          |
| **GEF**             | GDB 的现代化增强，提供高级调试能力              |
| **MetasploitMCP**   | 为 Metasploit 提供 MCP 服务（可被 AI 直接调用） |
| **SSTImap**         | 自动 SSTI 检测工具，带交互界面                  |
| **WPProbe**         | 快速 WordPress 插件枚举                         |
| **XSStrike**        | 高级 XSS 扫描器                                 |

> 同期共 25 个新包、9 个移除、183 项更新，内核升级至 **6.18**

### 🖼️ 界面示例：

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20250929110558394.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116174238692.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116174612694.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116172717270.png)



![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116171058185.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116172936751.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116171138954.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116172137069.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116172051430.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116172624235.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116171909827.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20261116172828256.png)

## 🎨 系统预装优化工具

- **浏览器**：Chrome、Firefox ESR（预置 FoxyProxy、Wappalyzer、HackBar、Tampermonkey、Vue.js devtools、Page Assist 等 15 个扩展）
- **输入法**：**fcitx5 + 雾凇拼音**（rime-ice），支持 Qt6 程序
- **开发工具**：VSCode、zsh + zim + powerlevel10k、fzf
- **编辑器**：vim（vim-airline / vim-startify / nerdcommenter / vim-snazzy / nerdtree / vim-cursorword）
- **字体**：文泉驿正黑 + **FiraCode Nerd Font**
- **终端美化**：powerlevel10k、neofetch、lolcat
- **文件管理**：ranger（含 devicons 图标插件）、utools
- **图标主题**：Reversal-black
- **窗口装饰**：Windows11-Endless

## 🎨 外观定制一览

| 元素        | 主题                                  |
| ----------- | ------------------------------------- |
| Plasma 样式 | Layan                                 |
| 全局主题    | Kali Dark（`org.kali.kalidark`）      |
| 光标        | Layan-white-cursors                   |
| 窗口装饰    | Windows11-Endless                     |
| 图标        | Reversal-black                        |
| 字体        | 文泉驿正黑 / FiraCode Nerd            |
| 输入法主题  | transparent-green（共 11 套可选）     |
| 登录管理器  | SDDM                                  |
| 终端配色    | Sweet / Sweet-Ambar-Blue / Sweet-Mars |

## 🎮 使用技巧

> v4 与 v5 快捷键基本一致，推荐先看这个视频教程：https://www.bilibili.com/video/BV1UJCcYcEuL/

快捷键`CTRL+ALT+SHIFT+TAB`展开全部桌面

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251010134157945.png)

快捷键`CTRL+ALT+E`展开全部窗口 

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251010135819005.png)

快捷键`CTRL+ALT+D/S`桌面滑动

快捷键`ALT+回车`打开终端

快捷键`WIN+=/-`桌面放大放小

快捷键`WIN+T`桌面编辑磁吸区域

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251010140457216.png)