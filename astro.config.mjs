import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	build: {
		inlineStylesheets: 'auto'
	},
	vite: {
		resolve: {
			alias: {
				'@components': '/src/components',
				'@functionnal-components': '/src/functionnal-components',
				'@templates': '/src/templates',
				'@hooks': '/src/hooks',
				'@layouts': '/src/layouts',
				'@libs': '/src/libs',
				'@api': '/src/api',
				'@styles': '/src/styles',
				'@scripts': '/src/scripts'
			}
		}
	},
	site: 'https://nayuta-astro.github.io',
	base: '/nayuta-astro'
});
