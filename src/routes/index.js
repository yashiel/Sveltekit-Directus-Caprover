import {
	getDirectusClient
} from '$lib/connector';
export async function get(request) {
	const directus = await getDirectusClient();
	const response = await directus.items('blog').readByQuery({
				limit: 3,
					page: 1,
					meta: 'filter_count',
					fields: ['title', 'slug', 'content'],
				filter: {
					status: 'published',
				}

	});
	const articles = response.data;
	console.log(articles);
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

