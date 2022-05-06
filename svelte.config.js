import adapter from '@sveltejs/adapter-auto';
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			enabled: false,
		}
	}
};

export default config;