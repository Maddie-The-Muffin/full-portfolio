import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import type { SchemaContext } from 'astro:content';

const projectSchema = ({ image }: SchemaContext) => z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    image: image().optional(),
    imageAlt: z.string().optional(),
    year: z.number().int(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    display: z.boolean().default(true)
});

const webProjects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/web-projects' }),
    schema: (context) => projectSchema(context).extend({
        liveUrl: z.url().optional(),
        repoUrl: z.url().optional(),
    }),
});

const gameProjects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/game-projects' }),
    schema: (context) => projectSchema(context).extend({
        playUrl: z.url().optional(),
        repoUrl: z.url().optional(),
        engine: z.string().optional(),
    }),
});

export const collections = { webProjects, gameProjects };
