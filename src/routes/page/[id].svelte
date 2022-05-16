<script>
    export let articles, urlId;
</script>

{#each articles as { title, content, slug }}
    <h1><a sveltekit:prefetch href={`/post/${slug}`}>{title}</a></h1>
    {@html content}
{/each}

<a sveltekit:prefetch href={`/page/${parseInt(urlId) >= 1 ? parseInt(urlId) - 1 : parseInt(urlId)}`}> Previous Page</a>
<a sveltekit:prefetch href={`/page/${parseInt(urlId) >= parseInt(urlId) ? parseInt(urlId) + 1 : parseInt(urlId) }`}> Next Page</a>
