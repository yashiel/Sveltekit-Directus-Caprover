<script>
    export let articles, urlId;
    let limit = 3;
</script>

{#each articles as { title, content, slug }}
    <h1><a sveltekit:prefetch href={`/post/${slug}`}>{title}</a></h1>
    {@html content}
{/each}



{#if parseInt(urlId) >= 2}
    <a sveltekit:prefetch href={`/page/${parseInt(urlId) - 1}`}> Previous Page</a>
{/if}
{#if articles.length >= limit}
    <a sveltekit:prefetch href={`/page/${parseInt(urlId) + 1}`}> Next Page</a>
{/if}

