<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	export let posts;

	import Box from '../../components/box.svelte';
	import Link from '../../components/link.svelte';
</script>

<svelte:head>
	<title>Pronoun | Blog</title>
</svelte:head>

<div class="max-w-5xl mx-auto space-y-8">
	<Box
		title="My Blog"
		titleClass="text-gradient w-fit mb-8 text-4xl md:text-5xl font-extrabold tracking-tight !leading-tight"
	>
		<p>Occasional musings, journals, and other thoughts.</p>
		<ul class="space-y-4">
			{#each posts as post}
				<li>
					<h2>
						<Link href={post.path} addClass="text-lg !font-bold">
							{post.meta.title}
						</Link>
					</h2>
					<p class="text-slate-500">
						{new Date(post.meta.datetime).toLocaleString('en-US', {
							dateStyle: 'long',
							timeStyle: 'short'
						})}
					</p>
				</li>
			{/each}
		</ul>
	</Box>
</div>
