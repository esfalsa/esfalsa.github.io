<script>
	export let title;
	export let datetime;

	import Link from '../../components/link.svelte';
</script>

<div class="max-w-5xl mx-auto space-y-8 pt-8">
	<Link href="/blog">← All blog posts</Link>
	<article class="prose prose-slate pt-8">
		<h1>{title}</h1>
		<p class="lead">
			{new Date(datetime).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}
		</p>

		<slot />
	</article>
</div>
