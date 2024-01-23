import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkSmartypants from "remark-smartypants";
import { unified } from "unified";

export const GET: APIRoute = async (context) => {
	const posts = await getCollection("posts");

	return rss({
		title: "Pronoun",
		description: "Pronoun’s personal website.",
		site: context.site!,
		items: await Promise.all(
			posts.map(async (post) => ({
				title: post.data.title,
				pubDate: post.data.pubDate,
				link: `/posts/${post.slug}/`,
				content: (
					await unified()
						.use(remarkSmartypants)
						.use(remarkParse)
						.use(remarkRehype)
						.use(rehypeSanitize)
						.use(rehypeStringify)
						.process(post.body)
				).toString(),
			})),
		),
	});
};
