import defaultTheme from "tailwindcss/defaultTheme";

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
					50: "#eeeffe",
					100: "#dddffc",
					200: "#bbbff9",
					300: "#9a9ef6",
					400: "#787ef3",
					500: "#565ef0",
					600: "#454bc0",
					700: "#343890",
					800: "#222660",
					900: "#111330",
				},
			},
		},
	},
	plugins: [],
};
