import adapter from '@sveltejs/adapter-node';
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	}
};

export default config;