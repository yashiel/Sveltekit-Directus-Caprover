import {
	getDirectusClient
} from '$lib/connector';
export async function get() {
	const directus = await getDirectusClient();
	let response;
	response = await directus.items('blog').readByQuery({
				fields: ['*'],

	});
	const articles = response.data;
	return {
		body: {
			articles
		}
	};
}