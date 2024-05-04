import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { mocha } from "@catppuccin/vscode";

// https://astro.build/config
export default defineConfig({
	site: "https://esfalsa.github.io",
	redirects: {
		"/about": "/man",
		"/projects": "/code",
		"/blog": "/posts",
		"/contact": "/man",
	},
	markdown: {
		shikiConfig: {
			theme: mocha,
		},
	},
	integrations: [
		tailwind(),
		sitemap({
			customPages: [
				"https://esfalsa.github.io/puree/",
				"https://esfalsa.github.io/spyglass-archive/",
				"https://esfalsa.github.io/crisscross/",
				"https://esfalsa.github.io/solanum.user.js/",
				"https://esfalsa.github.io/markdown-nscode-editor/",
				"https://esfalsa.github.io/founding-rates/",
				"https://esfalsa.github.io/codico/",
				"https://esfalsa.github.io/codico/",
			],
		}),
	],
});
