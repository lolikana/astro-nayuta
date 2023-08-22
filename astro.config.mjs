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
				'@templates': '/src/templates',
				'@layouts': '/src/layouts',
				'@styles': '/src/styles',
				'@scripts': '/src/scripts'
			}
		}
	}
});
