import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  author: z.string().optional(),
  coverImage: z.string().optional(),
  category: z.string().optional(),
});

const voyages = defineCollection({ schema: baseSchema });
const sailing = defineCollection({ schema: baseSchema });
const news = defineCollection({ schema: baseSchema }); // ✅ explicitly add this

export const collections = {
  voyages,
  sailing,
};
