import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react({
			include: ['**/react/*']
		})
	],
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
				'@scripts': '/src/scripts',
				'@assets': '/src/assets'
			}
		}
	},
	image: {
		domains: ['astro.build', 'images.microcms-assets.io'],
		remotePatterns: [{ protocol: 'https' }]
	},
	site: import.meta.env.PROD ? 'https://lolikana.github.io' : undefined,
	base: import.meta.env.PROD ? '/astro-nayuta' : undefined
});
