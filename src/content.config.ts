import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * 文档集合。所有文档必须能追溯到仓库 README 或真实 issue，
 * sources / relatedIssues 用于在页面文末标注依据。
 */
const docs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["入门", "使用技巧", "故障排查", "常见问题"]),
    order: z.number(),
    updated: z.coerce.date(),
    /** 事实来源，例如 "readme#v4"、"issue#3" */
    sources: z.array(z.string()).default([]),
    relatedIssues: z.array(z.number()).default([]),
  }),
});

export const collections = { docs };
