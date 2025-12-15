import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    nomPro: z.string(),
    description: z.string(),
    link: z.string(),
    pubDate: z.date(),
    avatar: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

const webWordpressCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    avatar: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'posts': postCollection,
  'proyectos': proyectosCollection,
  'web-wordpress': webWordpressCollection,
};

