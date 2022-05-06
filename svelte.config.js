import adapter from '@sveltejs/adapter-node';
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			enable: true
		}
	}
};

export default config;