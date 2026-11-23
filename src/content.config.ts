import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/projects/.
// The front matter drives the cards; the body is the project's own page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Short card description. May contain inline HTML such as <strong>.
    summary: z.string(),
    date: z.coerce.date(),
    // Where it came from, e.g. "Course Project" or a hackathon name.
    context: z.string(),
    status: z.enum(['shipped', 'in-progress', 'archived']).default('shipped'),
    featured: z.boolean().default(false),
    icon: z.string().optional(),
    award: z.string().optional(),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

// One Markdown file per post in src/content/blog/.
// Posts with `draft: true` are left out of the built site and the feed.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
