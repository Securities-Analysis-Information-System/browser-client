import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$globalStyles: './src/global_styles',
			$components: './src/components'
		}
	},

	preprocess: [vitePreprocess({})]
};

export default config;
