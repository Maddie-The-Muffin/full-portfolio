import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    year: z.number().int(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    display: z.boolean().default(true)
});

const webProjects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/web-projects' }),
    schema: projectSchema.extend({
        liveUrl: z.string().url().optional(),
        repoUrl: z.string().url().optional(),
    }),
});

const gameProjects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/game-projects' }),
    schema: projectSchema.extend({
        playUrl: z.string().url().optional(),
        repoUrl: z.string().url().optional(),
        engine: z.string().optional(),
    }),
});

export const collections = { webProjects, gameProjects };
