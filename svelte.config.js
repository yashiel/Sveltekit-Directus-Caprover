import cloudflare from '@sveltejs/adapter-cloudflare';
const config = {
	kit: {
		adapter: cloudflare(),
	}
};

export default config;