
<script>
    export let articles;
</script>

{#each articles as { title, content, slug }}
    <h1><a sveltekit:prefetch href={`/post/${slug}`}>{title}</a></h1>
    {@html content}
{/each}
