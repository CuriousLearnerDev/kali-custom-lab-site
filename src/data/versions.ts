/**
 * 版本元数据。
 *
 * 数据本体在 versions.json —— 后台（Pages CMS）编辑的就是那个文件。
 * 这里只负责类型和派生值，页面 import 的接口保持不变。
 *
 * 事实来源：scripts/readme-snapshot.md / scripts/readme-snapshot-v5.md
 */

import raw from "./versions.json";

export interface VersionInfo {
  id: string;
  label: string;
  /** 是否当前推荐版本 */
  current: boolean;
  baseSystem: string;
  desktop: string;
  kernel: string;
  firmware: "BIOS";
  defaultUser: string;
  defaultPassword: string;
  /** 作者的发布说明（时间线口径） */
  releasedLabel: string;
  /** GitHub Release tag，没有就是 null */
  releaseTag: string | null;
  releaseDate: string | null;
  releaseNote: string | null;
  summary: string;
  changes: string[];
}

export const VERSIONS = raw.VERSIONS as VersionInfo[];

export const CURRENT_VERSION =
  VERSIONS.find((v) => v.current) ?? VERSIONS[0]!;

export function getVersion(id: string): VersionInfo | undefined {
  return VERSIONS.find((v) => v.id === id);
}
