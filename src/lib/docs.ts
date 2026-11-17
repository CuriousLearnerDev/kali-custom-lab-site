import { getCollection, type CollectionEntry } from "astro:content";

export type Doc = CollectionEntry<"docs">;

/** 按 category 分组顺序 + 组内 order 排序 */
const CATEGORY_ORDER = ["入门", "使用技巧", "故障排查", "常见问题"] as const;

export async function getAllDocs(): Promise<Doc[]> {
  const docs = await getCollection("docs");
  return docs.sort((a, b) => {
    const ca = CATEGORY_ORDER.indexOf(a.data.category);
    const cb = CATEGORY_ORDER.indexOf(b.data.category);
    if (ca !== cb) return ca - cb;
    return a.data.order - b.data.order;
  });
}

export interface DocGroup {
  category: string;
  docs: Doc[];
}

export async function getDocGroups(): Promise<DocGroup[]> {
  const docs = await getAllDocs();
  return CATEGORY_ORDER.map((category) => ({
    category,
    docs: docs.filter((d) => d.data.category === category),
  })).filter((g) => g.docs.length > 0);
}

/** 取上一篇 / 下一篇（按全局顺序） */
export async function getAdjacent(slug: string) {
  const docs = await getAllDocs();
  const index = docs.findIndex((d) => d.id === slug);
  return {
    prev: index > 0 ? docs[index - 1] : undefined,
    next: index >= 0 && index < docs.length - 1 ? docs[index + 1] : undefined,
  };
}

export function docHref(doc: Doc): string {
  return `/docs/${doc.id}/`;
}

/** 搜索索引：去掉代码块，标题权重高，正文截断 */
export async function getSearchIndex() {
  const docs = await getAllDocs();
  return docs.map((doc) => {
    const body = (doc.body ?? "")
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/[#*`>|_\-]/g, " ")
      .replace(/\s+/g, " ")
      .slice(0, 1200);
    return {
      slug: doc.id,
      href: docHref(doc),
      title: doc.data.title,
      description: doc.data.description,
      category: doc.data.category,
      body,
    };
  });
}
