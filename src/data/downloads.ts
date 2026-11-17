/**
 * 下载渠道数据。
 *
 * 数据本体在 downloads.json —— 后台编辑的就是这个文件。
 * 网盘的元信息（名称、已知限制）属于展示逻辑，留在本文件里。
 *
 * 重要事实：
 *   1. 作者没有公布任何 SHA256 校验值 —— 页面如实写「未提供」，绝不伪造；
 *   2. 镜像托管在网盘，不在 GitHub Release；
 *   3. V5 起不再预装第三方工具。
 */

import raw from "./downloads.json";

export type ProviderKey = "quark" | "baidu" | "tianyi";

export interface ProviderMeta {
  key: ProviderKey;
  name: string;
  short: string;
  /** 网盘本身的已知限制，用在页面提示里 */
  caveat: string | null;
}

export const PROVIDERS: Record<ProviderKey, ProviderMeta> = {
  quark: {
    key: "quark",
    name: "夸克网盘",
    short: "夸克",
    caveat: "夸克新用户初始容量约 10GB，存不下完整版，且大文件网页端可能无法直接下载。",
  },
  baidu: {
    key: "baidu",
    name: "百度网盘",
    short: "百度",
    caveat: "非会员下载速度受限。",
  },
  tianyi: {
    key: "tianyi",
    name: "天翼云盘",
    short: "天翼",
    caveat: null,
  },
};

export interface Channel {
  provider: ProviderKey;
  url: string;
  code: string | null;
  status: "ok" | "unverified";
  lastVerified: string;
  /** 溯源，指向 README 存档的章节 */
  source: string;
}

export interface Edition {
  id: string;
  versionId: "v5" | "v4" | "v3" | "v2" | "i3";
  name: string;
  archiveSize: string;
  extractedSize: string;
  summary: string;
  notes: string[];
  /** available：已可下载；pending：作者尚未放出 */
  status: "available" | "pending";
  channels: Channel[];
}

export const EDITIONS = raw.EDITIONS as Edition[];

export function editionsFor(versionId: Edition["versionId"]): Edition[] {
  return EDITIONS.filter((e) => e.versionId === versionId);
}
