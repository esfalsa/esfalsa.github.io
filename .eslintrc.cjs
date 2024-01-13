/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
	env: {
		node: true,
		browser: true,
		es2024: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:astro/recommended",
		"prettier",
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {},
		},
	],
};
