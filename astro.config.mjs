import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://esfalsa.github.io",
	redirects: {
		"/about": "/man",
		"/projects": "/code",
		"/blog": "/posts",
		"/contact": "/man",
	},
	integrations: [tailwind()],
});
