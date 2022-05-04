import {
	getDirectusClient
} from '$lib/connector';
export async function get() {
	const directus = await getDirectusClient();
	const response = await directus.items('blog').readByQuery({
				fields: ['*'],


	});
	const articles = response.data;
	return {
		body: {
			articles
		}
	};
}