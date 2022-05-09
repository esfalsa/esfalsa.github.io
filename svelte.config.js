import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true,
			onError: 'continue'
		}
	}
};

export default config;
