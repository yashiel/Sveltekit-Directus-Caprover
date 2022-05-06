import cloudflare from '@sveltejs/adapter-cloudflare';
const config = {
	kit: {
		adapter: cloudflare(),
		prerender: {
			enabled: false,
		}
	}
};

export default config;