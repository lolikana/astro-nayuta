module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true
	},
	extends: ['eslint:recommended', 'plugin:astro/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'no-mixed-spaces-and-tabs': 'error',
		'astro/no-set-html-directive': 'error',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		indent: [2, 'tab', { SwitchCase: 0 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
		semi: ['error', 'always'],
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error'
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			},
			plugins: ['simple-import-sort']
		},
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }
				],
				'@typescript-eslint/no-non-null-assertion': 'off'
			}
		},
		{
			files: ['*.d.ts'],
			rules: {
				'@typescript-eslint/triple-slash-reference': 'off'
			}
		},
		{
			files: ['*.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: [
				'@typescript-eslint',
				'react',
				'prettier',
				'import',
				'simple-import-sort'
			],
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				tsconfigRootDir: __dirname,
				project: ['./tsconfig.json']
			},
			extends: [
				'eslint:recommended',
				'plugin:react/recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:prettier/recommended',
				'prettier'
			]
		},
		{
			// Define the configuration for `<script>` tag.
			// Script in `<script>` is assigned a virtual file name with the `.js` extension.
			files: ['**/*.astro/*.js', '*.astro/*.js'],
			parser: '@typescript-eslint/parser'
		}
	]
};
