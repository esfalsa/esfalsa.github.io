import defaultTheme from "tailwindcss/defaultTheme";
import typographyPlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Public Sans Variable"', ...defaultTheme.fontFamily.sans],
				handwriting: ['"Kaushan Script"', "cursive"],
			},
			colors: {
				brand: {
					50: "#eef3ff",
					100: "#e0e8ff",
					200: "#c7d4fe",
					300: "#a5b7fc",
					400: "#7e8df7",
					500: "#565ef0",
					600: "#4542de",
					700: "#3833c4",
					800: "#2c2aa1",
					900: "#23257a",
					950: "#191947",
				},
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						"--tw-prose-invert-headings": theme("colors.brand.200"),
					},
				},
			}),
		},
	},
	plugins: [typographyPlugin],
};
