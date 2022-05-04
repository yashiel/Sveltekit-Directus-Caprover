<script context="module">
	export const prerender = true;
</script>

<script>
	export let post;
</script>

<h1>{post.title}</h1>
{@html post.content}
