# README 存档（事实底稿）

本文件是两份仓库 README 的存档副本，官网所有数字、链接、提取码都以此为准。
抓取时间：2026-11-16 · 来源：
- https://github.com/CuriousLearnerDev/kali-linux-kde-beautify/blob/main/README.md
- https://github.com/CuriousLearnerDev/kali-linux-i3wm-beautify/blob/main/README.md

> 若上游 README 更新，重新抓取本文件并同步 src/data/ 下的数据。

---

# 一、kali-linux-kde-beautify

## 💻 版本信息

> 🧩 **版本**：KDE 魔改 V4（基于 Kali Linux 2025.3）
>
> 🧬 **内核**：6.12.38+kali-amd64
>
> 🧱 **固件类型**：BIOS
>
> 👤 **默认用户**：zss / 密码：ss
>
> 📅 **发布日期**：2025 年



## 🧰 完整版 kali linux 2025.3

> 系统压缩包大小：**11.7 GB**
> 解压后大小：**约 28.0 GB**
>
> 夸克地址：https://pan.quark.cn/s/c29ef5b66fa0 提取码：3g7w 



## 💿 系统版 kali linux 2025.3

> 系统压缩包大小：6.61 GB
>
> 解出来：22.00GB 左右
>
> 夸克地址：https://pan.quark.cn/s/751fc4c933f1 提取码：hpgv



## 完整版 kali linux 2024.4

>系统压缩大小：25.9 GB
>
>解出来：43.0 GB左右
>
> 夸克网盘下载地址：https://pan.quark.cn/s/4de8cd895bf1 提取码：Avx9
>
> 百度网盘下载地址：https://pan.baidu.com/s/1xV1vWl8Ly_yB-wK9ilvF8Q 提取码: hrsu 

## 系统版 kali linux 2024.4

> 系统压缩大小：8.92 GB
>
> 解出来：24.00GB 左右
>
> 夸克网盘下载地址：https://pan.quark.cn/s/411e421aae45 提取码：7btv
> 
> 百度网盘下载地址：https://pan.baidu.com/s/1bv4DiEU62A8m6MUdBnaXpg  提取码：db8j

## kali linux 2024.1版
> 系统版本：kali linux 2024.1

> 固件类型：BIOS

> 用户: zss 密码: ss

## 完整版 kali linux 2024.1

>系统压缩大小：18.8 GB
>
>解出来：36.00GB 左右
>
>完整版大小18.8 GB  下载地址：https://pan.quark.cn/s/3ba90a47b705 提取码：drcU 

## 系统版 kali linux 2024.1

> 系统压缩大小：4.91 GB
>
> 解出来：20.00GB 左右
>
> 系统版大小4.91 GB 下载地址：https://pan.quark.cn/s/020a81c976f1  提取码：Sdzr

# v4

## 🪄前言

过去六七年间，我持续打磨 Kali 桌面体验，目标是让它在不同硬件平台上都保持稳定、流畅和实用性，Kali 从工具层面的强大出发，桌面体验也应当服务于效率与长期使用的舒适性。此次我们将经过多代迭代的 KDE 魔改带到了 **V4（基于 KDE Plasma 6）**

目前来说现在物理机当作主力机完全够用的

-  **2021–2022 年**：在「**DRT安全团队**」发布首个 KDE 美化版
-  **2023 年**：推出 i3 魔改版（超轻量，适合高级用户）
-  **2024 年 5 月**：发布 KDE 魔改 V2，受到众多用户使用
-  **2024 年底**：在「**知攻善防实验室**」推出 KDE 魔改 V3，重点优化虚拟机运行流畅度
-  **2025 年10月**：全新升级至 KDE Plasma 6（V4），界面更现代，性能更轻盈

## 🧠 系统介绍：Kali Linux

Kali Linux 是一个专为 道德黑客 **渗透测试人员与安全研究者** 设计的开源操作系统 基于 Debian发行版，由 Offensive Security 维护。它提供了上千个安全工具的官方仓库，并在版本发布时针对硬件兼容性、性能和 UI 进行长期优化


## ⚡ 系统优化

这个美化是按照虚拟机性能美化的，在这个版本叫没有用的美化，和消耗资源的美化给取消了

1. 系统的内存优化
2. 硬盘优化
3. 界面优化

## 🧰 2025 kali官方更新亮点

###  📡 Nexmon 扩展支持

针对部分无线芯片提供固件补丁，支持：监控模式（Sniffing）、注入模式（Packet Injection）

### 🧾新增核心工具

| 工具名                | 简介                                |
| --------------------- | ----------------------------------- |
| Caido / Caido-CLI     | Web 安全审计工具包                  |
| Detect It Easy（DiE） | 文件类型识别                        |
| Gemini CLI            | 开源 AI 代理，终端内使用 Gemini     |
| krbrelayx             | Kerberos 中继与委派滥用工具         |
| ligolo-mp             | 多人隧道/穿透方案                   |
| llm-tools-nmap        | 让 LLM 调用 nmap 扫描               |
| mcp-kali-server       | 连接 AI Agent 与 Kali 的桥梁        |
| patchleaks            | 自动识别安全补丁与漏洞描述          |
| vwifi-dkms            | 创建虚拟 Wi-Fi 网络，支持连接与断开 |

## 🤖AI 终端

谷歌在 2025 年 6 月发布了 **Gemini CLI** 新版本，Kali 魔改版（v4）已经集成了它
使用 Gemini CLI 后，Kali 可以变成一个 **智能 AI 终端**，不仅能生成代码，还能分析系统配置

启动`gemini-cli`

登录上账号

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011151004104.png)

### 📝 让 AI 创建脚本文件

你可以让 AI 直接在系统中创建脚本文件。例如：

- 需求：生成一个 **打印当前时间** 的 Python 脚本

在终端输入：`创建一个 Python 文件 current_time.py，内容是打印当前时间`

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011154224914.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011154312436.png)

**执行成功后，脚本会被写入系统，例如桌面目录：**

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011154538888.png)

### 🔍 让 AI 分析系统配置

AI 还可以读取并分析系统文件，例如 `/etc/fstab`：

在终端输入：`请帮我把 /etc/fstab 里的挂载项解释成中文并给出优化建议`

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011161041418.png)

AI 成功读取并分析了系统的挂载配置：

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011161301508.png)

### 🕵️‍♀️ 让 AI 自动化信息收集漏洞扫描

对192.168.226.58目标进行信息搜集和漏洞扫描

在终端输入：`目标为 192.168.226.58 生成一组信息收集与漏洞扫描命令：先用 naabu 扫端口，再用 nmap 深度扫描开放端口，最后用nuclei 批量检测常见漏洞`

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011200119575.png)

![image-20251011200133709](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011200133709.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011200137777.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011200244461.png)


### 🕵️‍♀️ 让 AI 操作系统

让他帮我清理系统垃圾

输入：`清理临时目录，释放磁盘空间，并显示前10个占用最大目录`

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011201051831.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011201237023.png)

### 🕵️‍♀️ 让 AI 自动化系统入侵分析

让AI帮我检测帮我我们系统是否被入侵了

在终端输入：`帮我检查系统是否被入侵了`

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011201738856.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011201906579.png)





### 🕵️‍♀️ 等......

## 🖥️V4版本更新说明

去年的魔改版（v3）使用的是 **KDE Plasma 5 桌面环境**，而在今年的新版本（v4）中，Kali 2025.1官方已推出 **KDE Plasma 6**，界面变化幅度较大，不仅在视觉上更加现代化，整体交互体验也得到了明显提升

| 版本     | 视觉变化                                                     |
| -------- | ------------------------------------------------------------ |
| Plasma 5 | ![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20250929101815834.png) |
| Plasma 6 | ![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251009160752454.png) |

### 🧩 V4 新特点

- 去掉冗余插件和启动项
- 内存占用更低
- 界面更简洁清爽

### 🖼️ 界面示例：

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20250929110558394.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251009153426387.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251010143024393.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251009160937652.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251009161156543.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251009161226267.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251009161305954.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251010115717913.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251010115844886.png)

## 🎮 使用技巧

> v3 与 v4 快捷键基本一致，推荐先看这个视频教程：https://www.bilibili.com/video/BV1UJCcYcEuL/

快捷键`CTRL+ALT+SHIFT+TAB`展开全部桌面

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251010134157945.png)

快捷键`CTRL+ALT+E`展开全部窗口 

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251010135819005.png)

快捷键`CTRL+ALT+D/S`桌面滑动

快捷键`ALT+回车`打开终端

快捷键`WIN+=/-`桌面放大放小

快捷键`WIN+T`桌面编辑磁吸区域

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251010140457216.png)

## 🕵️‍♀️ 工具更新概览

> linux 版 基于统领 0.10.0的工具的界面

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251010140534567.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251009111659196.png)

✅ 本次更新

工具更新了：BurpSuite_pro 2025.9、yakit 1.4.4、密探1.2.3、EZ1.9.2、Naabu2.3.5、冰蝎4.1.0、webshell生成工具1.2.3、afrog 3.2.2 

新增：大华漏洞工具、EZ、NacosExploit、JNDIInjection、SpringBoot-Scan、

### 🔍 常用渗透测试工具

| 分类           | 工具                                                         |
| -------------- | ------------------------------------------------------------ |
| Web 安全       | BurpSuite Pro 中文版、Cobalt Strike、Yakit、密探、冰蝎 / 哥斯拉 4.0.1、EZ |
| 信息收集       | naabu、CMSeek、EHole、CmsVulScan、dirsearch、Fofa_Viewer、Cloud_Bucket_Leak_Detection_Tools、dnsx、subfinder、OneForAll、zpscan |
| 漏洞扫描       | nuclei、POC-bomber、Goby、afrog、fscan、Packer-Fuzzer、woodpecker-framework |
| 数据库利用     | Sqlmap 中文版、MDUT、ARDM                                    |
| XSS / Web 安全 | XSS-Trike、DalFox                                            |
| 内网渗透       | Yasso、LiqunKit、Full-Scanner、FastjsonScan、WeblogicTool、ShiroAttack2、ShiroExp、MYExploit、OA-EXPTOOL、通达OA、Apt-t00ls |
| 暴力破解       | 社工密码生成器、pydictor                                     |
| WebShell 管理  | 天蝎权限管理（Skyscorpion）、中国蚁剑、冰蝎、WebShell 生成工具 |

## 🎨 系统预装优化工具

- **浏览器**：Chrome、Firefox（支持 FoxyProxy、FindSomething、Vue Crack、OWASP Penetration Testing Kit）
- **输入法**：搜狗输入法（已解决启动问题）
- **开发工具**：VSCode、Oh-My-Zsh、fzf
- **编辑器**：vim（vim-airline / vim-startify / nerdcommenter / vim-snazzy）
- **字体**：文泉驿 + Hack Nerd Font
- **终端美化**：Powerlevel10k、neofetch、lolcat
- **文件管理**：ranger、utools
- **图标主题**：Reversal 小米
- **窗口装饰**：Windows11-Endless
- **欢迎界面**：AnimatedAbstract_bku9

## 🎨 外观定制一览

| 元素        | 主题                                  |
| ----------- | ------------------------------------- |
| Plasma 样式 | Layan                                 |
| 光标        | Layan                                 |
| 登录界面    | Slice                                 |
| 窗口修饰    | Windows11-Endless                     |
| 登录管理器  | sddm                                  |
| 插件        | KDE Control Station / Thermal Monitor |

## 🕵️‍♀️ 完整版

>系统压缩包大小：11.7 GB
>
>解出来：28.0 GB 左右

这个版本是叫全部工具集成上去了，优点打开即可使用，缺点下载文件会很大

## 🕵️‍♀️ 系统版工具包导入

>系统压缩包大小：6.61 GB

>  解出来：22.00GB 左右

工具包里面大概有70个左右的工具，默认系统版工具箱的工具是无法打开的我们需要导入工具包。

导入步骤如下：

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011094658115.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011095523199.png)

全部覆盖即可

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011095758410.png)

工具箱即可正常打开

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20251011103333573.png)




# v3

## 前言 

在很早之前就听kali linux鼎鼎大名的黑客系统集成了600多种黑客工具，黑客榜首系统，现在感觉单纯一个kali做测试有时候还是不太够用，下面的直接打包的环境里面集成了一些工具

kali linux从使用方面基本上和Ubuntu是没有区别的都是基于Debian系统
kali linux之前叫Backtrack都是Offensive Security（OffSec）开发的，Offensive Security是全球非常有名的一家美国的安全公司

- 在24年推出了kali的kde魔改，使用的用户还是非常多的，这次更新一下升级到kali linux2024.4版
- 在23年推出了kali的i3魔改，i3环境linux小白真的不容易上手，他占用的资源很少
- 我在22年的时候在《DRT安全团队》发布过kali的kde环境的美化，和这个美化是一样的，但是里面的美化是对照我的物理机进行美化，导致在虚拟机里面运行很卡消耗系统资源，在物理机占用大点资源无所谓，在虚拟机里面占用资源大就会很卡

## 优化

这个美化是按照虚拟机性能美化的，在这个版本叫没有用的美化，和消耗资源的美化给取消了

1. 系统的内存优化
2. 硬盘优化
3. 界面优化
4. 网卡优化


## 魔改后的效果

登录：

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221104853212.png)

启动加载界面：

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221102840049.png)

系统版本：

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221104004880.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221204226545.png)

开始菜单：

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221204328781.png)

终端：

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221102940385.png)

vim：

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221104458458.png)

kali内置arsenal：
![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221101915723.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221105537752.png)

## 工具集成

打开方法

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221210056849.png)

![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221210136656.png)

在这个版本里面我添加了自用的写的工具箱，一共集成了常见测试工具近60个，在kali 系统上没有的
导入什么工具就可以用什么工具

神兵利器

- **BurpSuite pro中文版**
- **Cobalt Strike 4.5**
- **Cobalt Strike 4.7**
- **Cobalt Strike 4.8**
- **Cobalt Strike 4.9**
- **Yakit**

端口扫描工具

- **naabu**：是用快速端口扫描工具

指纹识别工具

- **CMSeek** （kali也集成了CMSeek是阉割版的）
- **EHole**：EHole(棱洞) 重构版-红队重点攻击系统指纹探测工具
- **CmsVulScan**：cms识别工具，用于识别网站使用的cms，收集了github上多个扫描工具的指纹

目录扫描工具

- **dirsearch**（kali也集成了Dirsearch没有官方版本好用）：是一个基于python的命令行工具，用于暴力扫描页面结构，包括网页中的目录和文件，就是目录

资源发现工具

- **Fofa_Viewer**：是一个用 JavaFX 编写的用户友好的 FOFA 客户端
- **Fofax**：是一款使用Go编写的命令行FoFa查询工具

信息泄露工具

- **Cloud_Bucket_Leak_Detection_Tools**（云存储泄露工具）：六大云存储，泄露利用检测工具
- **SvnExploit**：支持SVN源代码泄露全版本Dump源码
- **Dumpall**：是一款信息泄漏利用工具，适用于.git/.svn/.DS_Store泄漏和目录列出

子域名探测工具

- **dnsx**：是一款功能强大的多用途DNS工具包，该工具运行速度非常快
- **OneForAll**：是一款功能强大的子域收集工具
- **密探**：含资产信息收集，子域名爆破，搜索语法，资产测绘（FOFA，Hunter，quake, ZoomEye），指纹识别，敏感信息采集，文件扫描、端口扫描、批量信息权重查询、密码字典等功能
- **OneLong**：简化前期信息收集的繁重任务，协助红队人员快速的信息收集，达到一条龙的效果
- **subfinder**：是一个子域发现工具，可以为任何目标枚举海量的有效子域名

其他信息收集工具

- **zpscan**：一款好用的命令行信息收集工具

漏洞扫描工具

- **nuclei**：Nuclei使用零误报的定制模板向目标发送请求，同时可以对主机进行批量快速扫描
- **POC-bomber**：是一款漏洞检测工具
- **Goby**：是一款基于网络空间测绘技术的新一代网络安全工具
- **afrog**：是一款快速稳定的高性能漏洞扫描程序
- **fscan**：是一个内网综合扫描工具，方便一键自动化、全方位漏洞扫描
- **Packer-Fuzzer**：一款针对Webpack等前端打包工具所构造的网站进行快速、高效安全检测的扫描工具
- **woodpecker-framework**：是一款漏洞精准检测深度利用框架，只做一件事：精准狙击高危漏洞

数据库漏洞利用工具

- **Sqlmap中文版**：汉化版sqlmap，对于英语不好的朋友们很友好
- **MDUT**：MDUT工具全称 Multiple Database Utilization Tools， 是一款中文的数据库跨平台利用工具，集合了多种主流的数据库类型
- **ARDM**：ARDM全称Another Redis Desktop Manager是一个更快、更好、更稳定的Redis桌面(GUI)管理客户端

XSS漏洞工具

- **XSS-Trike**：是一款检测Cross Site Scripting的高级检测工具
- **DalFox**：DalFox是一个强大的开源工具，专注于自动化，非常适合快速扫描XSS缺陷和分析参数

综合工具

- **Yasso**：是强大的内网渗透辅助工具集
- **LiqunKit**：工具是一个综合漏洞扫描工具
- **Full-Scanner**：是一个多功能扫描工具，支持被动/主动信息收集漏洞扫描工具联动，可导入POC和EXP

中间件/应用漏洞工具

- **FastjsonScan**：Fastjson扫描器，可识别版本、依赖库、autoType状态等。
- **WeblogicTool**：WeblogicGUI漏洞利用工具，支持漏洞检测、命令执行、内存马注入、密码解密等（深信服深蓝实验室天威战队强力驱动）
- **Struts2漏洞检查工具**：Struts2工具是希潭实验室ABC123开发全版，Struts2本漏洞检测工具
- **ShiroAttack2**：ShiroAttack2工具是一款针对Shiro560漏洞进行快速漏洞利用
- **ShiroExp**：shiro一把梭工具
- **MYExploit**：一款基于产品的一键扫描工具
- **OA-EXPTOOL**：OA-EXPTOOL是OA综合利用工具，集合将近20款OA漏洞批量扫描
- **通达OA漏洞利用工具（TongdaOATools）**
- **Apt-t00ls**：高危漏洞利用工具 泛微|蓝凌|用友|万户|通达|中间件等
- **综合利用工具**：ThinkPHP漏洞综合利用工具图形化界面，命令执行，一键getshell,批量检测，日志遍历，session包含,宝塔绕过
- **利用工具By莲花**：漏洞利用工具，支持各版本TP漏洞检测，命令执行，getshell
- **Jboss漏洞工具**：小黑开发的一款Jboss综合利用工具
- **SBSCAN**：是一款专注于spring框架的渗透测试工具

暴力破解工具

- **社工密码生成器**
- **pydictor**：Pydictor是一个强大实用的黑客暴力破解字典建立工具

webshell管理类工具

- **天蝎权限管理工具（skyscorpion）**
- **中国蚁剑**
- **冰蝎3.0**
- **冰蝎**
- **哥斯拉 4.0.1**
- **webshell生成工具（webshell_generate）**

## 系统已经安装

注意：下面的列表可能不全其他安装的可能没有放上去

- 谷歌浏览器
- 火狐浏览器

  - • HTTP Header Live：是一款可以帮助用户查看当前使用Chrome打开的所有网页的状态
  - • FoxyProxy：用的切换代理工具
  - • Disable javascript 禁止js
  - • FindSomething 在网页的源代码或js中找到一些有趣的东西
- 搜狗输入法（已经解决无法安装打开问题）
- Visual Studio Code
- vim-plug
- vim

  - 显示框插件：vim-airline/vim-airline  
  - 最近打开的文件插件：mhinz/vim-startify
  - 主题：connorholyday/vim-snazzy
  - 代码注释插件：preservim/nerdcommenter
- 文泉驿-微米黑
- 文泉驿-正黑
- 文泉驿-点阵宋体
- Hack Nerd Font字体
- oh-my-zsh
- zsh-autosuggestions
- zsh-syntax-highlighting
- fzf-zsh-plugin
- powerlevel10k
- neofetch
- lolcat
- kitty
- fzf
- atool
- highlight
- ranger
- utools（已经安装没有启动，会影响虚拟机性能）
- latte-dock（已经安装没有启动，会影响虚拟机性能）
- 图标：Reversal 小米
- 光标：Layan
- Plasma样式：Layn
- 安装登录管理器：sddm
- 欢迎界面：AnimatedAbstract_bku9
- 窗口修饰：Endless
- 登录屏幕：Slice

## 增加好用功能

我这个基于工具写了一些好用功能

### 终端搜索功能

这个是基于fzf工具

比如我们在终端搜索之前用过的命令

我们按`ctrl+r` 搜索历史命令

![](img/iimage-20240507112300016.png)

比如我们pip命令后面忘了是什么了，我们就可以输入pip然后在按`ctrl+r`

![](img/iimage-20240507112450059.png)

### 终端文件管理器

这个功能是ranger工具

在终端输入r

![](img/image-20240506235536534.pngimage-20240507112806396.png)



## 下载使用说明

关注公众号回复`kde3`获取下载链接

我一共打包了2个版本

### 完整版

这个版本是叫全部工具集成上去了，优点打开即可使用，缺点下载文件会很大

## 系统版

这个版本没有叫工具放上去，安装了工具框架，优点下载文件小，缺点需要自己下载导入工具

下载导入方法

1. 全部工具导入

   全部工具导入，下载文件名叫`storage.7z`，然后放到用户目录（/home/zss）下面解压即可图

   `storage.7z`大概3GB左右

   ![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20240507143402828.png)

   导入完成，全部功能都可以使用了

2. 单个工具导入

   单个工具导入，下载自己想用的工具导入，比如下载`jdk-20.0.1.zip`，然后放到用户目录（`/home/zss`）下面解压即可图

   注意：java环境启动的要先下载解压java 20和java 8

   > java 20 下载地址：https://pan.quark.cn/s/4c2708e908ac 提取码：ms3Y，
   > java 8 下载地址：https://pan.quark.cn/s/a18dc13ac47c 提取码：Kz6v

   ![](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20240507141805023.png)

   ![202412212051591352](https://zssnp-1301606049.cos.ap-nanjing.myqcloud.com/img/image-20241221205159135.png)

   导入什么工具就可以用什么工具

---

# 二、kali-linux-i3wm-beautify

> 自己的kali虚拟机打包分享一下，为了节省占用空间大小，其他渗透测试工具自行安装，我安装了算是比较常用的几个（为了省空间）

> 系统版本：kali linux 2023.3

> 固件类型：BIOS

> 用户: zss 密码: ss

> 下载地址：https://cloud.189.cn/t/uI7fYbYbuQRj （访问码：u67q）
> 其他的网盘正在上传中
> 注意！要是提示文件损坏，请使用7z或者rar解压工具解压！

## 本次美化是i3wm环境

i3wm这个环境日常使用的话效率真的高，基本上全部的操作全是键盘操作系统，有的时候浏览器也可以用vim模式操作浏览器，而且系统占用资源非常非常小

但是配置起来i3环境是挺费劲的基本上全是自己手动写和配置

**i3wm比kali自带的Xfce4更轻量级，所占用的资源更少**

警告！不建议linux小白使用

## 文件和大小

> 文件是vm虚拟机文件

> 压缩的大小是11多个g

> 解压出来大概27多个g

## kali美化版本

### i3配置效果

优点：好看，提高办公效率，占用系统资源少（配置完成的占用比Xfce4资源更少）

缺点：啥东西都要自己配置

警告！不建议linux小白使用

![](img/image-20230913124407421.png)

**本来想改更新登录界面的要安装sddm大概要1个多g就没有改有需要自己想改下载sddm即可**

**我这个已经叫相应登录界面的美化文件放到了**/usr/share/sddm/themes**自己修改默认登录界面的配置文件即可**

**大概配置文件是下面这样**

![](img/640.png)



### kde配置效果

优点：好看，插件都是别人写好的可以直接下载搭配

缺点：卡顿

![](img/image-20221217195637486.png)

> 文件是vm虚拟机文件

> 压缩的大小是11多个g

> 解压出来大概27多个g
## i3的基本快捷键

> **$mod这个是添加是的键盘的`alt`键**

> 下面我列出来常用的快捷键

### 常用快捷键

方向键快捷键和vi一样

`$mod+j`为左，`$mod+k` 为下，`$mod+l`为上，`$mod+；`为右

| 快捷键                   | 意思                                                         |
| ------------------------ | ------------------------------------------------------------ |
| $mod+Enter               | 打开一个新终端                                               |
| $mod+h                   | 这个是默认，创建一个窗口会在窗口右面创建                     |
| $mod+v                   | 在这个窗口下面，我们做打开一下新的终端就会在当前窗口下面创建 |
| $mod+s                   | 窗口进行堆叠                                                 |
| $mod+w                   | 进行选项卡式                                                 |
| $mod+e                   | 进行拆分/拆分                                                |
| $mod+f                   | 全屏模式或再次退出全屏模式                                   |
| $mod+Shift+q             | 关闭窗口                                                     |
| $mod+指定数字            | 创建工作区                                                   |
| $mod+Shift+指定的数字    | 叫窗口如放到那个工作区                                       |
| $mod+Shift+Space(空格键) | 切换窗口的浮动模式                                           |
| $mod+r                   | 设置窗口大小                                                 |
| $mod+Shift+方向键        | 移动窗口的位置                                               |
| $mod+Shift+r             | 重启 i3                                                      |

下面是配置自己添加的快捷方式

| 快捷键            | 意思                                                         |
| ----------------- | ------------------------------------------------------------ |
| $mod+-            | 隐藏窗口                                                     |
| $mod+=            | 再现窗口                                                     |
| $mod+Shift+a      | 打开程序启动器                                               |
| $mod+Ctrl+d       | 将工作区移至下一个                                           |
| $mod+Ctrl+s       | 上一个工作区并跟随                                           |
| $mod+Shift+Ctrl+q | 关机 l锁屏 p关机 r重启 e退出i3                               |
| $mod+m            | 开启polybar                                                  |
| $mod+Shift+m      | 杀死polybar                                                  |
| $mod+n            | 有边框和标题栏                                               |
| $mod+u            | 无边框和标题栏                                               |
| $mod+o            | 1像素边框                                                    |
| $mod+b            | 可在1像素边框，无边框和标题栏，有边框和标题栏三种风格来回切换 |



## 安装的工具

### 搜狗输入法

### 火狐浏览器插件安装：

- Disable JavaScript

- FoxyProxy

- FindSomething

- Wappalyzer

- 谷歌浏览器

### 集成了我的linux的渗透测试工具箱

  - BorpSuite专业中文
  - C S4.5中文
  - C S4.7中文
  - C S4.8中文
  - Xray社区高级版
  - POC-bomber
  - afrog
  - fscan
  - PackerFuzzer
  - Yasso
  - 综合利用工具
  - 利用工具 By莲花
  - 中国蚁剑
  - 冰蝎3.0
  - 冰蝎4.0.6
  - 哥斯拉4.0.1
  - webshell生成工具
  - ShiroAttack2
  - ShiroExp
  - OA-EXPTOOL
  - 通达OA利用工具
  - Struts2漏洞检查
  - BlueTeamTools分析辅助工具
  - CMSeeK
  - FofaViewer
  - Dirsearch
  - Fofax
  - zpscan
  - OneForAll
  - CmsVulScan
  - CmsVulScan
  - URLFinder
  - XSStrike工具
  - Jboss漏洞检查工具
  - 社工密码生成器
  - Pydictor
  - MDUT
  - ARDM
  - LiqunKit
  - Full-Scanner
  - Apt_t00ls

 ![](img/image-20230913143854072.png)

  ![](img/image-20230913143945783.png)

### xcompmgr

默认i3wm是不能透明的我们需要搭配工具使用

是一个简单的混合窗口管理器，可以实现阴影、原生窗口透明（配合`transset`工具）等特效

已经在i3配置文件添加开机自启动`exec --no-startup-id xcompmgr`

### feh壁纸

i3wm是没有提供设置壁纸这个功能的这个用到的是feh工具

设置壁纸命令` feh --randomize --bg-fill 照片`

已经在i3配置文件添加开机自启动`exec_always --no-startup-id feh --randomize --bg-fill  照片`

### nitrogen

通过feh可以设置壁纸后然后我们搭配这个用于控制壁纸管理的工具

### polybar

是一个用于创建状态栏的快速且易于使用的工具，为用户桌面环境构建漂亮且高度可定制的状态栏

![](img/image-20230913120205884.png)

下面有配置的源代码

### 字体配置

kali的系统默认的字体在`/usr/share/fonts/truetype`

i3字体设置在i3配置文件`vim ~/.config/i3/config`

格式

```
font pango:家族列表 样式选项 大小
```

![](img/image-20211005085131340.png)

### 设置主题lxappearance

i3wm默认也是没有主题设置的这边搭配的是lxappearance工具进行设置的主题

### 系统通知

默认i3wm没有通知，这个常常会导致系统卡死的问题这边搭配的是dunst工具

添加了开自启动`exec_always dunst  `

包含一个示例配置文件（通常是 /etc/dunst/dunstrc）。注意：这是以前的 /usr/share/dunst/dunstrc。在使用 dunst 之前，将此文件复制到 ~/.config/dunst/dunstrc 并进行相应的编辑

创建文件

```
mkdir ~/.config/dunst/
```

编辑文件

```sh
vim ~/.config/dunst/dunstrc
```

### 颜色修改

默认i3wm配置颜色啥的需要我们在系统配置文件里面手动编写修改

格式

```sh
窗口装饰 边框 背景 正文 指标 儿童边框
```

下面是他的窗口装饰

```
#当前具有焦点的客户端
client.focused

#客户端是其容器的焦点之一，但目前没有焦点
client.focused_inactive

#不是其容器的焦点之一的客户端
client.unfocused			

#已激活紧急提示的客户端
client.urgent

#背景和文本颜色用于绘制占位符窗口内容（恢复布局时）。边框和指示器被忽略
client.placeholder

# 背景颜色将用于绘制客户端窗口的背景，客户端将在该背景上呈现。只有未覆盖此窗口整个区域的客户端才会显示颜色。请注意，此颜色类仅采用单一颜色
client.background
```

演示

```sh
# 窗户颜色
# 定义的参数，就和变量一样
set $bg-color 	         #2f343f  #$bg-color就定于#2f343f 
set $inactive-bg-color   #2f343f
set $text-color          #f3f4f5
set $inactive-text-color #676E7D
set $urgent-bg-color     #E53935
# 窗口装饰					
#                       边框              	背景         			 文本                 指标
						#$bg-color就定于#2f343f 
client.focused          $bg-color             $bg-color         	$text-color          #00ff00
client.unfocused        $inactive-bg-color    $inactive-bg-color 	$inactive-text-color #00ff00
client.focused_inactive $inactive-bg-color    $inactive-bg-color 	$inactive-text-color #00ff00
client.urgent           $urgent-bg-color      $urgent-bg-color   	$text-color          #00ff00
```

### 托盘图标

i3也没有托盘图标无法看见后台程序运行，这边搭配的是xrandr工具效果![](img/image-20211112121759568.png)

蓝牙托盘：安装`apt install blueman`添加系统配置文件自启动`exec --no-startup-id blueman-applet`

电池托盘：安装`apt install mate-power-manager`添加系统配置文件自启动`exec --no-startup-id  mate-power-manager`

网络连接：安装`sudo apt-get install network-manager-gnome`添加系统配置文件自启动`exec --no-startup-id  nm-applet`![image-20211015074942658](img/image-20211015074942658.png)

### 中启用身份验证

这个也是非常重要的如果没有添加无法启动root用户的图形化程序这个搭配的是lxpolkit工具

系统配置文件添加自启动`exec --no-startup-id lxpolkit`

## tools

！这个有一个存在的问题至今没有解决，启动不了终端工具比如sqlmap（我也懒得解决了）直接用`$mod+Shift+a`快捷键打开程序启动器

tools工具效率办公，就不用介绍了

我这边设置的快捷键是i3wm的经常用的快捷键`alt+d`

![image-20230913124836653](img/image-20230913124836653.png)

## ranger终端文件管理器

这个在i3的系统里面经常用

下面做了美化的效果图

![image-20230913122125622](img/image-20230913122125622.png)

有需要修改配置文件的自行修改文件在``~/.config/ranger``

| 主要配置文件  |                                                    作用 |
| :-----------: | ------------------------------------------------------: |
| `commands.py` | 包含以Python编写的各种函数的实现，用于修改`rangers`行为 |
|   `rc.conf`   |      用于设置各种选项并将按键绑定到功能，就是设置快捷键 |
| `rifle.conf`  |                            决定使用哪个程序打开哪个文件 |
|  `scope.sh`   |             是一个shell脚本，用于生成各种文件类型的预览 |
| plugins文件夹 |                        这个文件夹要自己创建用于添加插件 |

### 列出了一点常用的快捷方式

### 文件管理器操作

| 文件管理器操作 |                 作用 |
| :------------: | -------------------: |
|      `h`       |           返回上一层 |
|      `l`       |             进入文件 |
|      `j`       |                 向下 |
|      `k`       |                 向上 |
|    `Enter`     |             打开文件 |
|      `q`       |                 退出 |
|      `Q`       |             全部退出 |
|   `Shlfl+S`    |       进入目录并提出 |
|      `ZZ`      |                 退出 |
|      `ZQ`      |                 退出 |
|      `R`       |       刷新reload_cwd |
|    `ctrl+r`    |                 重置 |
|    `<c-r>`     |            重置reset |
|       ?        |                 help |
|       W        |         查看运行日志 |
|      `F`       | 冻结文件（只读模式） |

### 删除

| 按键           | 说明                                              |
| :------------- | :------------------------------------------------ |
| `dD` 或者 `F8` | 删除条目（文件或者文件夹），或者 `:` + `delete`。 |
| `DD`           | 将条目移动到回收站里。                            |

### 新建

| 按键     | 说明                           |
| :------- | :----------------------------- |
| `F7`     | 新建文件夹，等同于 `:mkdir `。 |
| `INSERT` | 新建文件，等同于 `:touch `。   |

### 重命名

| 按键 | 说明                             |
| :--- | :------------------------------- |
| `cw` | 重命名（含后缀名）               |
| `I`  | 重命名，光标在最前               |
| `A`  | 重命名，光标在最后（含后缀名）   |
| `a`  | 重命名，光标在最后（不含后缀名） |



### 复制

| 按键           | 说明                                                         |
| :------------- | :----------------------------------------------------------- |
| `yy` 或者 `F5` | 复制文件                                                     |
| `ya`           | `add` 模式，添加光标处文件到复制队列中（文件夹无效）。       |
| `yr`           | `remove` 模式，从复制队列中移除光标处文件（文件夹无效）。    |
| `yt`           | `toggle` 模式，切换光标处文件是否在复制队列中（文件夹无效）。 |

### 剪切

| 按键           | 说明                    |
| :------------- | :---------------------- |
| `dd` 或者 `F6` | 剪切                    |
| `da`           | `add` 模式，同复制。    |
| `dr`           | `remove` 模式，同复制。 |
| `dt`           | `toggle` 模式，同复制。 |
| `dk`           | 同复制                  |
| `dj`           | 同复制                  |
| `dgg`          | 同复制                  |
| `dG`           | 同复制                  |
| `ud` 或者 `uy` | 取消剪切                |

### 粘贴

| 按键  | 说明                                                         |
| :---- | :----------------------------------------------------------- |
| `pp`  | 粘贴                                                         |
| `po`  | 粘贴 强制覆盖                                                |
| `pP`  | `append` 模式，如果该目录中有同名条目，则在条目后面加上 `_`、`_0`、`_1`……。如果条目是文件，则在文件后缀名后加入。 |
| `pO`  | `append` 模式 + `overwrite` 模式。                           |
| `pl`  | 粘贴软链接，不在状态栏显示目标条目的相对路径。               |
| `pL`  | 粘贴为符号链接（相对路径），在状态栏显示目标条目的相对路径。 |
| `phl` | 粘贴为硬链接                                                 |
| `pht` | 粘贴为硬链接的子目录（hardlinked subtree）                   |

### 搜索

| 按键             | 说明                                                         |
| :--------------- | :----------------------------------------------------------- |
| `/`              | 打开搜索框，输入要搜索的字符串，回车后开始搜索。             |
| `f`              | 查找，等同于运行满足条件的文件或者打开满足条件的文件夹。     |
| `zf`             | 与命令行 `filter` 作用一样，只显示符合条件的条目，区分大小写。 |
| `n` `N`          | 查找下一个搜索结果 查找上一个搜索结果                        |
| `c` + `对应字母` | 通过对应属性依次遍历，如：`ca`：通过 `atime`属性依次遍历`cc`：通过 `ctime` 属性依次遍历`ci`：通过 `mimetype` 属性依次遍历`cm`：通过 `mtime` 属性依次遍历`cs`：通过 `size` 属性依次遍历`ct`：通过 `tag` 属性依次遍历 |



### 排序

| 按键 |           说明           |
| :--: | :----------------------: |
|  or  |         反转排序         |
|  os  |     根据文件大小排序     |
|  ob  |     根据文件名称排序     |
|  om  |     根据修改时间排序     |
|  oE  |      根据扩展名排序      |
|  zd  | 切换目录是否排在文件前面 |

### 预览设置

| 按键 |       说明       |
| :--: | :--------------: |
|  zi  | 切换是否预览图片 |
|  zm  | 切换是否允许鼠标 |
|  zp  | 切换是否预览文件 |
|  zP  | 切换是否预览目录 |
|  zh  |   查看隐藏文件   |

### 显示过滤

|     按键     |          说明          |
| :----------: | :--------------------: |
| `zf`或者`zz` | 过滤文件，这个非常好用 |
|     `.d`     |       只显示目录       |
|     `.f`     |       只显示文件       |



### 其他好用的

| 按键 |                             说明                             |
| :--: | :----------------------------------------------------------: |
|  g   |                           快速进入                           |
| `m`n | 字符标记目录，进入标记的目录按一下`'n`，`n`是随便一个标记的一个字符 |
|  r   |                           执行程序                           |



## fzf搜索

这个工具是非常好用的一个搜索工具

配置起来也是好好长时间去折腾

下面是配置自己添加的快捷方式

| 快捷键   | 意思     |
| -------- | -------- |
| `ctrl+r` | 搜索命令 |
| `\+tab`  | 文件搜索 |

搜索语法

| 令牌      | 比赛类型         | 描述                   |
| --------- | ---------------- | ---------------------- |
| `sbtrkt`  | 模糊匹配         | 匹配的项目 `sbtrkt`    |
| `'wild`   | 完全匹配（引用） | 包含的项目 `wild`      |
| `^music`  | 前缀完全匹配     | 开头的项目 `music`     |
| `.mp3$`   | 后缀完全匹配     | 以 `.mp3`              |
| `!fire`   | 反向精确匹配     | 不包括的项目 `fire`    |
| `!^music` | 反向前缀完全匹配 | 不以开头的项目 `music` |
| `!.mp3$`  | 反后缀完全匹配   | 不以 `.mp3`            |

在终端输入sudo apt   然后加`ctrl+r`

效果图

![image-20230913123021747](img/image-20230913123021747.png)

## fzf和ranger搭配

可以通过`:fzf_select`命令来在ranger中启动fzf查找

![image-20211017004652050](img/image-20211017004652050.png)

配置快捷键`vim ~/.config/ranger/rc.conf`

```sh
map \ fzf_select
```

在启动ranger我们按`\`就可以用fzf进行搜索了






## 虚拟机vmtools

1. 安装VMware Tools

   ```sh
   pacman -S open-vm-tools 
   ```

2. 安装显卡驱动

   ```
   pacman -S xf86-video-vmware
   ```


3. 使vmware tools开机自启动

   ```sh
   systemctl start vmtoolsd
   systemctl enable vmtoolsd
   ```


4. 安装一些模块

   在这个`vim /etc/mkinitcpio.conf`最后面添加

   ```
   MODULES=(vsock vmw_vsock_vmci_transport vmw_balloon vmw_vmci vmwgfx)
   ```

   运行

   ```
   mkinitcpio -p linux
   ```

5. 安装gtkmm

   ```sh
   pacman -S gtkmm
   ```

6. 如果有问题修复Tools中的60秒BUG

   ```sh
   vim /usr/lib/systemd/system/vmtoolsd.service
   ```

   在`[service]`项的后面增加一行   `KillSignal=SIGKILL`

### 不能复制粘贴解决方法

```
sudo vmware-user-suid-wrapper
```



## i3的config配置修改的源代码

```zsh
set $mod Mod1


# #设置窗口边框等等
new_window none
new_float normal
hide_edge_borders both


#设置窗口间距
gaps inner 12
#gaps outer 6


# 窗户颜色
# 定义的参数，就和变量一样
set $bg-color 	         #2f343f  #$bg-color就定于#2f343f 
set $inactive-bg-color   #2f343f
set $text-color          #f3f4f5
set $inactive-text-color #676E7D
set $urgent-bg-color     #E53935
# 窗口装饰					
#                       边框              	背景         			 文本                指标
						#$bg-color就定于#2f343f 
client.focused          $bg-color             $bg-color         	$text-color          #00ff00
client.unfocused        $inactive-bg-color    $inactive-bg-color 	$inactive-text-color #00ff00
client.focused_inactive $inactive-bg-color    $inactive-bg-color 	$inactive-text-color #00ff00
client.urgent           $urgent-bg-color      $urgent-bg-color   	$text-color          #00ff00
# Font for window titles. Will also be used by the bar unless a different font
# is used in the bar {} block below.
font pango:Bitstream Vera Sans Mono 11



##==========================================自己配置 自启动=================================================================================================
# ======================================================================================================================================================
#exec --no-startup-id  mate-power-manager #电池托盘
exec --no-startup-id blueman-applet #蓝牙托盘
exec --no-startup-id lxpolkit # 身份认证
#exec --no-startup-id  variety #壁纸


# 自带锁屏
exec --no-startup-id xss-lock --transfer-sleep-lock -- i3lockr --blur 60 

# 启动utools 
exec --no-startup-id /usr/bin/utools 
 
exec_always feh --randomize --bg-fill 图片/壁纸/浏览器/792a4b6934fc491b81342206e3192e59.png

# 剪切板管理
exec --no-startup-id copyq

exec --no-startup-id nm-applet

#启动polybar
exec --no-startup-id  ~/.config/polybar/launch.sh  

# 透明
exec --no-startup-id xcompmgr
#exec --no-startup-id /opt/apps/com.baidu.fcitx-baidupinyin/files/bin/bd-qimpanel.watchdog.sh # 启动百度输入法
exec --no-startup-id dunst  # dunst系统通知

# 无操作10分钟自动锁屏
exec --no-startup-id xautolock -time 10000 -locker i3lockr --blur 60
# ======================================================================================================================================================
# ======================================================================================================================================================

# Use pactl to adjust volume in PulseAudio.
set $refresh_i3status killall -SIGUSR1 i3status
bindsym XF86AudioRaiseVolume exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ +10% && $refresh_i3status
bindsym XF86AudioLowerVolume exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ -10% && $refresh_i3status
bindsym XF86AudioMute exec --no-startup-id pactl set-sink-mute @DEFAULT_SINK@ toggle && $refresh_i3status
bindsym XF86AudioMicMute exec --no-startup-id pactl set-source-mute @DEFAULT_SOURCE@ toggle && $refresh_i3status

# Use Mouse+$mod to drag floating windows to their wanted position
floating_modifier $mod



##====================================自己配置 快捷键==============================================
#bindsym $mod+n exec  --no-startup-id netease-cloud-music # 网易云音乐
bindsym $mod+Shift+g exec  google-chrome # 谷歌浏览器
bindsym $mod+z exec  nautilus # 文件管理器
bindsym $mod+Return exec  konsole #打开终端
bindsym $mod+l exec --no-startup-id i3lockr --blur 60 # 手动锁屏


# 杀死 polybar
bindsym $mod+Shift+m exec killall polybar

# 启动polybar
bindsym $mod+m  exec  ~/.config/polybar/launch.sh  --shapes


# 壁纸设置
bindsym $mod+Ctrl+1  exec  feh --randomize --bg-fill ~/图片/壁纸/浏览器/16e97308c2e942a28c68afb22a36023b.jpg
bindsym $mod+Ctrl+2  exec  feh --randomize --bg-fill ~/图片/壁纸/浏览器/792a4b6934fc491b81342206e3192e59.png

bindsym $mod+Ctrl+3  exec  feh --randomize --bg-fill ~/图片/壁纸/20200605013054948.jpg.2560.1440.jpg
bindsym $mod+Ctrl+4  exec  feh --randomize --bg-fill ~/图片/壁纸/浏览器/21e8398470f1486583e548fe8db26d24.jpg
bindsym $mod+Ctrl+5  exec  feh --randomize --bg-fill ~/图片/壁纸/浏览器/4yxdxk.png
bindsym $mod+Ctrl+6  exec  feh --randomize --bg-fill ~/图片/壁纸/浏览器/5wxyp1.png
bindsym $mod+Ctrl+7  exec  feh --randomize --bg-fill ~/图片/壁纸/浏览器/43vvmv.jpg
bindsym $mod+Ctrl+8  exec  feh --randomize --bg-fill ~/图片/壁纸/浏览器/45d2y5.jpg
bindsym $mod+Ctrl+9  exec  feh --randomize --bg-fill ~/图片/壁纸/浏览器/20200509060837255.jpg
bindsym $mod+Ctrl+0  exec  feh --randomize --bg-fill ~/图片/2021-11-14_11-05.jpg

#---------显示标题栏---------
# 有边框和标题栏
bindsym $mod+n border normal   

# 无边框和标题栏
bindsym $mod+u border none    

# 1像素边框
bindsym $mod+o border pixel 3 

# 可在上面三种风格来回切换
bindsym $mod+b border toggle  
#---------------------------

#----------隐藏窗口----------
# 按$mod+-隐藏
bindsym $mod+minus move scratchpad  

#  按$mod+= 再现窗口
bindsym $mod+plus scratchpad show   
#---------------------------

bindsym $mod+Shift+a  exec xfce4-appfinder  # xfce程序启动器

# 将工作区移至下一个/上一个工作区并跟随
bindsym $mod+Ctrl+d   workspace next
bindsym $mod+Ctrl+s   workspace prev



# 关机 l锁屏 p关机 r重启 e退出i3
bindsym $mod+Shift+Ctrl+q mode "$mode_system"
mode "$mode_system" {
    bindsym l exec --no-startup-id i3lock -c '#000000', mode "default"
    bindsym e exec --no-startup-id i3-msg exit, mode "default"
    bindsym r exec --no-startup-id systemctl reboot, mode "default"
    bindsym o exec --no-startup-id systemctl poweroff, mode "default"
    bindsym Escape mode "default"
}

mode "resize" {

        bindsym h resize grow width 1 px or 1 ppt
        bindsym l resize shrink width 1 px or 1 ppt
        bindsym j resize grow height 1 px or 1 ppt
        bindsym k resize shrink height 2 px or 1 rppt
        #bindsym semicolon resize grow width 10 px or 10 ppt

        # same bindings, but for the arrow keys
        bindsym Left resize shrink width 5 px or 5 ppt
        bindsym Down resize grow height 5 px or 5 ppt
        bindsym Up resize shrink height 5 px or 5 ppt
        bindsym Right resize grow width 5 px or 5 ppt

        # back to normal: Enter or Escape or $mod+r
        bindsym Return mode "default"
        bindsym Escape mode "default"
        bindsym $mod+r mode "default"
}
# ======================================================================================================================================================




# kill focused window
bindsym $mod+Shift+q kill

# change focus
bindsym $mod+j focus left
bindsym $mod+k focus down
#bindsym $mod+l focus up
bindsym $mod+semicolon focus right

# alternatively, you can use the cursor keys:
bindsym $mod+Left focus left
bindsym $mod+Down focus down
bindsym $mod+Up focus up
bindsym $mod+Right focus right

# move focused window
bindsym $mod+Shift+j move left
bindsym $mod+Shift+k move down
bindsym $mod+Shift+l move up
bindsym $mod+Shift+semicolon move right

# alternatively, you can use the cursor keys:
bindsym $mod+Shift+Left move left
bindsym $mod+Shift+Down move down
bindsym $mod+Shift+Up move up
bindsym $mod+Shift+Right move right

# split in horizontal orientation
bindsym $mod+h split h

# split in vertical orientation
bindsym $mod+v split v

# enter fullscreen mode for the focused container
bindsym $mod+f fullscreen toggle

# change container layout (stacked, tabbed, toggle split)
bindsym $mod+s layout stacking
bindsym $mod+w layout tabbed
bindsym $mod+e layout toggle split

# toggle tiling / floating
bindsym $mod+Shift+space floating toggle

# change focus between tiling / floating windows
bindsym $mod+space focus mode_toggle

# focus the parent container
bindsym $mod+a focus parent

set $ws1 "1"
set $ws2 "2"
set $ws3 "3"
set $ws4 "4"
set $ws5 "5"
set $ws6 "6"
set $ws7 "7"
set $ws8 "8"
set $ws9 "9"
set $ws10 "10"

# switch to workspace
bindsym $mod+1 workspace number $ws1
bindsym $mod+2 workspace number $ws2
bindsym $mod+3 workspace number $ws3
bindsym $mod+4 workspace number $ws4
bindsym $mod+5 workspace number $ws5
bindsym $mod+6 workspace number $ws6
bindsym $mod+7 workspace number $ws7
bindsym $mod+8 workspace number $ws8
bindsym $mod+9 workspace number $ws9
bindsym $mod+0 workspace number $ws10

# move focused container to workspace
bindsym $mod+Shift+1 move container to workspace number $ws1
bindsym $mod+Shift+2 move container to workspace number $ws2
bindsym $mod+Shift+3 move container to workspace number $ws3
bindsym $mod+Shift+4 move container to workspace number $ws4
bindsym $mod+Shift+5 move container to workspace number $ws5
bindsym $mod+Shift+6 move container to workspace number $ws6
bindsym $mod+Shift+7 move container to workspace number $ws7
bindsym $mod+Shift+8 move container to workspace number $ws8
bindsym $mod+Shift+9 move container to workspace number $ws9
bindsym $mod+Shift+0 move container to workspace number $ws10

# reload the configuration file
bindsym $mod+Shift+c reload
# restart i3 inplace (preserves your layout/session, can be used to upgrade i3)
bindsym $mod+Shift+r restart
# exit i3 (logs you out of your X session)
bindsym $mod+Shift+e exec "i3-nagbar -t warning -m 'You pressed the exit shortcut. Do you really want to exit i3? This will end your X session.' -B 'Yes, exit i3' 'i3-msg exit'"



bindsym $mod+r mode "resize"

```

## polybar配置的源代码

```zsh
[colors]

; ;background = ${xrdb:color0:#222}
; background = #cc222222
; background-alt = #444
; ;foreground = ${xrdb:color7:#222}
; foreground = #b6a49b
; foreground-alt = #555
; primary = #ffb52a
; secondary = #e60053
; alert = #bd2c40

secondary = #e60053
nord7 = #8FBCBB
nord8 = #2bcec2
notice = #f1fa8c

;次配置颜色
success = #90EE90

;主配置颜色
warning = #EE6363

;#ff5555

background = #30222222
; 100  %	00
; 99   %	03
; 98   %	05
; 97   %	07
; 96   %	0A
; 95   %	0D
; 94   %	0F
; 93   %	12
; 92   %	14
; 91   %	17
; 90   %	1A
; 89   %	1C
; 88   %	1E
; 87   %	21
; 86   %	24
; 85   %	26
; 84   %	29
; 83   %	2B
; 82   %	2E
; 81   %	30
; 80   %	33
; 79   %	36
; 78   %	38
; 77   %	3B
; 76   %	3D
; 75   %	40
; 74   %	42
; 73   %	45
; 72   %	47
; 71   %	4A
; 70   %	4D
; 69   %	4F
; 68   %	52
; 67   %	54
; 66   %	57
; 65   %	59
; 64   %	5C
; 63   %	5E
; 62   %	61
; 61   %	63
; 60   %	66
; 59   %	69
; 58   %	6B
; 57   %	6E
; 56   %	70
; 55   %	73
; 54   %	75
; 53   %	78
; 52   %	7A
; 51   %	7D
; 50   %	80
; 49   %	82
; 48   %	85
; 47   %	87
; 46   %	8A
; 45   %	8C
; 44   %	8F
; 43   %	91
; 42   %	94
; 41   %	96
; 40   %	99
; 39   %	9C
; 38   %	9E
; 37   %	A1
; 36   %	A3
; 35   %	A6
; 34   %	A8
; 33   %	AB
; 32   %	AD
; 31   %	B0
; 30   %	B3
; 29   %	B5
; 28   %	B8
; 27   %	BA
; 26   %	BD
; 25   %	BF
; 24   %	C2
; 23   %	C4
; 22   %	C7
; 21   %	C9
; 20   %	CC
; 19   %	CF
; 18   %	D1
; 17   %	D4
; 16   %	D6
; 15   %	D9
; 14   %	DB
; 13   %	DE
; 12   %	E0
; 11   %	E3
; 10   %	E6
; 9   %	E8
; 8   %	EB
; 7   %	ED
; 6   %	F0
; 5   %	F2
; 4   %	F5
; 3   %	F7
; 2   %	FA
; 1   %	FC
; 0   %	FF



foreground = #ffffff
background-alt = #444
foreground-alt = #6272a4




[settings]
screenchange-reload = true
;compositing-background = xor
;compositing-background = screen
;compositing-foreground = source
;compositing-border = over
;pseudo-transparency = false

[global/wm]
margin-top = 1
margin-bottom = 3


[bar/mybar]
;monitor = ${env:MONITOR:HDMI-1}
;width = 100% ;显示栏的长度
height = 28  ;显示栏的宽度

;offset-x = 1%
;offset-y = 1%
radius = 12
fixed-center = true

background = ${colors.background}
foreground = ${colors.foreground}

line-size = 4
line-color = #f00

border-size = 0 ;顶部的距离
border-color = #00000000

padding-left = 2
padding-right = 2

module-margin-left = 1
module-margin-right = 2

;进程管理器的大小
tray-maxsize = 27

; https://github.com/ryanoasis/nerd-fonts
; https://www.nerdfonts.com/cheat-sheet
font-0 = fixed:pixelsize=13;1
font-1 = unifont:fontformat=truetype:size=13:antialias=false;0
font-2 = Noto Sans Symbols2:style=Regular:size=13
font-3 = Font Awesome 5 Free:style=Solid:size=13
font-4 = Font Awesome 5 Brands:style=Regular:size=12
font-5 = DejaVu Sans:style=Bold:size=12

; 朗读古寺
enable-ipc = true

; 最左面显示
modules-left = powermenu date  i3 title daily-poem 
; title==显示窗口的名
; daily-poem==日常读诗
; powermenu==关机操作
; menu-apps== 菜单
; menu-apps==i3 工作区


;modules-center = mpd

;中间显示
modules-center = 

               


;最右面显示
modules-right =   cpu    memory  temperature   wireless-network wired-network  eth-upload eth-download wlan-upload wlan-download   pulseaudio  backlight  battery  system-usb-udev  
            
            ;temperature==温度
            ;wireless-network=无线网络
            ;wired-network=有线网络
            ; eth-upload= eth网络的上传速、
            ; eth-download= eth网络的下载传速
            ; wlan-upload= wlan网络的上传速
            ; wlan-download = wlan网络的下载传速
            ;cpu=cpu
            ;memory=内存
            ;system-usb-udev==USB
            ;xkeyboard==键盘提示
            ;pulseaudio==音量
            ;backlight==屏幕亮度
            ;date==日期时间
            ;battery == 充电


# 托架
tray-position = right
tray-padding = 2
tray-background = ${colors.background}
transparent = true


 
cursor-click = pointer
cursor-scroll = ns-resize

;====================================


; ===菜单===
; https://github.com/polybar/polybar/wiki/Module:-menu
[module/menu-apps]
type = custom/menu

; 若为 true, <label-toggle> 将在左边,若为 false, 将在右边
expand-right = true

; menu-LEVEL-N 与 label-NAME 属性相同，并附加 exec 属性
; 命令将使用 /bin/sh -c $COMMAND

menu-0-0 = 浏览器
menu-0-0-exec = #menu-apps.open.1
menu-0-1 = 多媒体
menu-0-1-exec = #menu-apps.open.2

menu-1-0 =  Firefox
menu-1-0-exec = firefox
menu-1-1 =  Chromium
menu-1-1-exec = chromium

menu-2-0 = Gimp
menu-2-0-exec = gimp
menu-2-1 = Scrot
menu-2-1-exec = scrot

; <label-toggle> 可替换为 <label-(openclose)>
; 如果 expand-right 为 true ，则默认值为"<label-toggle><menu>"。注意，如果使用<label-toggle> 就必须定义 <label-open>
; format = <label-toggle> <menu>

label-open = 
label-close = 

; 分隔元件
label-separator = 


; ===i3 工作区===
; https://github.com/polybar/polybar/wiki/Module:-i3
[module/i3]
type = internal/i3
format = <label-state> <label-mode>

;下面横杆
format-underline = 	#FFFFF0

index-sort = true
wrapping-scroll = false

label-mode-padding = 2
label-mode-foreground = #000
label-mode-background = ${colors.primary}

; 聚焦在显示器上的活动工作区
label-focused = %index%
label-focused-background = ${colors.background-alt}
label-focused-underline= ${colors.primary}
label-focused-padding = 2

; 任何显示器上的非活动工作区
label-unfocused = %index%
label-unfocused-padding = 2

; 未聚焦在显示器生的活动工作区
label-visible = %index%
label-visible-background = ${self.label-focused-background}
label-visible-underline = ${self.label-focused-underline}
label-visible-padding = ${self.label-focused-padding}

; 设置紧急提示的工作区
label-urgent = %index%
label-urgent-background = ${colors.alert}
label-urgent-padding = 2

; 工作区之间的分隔符
; label-separator = 


; ===网络===
; https://github.com/polybar/polybar/wiki/Module:-network
[module/wired-network]
type = internal/network
interface = eth0
interval = 3.0

; 间隔宽度
udspeed-minwidth = 3
; 所以端口累计
accumulate-stats = true
; 对未知状态的网络设备启用
unknown-as-up = true

format-connected = <label-connected>

# 填充
;format-connected-padding = 2
;下面横杆
format-connected-underline = 	#912CEE
format-disconnected = <label-disconnected>
label-connected =   %linkspeed%
label-connected-foreground = ${colors.warning}

;label-disconnected = 
;label-disconnected-foreground = #66ffffff


[module/wireless-network]
type = internal/network
interface = wlan0

interval = 3.0

; 间隔宽度
udspeed-minwidth = 3
; 所以端口累计
accumulate-stats = true
; 对未知状态的网络设备启用
unknown-as-up = true

format-connected =  <label-connected>

# 填充
;format-connected-padding = 2

;下面横杆
format-connected-underline = 	#912CEE


format-disconnected = <label-disconnected>

label-connected =   %essid% 
label-connected-foreground = ${colors.warning}



;label-disconnected = 


; label-disconnected = 
; label-disconnected-foreground = #66ffffff    

; ===eth0网速度===
[module/eth-upload]
type = internal/network
interface =eth0
label-connected = %upspeed:7%

format-connected = <label-connected>

# 填充
;format-connected-padding = 2
;下面横杆
format-connected-underline = #FFE4E1
format-connected-prefix = " "
format-connected-prefix-foreground = ${colors.warning}

[module/eth-download]
type = internal/network
interface = eth0
label-connected = %downspeed:7%
format-connected= <label-connected>

# 填充
;format-connected-padding = 2
;下面横杆
format-connected-underline = #912CEE
format-connected-prefix = " "
format-connected-prefix-foreground = ${colors.warning}


; ===wlan网速度===
[module/wlan-upload]
type = internal/network

interface =wlan0
label-connected = %upspeed:7%
format-connected = <label-connected>

# 填充
;format-connected-padding = 2

;下面横杆
format-connected-underline = #FFE4E1

format-connected-prefix = " "
format-connected-prefix-foreground = ${colors.warning}

[module/wlan-download]
type = internal/network
interface = wlan0
label-connected = %downspeed:7%
format-connected= <label-connected>

# 填充
;format-connected-padding = 2

;下面横杆
format-connected-underline = 	#912CEE

format-connected-prefix = " "
format-connected-prefix-foreground = ${colors.warning}



; ===键盘提示===
; https://github.com/polybar/polybar/wiki/Module:-xkeyboard
[module/xkeyboard]
type = internal/xkeyboard


; 忽略列表
blacklist-0 = scroll lock

; <label-indicator>
format =  <label-indicator>
format-spacing = 1

label-indicator-on-capslock = 
label-indicator-off-capslock =
;label-indicator-on-numlock = 🅽
;label-indicator-off-numlock =

label-indicator-on-capslock-foreground = ${colors.warning}


; ===音量===
; https://github.com/polybar/polybar/wiki/Module:-pulseaudio
[module/pulseaudio]
type = internal/pulseaudio

format-volume = <ramp-volume> <label-volume>

# 填充
format-volume-padding = 2

;下面横杆
format-volume-underline = #CD2990


label-muted =  muted 
label-muted-foreground = #666

ramp-volume-0 = 
ramp-volume-0-foreground = ${colors.success}
ramp-volume-1 = 
ramp-volume-1-foreground = ${colors.success}
ramp-volume-2 = 
ramp-volume-2-foreground = ${colors.success}
ramp-volume-3 = 
ramp-volume-3-foreground = ${colors.success}
ramp-volume-4 = 
ramp-volume-4-foreground = ${colors.notice}
ramp-volume-5 = 
ramp-volume-5-foreground = ${colors.warning}

ramp-volume-foreground = ${colors.nord7}


; ===CPU===
; https://github.com/polybar/polybar/wiki/Module:-cpu
[module/cpu]
type = internal/cpu



; 刷新间隔，默认: 1
interval = 0.5

format = <label> 
;format = <label> <ramp-coreload>

# 填充
format-padding = 2
;下面横杆
format-underline = #CD1076

label = CPU/%percentage%%    
label-foreground = ${colors.warning}



;Spacing between individual per-core ramps
ramp-coreload-spacing = 1
ramp-coreload-0 = ▁
ramp-coreload-1 = ▂
ramp-coreload-2 = ▃
ramp-coreload-3 = ▄
ramp-coreload-4 = ▅
ramp-coreload-5 = ▆
ramp-coreload-6 = ▇
ramp-coreload-7 = █

ramp-coreload-0-foreground = #90EE90
ramp-coreload-1-foreground = #90EE90
ramp-coreload-2-foreground = #FF7F24
ramp-coreload-3-foreground = #fba922
ramp-coreload-4-foreground = #fba922
ramp-coreload-5-foreground = #fba922
ramp-coreload-6-foreground = ${colors.warning}
ramp-coreload-7-foreground = ${colors.warning}

; ===内存===
; https://github.com/polybar/polybar/wiki/Module:-memory
[module/memory]

type = internal/memory
interval = 1

format = <ramp-used> <label>


# 填充
format-padding = 2

;下面横杆
format-underline = #FFA07A

label = %gb_used%/16GiB  
;label-foreground = #9A32DB 添加颜色不添加就是白色

ramp-used-0 = 
ramp-used-0-foreground = ${colors.warning}
ramp-used-1 = 
ramp-used-1-foreground = ${colors.warning}
ramp-used-2 = 
ramp-used-2-foreground = ${colors.warning}
ramp-used-3 = 
ramp-used-3-foreground = ${colors.warning}

ramp-used-4 = 
ramp-used-4-foreground = ${colors.notice}
ramp-used-5 = 
ramp-used-5-foreground = ${colors.warning}



; ===屏幕亮度===
; https://github.com/polybar/polybar/wiki/Module:-xbacklight
[module/backlight]
type = internal/backlight

; 使用命令查询到设备文件:
; ls -1 /sys/class/backlight/
card = amdgpu_bl0

; 滚轮调节亮度
; sudo chown video /sys/class/backlight/intel_backlight/brightness
; sudo chmod g+w /sys/class/backlight/intel_backlight/brightness
; usermod -a -G video eonun
; Default: false
enable-scroll = true

format = <ramp> <label>

;下面横杆
format-underline = #8B2500

label = %percentage%%  

; 用于 <ramp>
ramp-0 = 🌕
ramp-1 = 🌔
ramp-2 = 🌓
ramp-3 = 🌒
ramp-4 = 🌑
ramp-foreground=${colors.warning}



; 用于 <bar>
bar-width = 10
bar-indicator = 
bar-fill = -
bar-empty = -


; ===日期时间===
; https://github.com/polybar/polybar/wiki/Module:-date
[module/date]
type = internal/date

; 更新间隔, 默认: 1.0
interval = 1.0
format = <label>


; 展开前
#date = %Y-%m-%d%
time = %H:%M:%S 


;展开后
; 另一中格式
#date-alt = %Y-%m-%d-%H:%M:%S
time-alt = %Y年%m月%d日—时间:%H:%M:%S  

#label =  %date%  %time%
label =  %time% 
label-foreground = ${colors.warning}
;显示一个
label-font = 1



; ===电源提示===
; https://github.com/polybar/polybar/wiki/Module:-battery
[module/battery]
type = internal/battery

; 电量大于 99% 显示充电完成
full-at = 99



; 使用以下命令列出电池和适配器:
; ls -1 /sys/class/power_supply/
battery = BAT1
adapter = ACAD

poll-interval = 3

; 时间过格式,默认: %H:%M:%S
#time-format = %M 

; 充电
format-charging =   <animation-charging> <label-charging>

;下面横杆
format-charging-underline = #00C5CD
format-charging-foreground = ${colors.success}
; 放电
format-discharging =  <animation-discharging> <label-discharging>


;下面横杆
format-discharging-underline = #00C5CD
; 充电完成
;format-full = <ramp-capacity> <label-full>
;format-full-foreground = ${colors.warning}

; 充电状态
label-charging =  %percentage% 

;下面横杆
label-charging-underline = #00C5CD


;充电完成

label-full = %percentage% 
;下面横杆
label-full-underline = #00C5CD

label-full-foreground = ${colors.warning}


ramp-capacity-0 = 
ramp-capacity-1 = 
ramp-capacity-2 = 
ramp-capacity-3 = 
ramp-capacity-4 = 

bar-capacity-width = 10

animation-charging-0 = 
animation-charging-1 = 
animation-charging-2 = 
animation-charging-3 = 
animation-charging-4 = 
; 动画帧率(毫秒)
animation-charging-framerate = 750

animation-discharging-0 = 
animation-discharging-1 = 
animation-discharging-2 = 
animation-discharging-3 = 
animation-discharging-4 = 
; 动画帧率(毫秒)
animation-discharging-framerate = 500





; ===USB===
; https://github.com/polybar/polybar-scripts/tree/master/polybar-scripts/system-usb-udev
[module/system-usb-udev]
type = custom/script
exec = ~/.config/polybar/scripts/system-usb-udev.sh
tail = true
click-left = ~/.config/polybar/scripts/system-usb-udev.sh --mount &
click-right = ~/.config/polybar/scripts/system-usb-udev.sh --unmount &

; 温度
[module/temperature]

type = internal/temperature
thermal-zone = 0
;到60度就警报
warn-temperature = 60 

;cpu温度
format = <ramp> <label>

# 补充
format-padding = 2

;下面横杆
format-underline = 	#696969


;颜色
format-warn = <ramp> <label-warn>



format-warn-underline = ${self.format-underline}
label =  %temperature-c%

; cpu温度到60度执行
label-warn =  %temperature-c%

; cpu温度到60执行颜色
label-warn-foreground = ${colors.secondary}




ramp-0 = 
ramp-0-foreground =  ${colors.success}
ramp-1 = 
ramp-1-foreground =  ${colors.success}
ramp-2 = 
ramp-2-foreground =  ${colors.success}
ramp-3 = 
ramp-3-foreground =  ${colors.success}
ramp-4 = 
ramp-4-foreground =  ${colors.success}
ramp-5 = 
ramp-5-foreground =  ${colors.success}


; 到老60度就会变成下面的颜色
ramp-6 = 
ramp-6-foreground =  ${colors.secondary} 



;;关机操作
;[module/powermenu]
;type = custom/menu
;expand-right = true
;
;format-spacing = 1
;
;label-open = "  "
;label-open-foreground = ${colors.secondary}
;label-close = "   取消"
;label-close-foreground = ${colors.secondary}
;label-separator = |
;label-separator-foreground = ${colors.foreground-alt}
;
;
;menu-0-0 = 关机
;menu-0-0-exec = poweroff
;menu-0-0-foreground=${colors.warning}
;menu-0-1 = 重启
;menu-0-1-exec = reboot
;menu-0-1-foreground=${colors.warning}
;menu-0-2 = 注销
;menu-0-2-exec = pkill -kill -u fe
;menu-0-2-foreground=${colors.warning}





; === 朗读诗句====
; [module/daily-poem]
; type = custom/ipc

; ;下面横杆
; format-underline = #8B2500

; # replace IDZJPFP9nkjOfsJ5KJO98E4Tgu3DbFHh with your token from https://v2.jinrishici.com/token.
; hook-0 = ~/.config/polybar/scripts/daily-poem require vU1whWzAS7pqAHRkvTD9KxF757ZXcfwS ~/.config/polybar/scripts/poem.txt
; hook-1 = ~/.config/polybar/scripts/daily-poem get ~/.config/polybar/scripts/poem.txt content 
; hook-2 = ~/.config/polybar/scripts/daily-poem get ~/.config/polybar/scripts/poem.txt origin
; hook-3 = ~/.config/polybar/scripts/daily-poem get ~/.config/polybar/scripts/poem.txt match

; initial = 1

; click-left = polybar-msg -p %pid% hook daily-poem 2
; scroll-up = polybar-msg -p %pid% hook daily-poem 3
; scroll-down = polybar-msg -p %pid% hook daily-poem 4
; click-right = polybar-msg -p %pid% hook daily-poem 1

;显示窗口的名
[module/title]
type = internal/xwindow
; Available tags:
;   <label> (default)
format = <label>


# 填充


;下面横杆
format-underline = 	#8B7765

format-background = ${colors.warning}
format-foreground = 
format-padding = 4

; Available tokens:
;   %title%
; Default: %title%
label = %title%
; 标签名最大显示多少字
label-maxlen = 15

; Used instead of label when there is no window title
; Available tokens:
;   None
label-empty = Empty
label-empty-foreground =  ${colors.warning}
```



