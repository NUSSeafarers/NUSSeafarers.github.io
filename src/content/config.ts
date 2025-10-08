import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  author: z.string().optional(),
  coverImage: z.string().optional(),
  category: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

const voyages = defineCollection({ schema: baseSchema });
const sailing = defineCollection({ schema: baseSchema });
const sustainability = defineCollection({ schema: baseSchema }); 
const captain = defineCollection({ schema: baseSchema }); 

export const collections = {
  voyages,
  sailing,
  sustainability,
  captain,
};
