
<script>
    export let articles;
    import { goto } from "$app/navigation";
</script>

{#each articles as { title, content, slug }}
    <h1><a sveltekit:prefetch href={`/post/${slug}`}>{title}</a></h1>
    {@html content}
{/each}


<a sveltekit:prefetch href="{`/page/2`}"> Next Page</a>