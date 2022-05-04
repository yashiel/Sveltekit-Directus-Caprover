import {getDirectusClient} from '$lib/connector';
export async function get(request) {
    const urlSlug = request.params.slug;
	const directus = await getDirectusClient();
	let singlePageData;
	singlePageData = await directus.items('blog').readByQuery({
				search: `${urlSlug}`,
				fields: ['*'],
				filter: {
				status: 'published',
				}
		});

	const posts = singlePageData.data;
	const post = posts[0]; 
	return {
		body: {
			post
		}
	};
}