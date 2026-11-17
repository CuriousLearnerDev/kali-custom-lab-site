/**
 * FAQ 数据。本体在 faq.json（后台可编辑）。
 * relatedIssues 用于在页面上标注来源，读者可以自己点进去看原文。
 */

import raw from "./faq.json";

export type Severity = "blocker" | "common" | "info";

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  detailHref?: string;
  relatedIssues: number[];
  severity: Severity;
  /** 是否在首页精选里展示 */
  featured?: boolean;
}

export const FAQ = raw.FAQ as FaqEntry[];

export const FEATURED_FAQ = FAQ.filter((f) => f.featured);

export function issueUrl(repo: string, num: number): string {
  return `https://github.com/CuriousLearnerDev/${repo}/issues/${num}`;
}
