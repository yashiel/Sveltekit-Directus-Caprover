import {getDirectusClient} from '$lib/connector';
export async function get(request) {
    const urlSlug = request.params.slug;
	const directus = await getDirectusClient();
	const singlePageData = await directus.items('blog').readByQuery({
				search: `${urlSlug}`,
				fields: ['*'],
				filter: {
					status: 'published',
				}
		});

	const posts = singlePageData.data;
	const post = posts[0]; 
	return {
		cache: {
			"maxage": 300,
			"public": true
		  },
		body: {
			post
		}
	};
}