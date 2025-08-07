import { defineCollection, z } from 'astro:content';

const voyages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().optional(),
    coverImage: z.string().optional(),
    category: z.string().optional(), // ✅ Add this line
  }),
});

export const collections = {
  voyages,
};
