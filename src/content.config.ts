import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// zod v4 推荐按需具名导入（避免 `z` 命名空间的弃用提示）
import { object, string, coerce, number, enum as enumType } from 'astro:schema';

// 文章集合 —— Markdown / MDX 文件，放在 src/content/essays/
const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essays' }),
  schema: object({
    title: string(),
    // 阅读页顶栏的编号，如「№ 001」
    num: string(),
    // ISO 日期，用于排序与提取年份
    date: coerce.date(),
    // 中文展示用的完整日期，如「2026 年 5 月 20 日」
    dateLabel: string(),
    // 列表与顶栏用的短日期，如「26 年 5 月」
    short: string(),
    tag: enumType(['随笔', '技术', '设计', '过程']),
    minutes: number(),
    // 摘要 / 标题下的导语
    dek: string(),
  }),
});

export const collections = { essays };
