import {
    getDirectusClient
} from '$lib/connector';
export async function get(request) {
    const urlId = request.params.id;
    const directus = await getDirectusClient();
    const response = await directus.items('blog').readByQuery({
        limit: 3,
        page: `${urlId}`,
        fields: ['title', 'slug', 'content'],
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
            articles,
            urlId: urlId
        }
    };
}