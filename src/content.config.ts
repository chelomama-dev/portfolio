import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()).default([]),
    repo: z.url().optional(),
    demo: z.url().optional(),
    // Ojo: Plumy es 'Desplegado en Azure', nunca 'En producción' mientras no tenga clientes
    status: z.enum(['Desplegado en Azure', 'En desarrollo', 'Terminado']).default('Terminado'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    year: z.number().optional(),
  }),
});

export const collections = { blog, projects };
