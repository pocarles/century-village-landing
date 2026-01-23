import { defineCollection, z } from 'astro:content';

const academyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('CenturySync Team'),
    tags: z.array(z.string()).default([]),
    category: z.enum([
      'Compliance',
      'Board Management',
      'Documentation',
      'Communication',
      'Financial',
      'Technology',
      'Legal'
    ]),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = {
  'academy': academyCollection,
};
