import {
	getDirectusClient
} from '$lib/connector';
export async function get() {
	const directus = await getDirectusClient();
	const response = await directus.items('blog').readByQuery({
				fields: ['*'],
				filter: {
					status: 'published',
				}

	});
	const articles = response.data;
	return {
		cache: {
			"maxage": 300,
			"public": true
		},
		body: {
			articles
		}
	};
}

