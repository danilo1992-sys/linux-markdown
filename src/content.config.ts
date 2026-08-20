import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const Linux = defineCollection({
  loader: glob({ base: "./src/content/Linux", pattern: "**/*.md" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

const Ciberceguridad = defineCollection({
  loader: glob({
    base: "./src/content/obsidian/Ciberceguridad",
    pattern: "**/*.md",
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    image: z.string().optional(),
    difficult: z.string().optional(),
    platform: z.string().optional(),
    os: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { Linux, Ciberceguridad };
