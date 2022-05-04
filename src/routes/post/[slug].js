import {getDirectusClient} from '$lib/connector';
export async function get(request) {
    const urlSlug = request.params.slug;
	const directus = await getDirectusClient();
	let singlePageData;
	try {
		singlePageData = await directus.items('blog').readByQuery({
			search: `${urlSlug}`,
			fields: ['*'],
			filter:{
				status: 'published',
			}
		});
	} catch (err) {
		return {
			status: 404
		};
	}

	const posts = singlePageData.data;
	const post = posts[0]; 
	return {
		body: {
			post
		}
	};
}