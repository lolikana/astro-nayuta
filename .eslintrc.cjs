module.exports = {
	ignorePatterns: ['*.d.ts'],
	env: { browser: true, node: true, es2022: true },
	extends: ['eslint:recommended', 'plugin:import/typescript'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
	rules: {
		indent: [2, 'tab', { SwitchCase: 0 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
		semi: ['error', 'always'],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error'
	},
	overrides: [
		//* Configuration for Astro *//
		{
			// Define the configuration for `.astro` file.
			files: ['**/*.astro'],
			// Allows Astro components to be parsed.
			parser: 'astro-eslint-parser',
			// Parse the script in `.astro` as TypeScript by adding the following configuration.
			// It's the setting you need when using TypeScript.
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			},
			globals: {
				astroHTML: true
			},
			rules: {
				// override/add rules settings here, such as:
				// 'astro/no-set-html-directive': 'error'
			}
		},
		//* Configuration for Typescript *//
		{
			files: ['*.{ts,tsx,mjs}'],
			extends: ['plugin:prettier/recommended'],
			plugins: ['react'],
			rules: { 'prettier/prettier': 'error' }
		}
	]
};
