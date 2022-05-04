import {
	getDirectusClient
} from '$lib/connector';
export async function get() {
	const directus = await getDirectusClient();
	let response;
	try {
		response = await directus.items('blog').readByQuery({
			fields: ['*'],

		});
	} catch (err) {
		return {
			status: 404
		};
	}
	const articles = response.data;
	return {
		body: {
			articles
		}
	};
}