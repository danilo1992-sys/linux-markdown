import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const Linux = defineCollection({
  loader: glob({ base: './src/content/Linux', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const collections = { Linux };
