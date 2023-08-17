module.exports = {
	ignorePatterns: ['*.d.ts'],
	env: { browser: true, node: true, es2021: true },
	extends: ['plugin:astro/recommended', 'eslint:recommended', 'plugin:import/typescript'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: '.',
		project: './tsconfig.json'
	},
	globals: {
		astroHTML: true
	},
	plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
	rules: {
		indent: [2, 'tab', { SwitchCase: 0 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
		semi: ['error', 'always'],
		'@typescript-eslint/consistent-type-imports': 'off',
		'sort-imports': 'off',
		'import/order': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error'
	},
	overrides: [
		{
			// Define the configuration for `.astro` file.
			files: ['*.astro'],
			// Allows Astro components to be parsed.
			parser: 'astro-eslint-parser',
			// Parse the script in `.astro` as TypeScript by adding the following configuration.
			// It's the setting you need when using TypeScript.
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			},
			rules: {
				// override/add rules settings here, such as:
				'astro/no-set-html-directive': 'error'
			}
		},
		{
			files: ['*.{ts,tsx,mjs}'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:prettier/recommended', 'prettier'],
			plugins: ['prettier'],
			rules: { 'prettier/prettier': 'error' }
		}
	]
};
