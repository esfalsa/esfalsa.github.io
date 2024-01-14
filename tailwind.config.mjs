/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
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
