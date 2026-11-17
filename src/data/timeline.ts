/** 项目历程时间线。本体在 timeline.json（后台可编辑）。 */

import raw from "./timeline.json";

export interface Milestone {
  time: string;
  title: string;
  detail: string;
  versionId?: string;
}

export const TIMELINE = raw.TIMELINE as Milestone[];

/** 作者自述的项目定位，可直接引用在页面首屏下方 */
export const AUTHOR_NOTE =
  "过去七八年间，我持续打磨 Kali 桌面体验。目标是让它在不同硬件平台上都保持稳定、流畅和实用性 —— Kali 从工具层面的强大出发，桌面体验也应当服务于效率与长期使用的舒适性。";
