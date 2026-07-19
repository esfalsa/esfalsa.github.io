import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
	// type: "content",
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
	}),
});

export const collections = { posts };
