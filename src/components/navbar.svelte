<script>
	let links = [
		{ title: 'About Me', href: '/about' },
		{ title: 'Applesauce', href: '/projects#applesauce' },
		{ title: 'SPSF Data Portal', href: '/projects#spsf-data-portal' },
		{ title: 'StreamKit', href: '/projects#streamkit' },
		{ title: 'Spyglass Archive', href: '/projects#spyglass-archive' },
		{ title: 'Contact', href: '/contact' }
	];

	import { page } from '$app/stores';
	let path;

	$: path = $page.url.pathname + $page.url.hash;
</script>

<nav
	class="bg-slate-800/80 top-4 backdrop-blur-2xl rounded-xl h-14 sticky z-50 flex items-center content-center p-4 m-4 space-x-12 text-white shadow-xl"
>
	<a svelte:prefetch href="/" class="text-xl font-bold text-center">Pronoun</a>
	<div class="space-x-6 text-xs font-semibold tracking-wide text-center uppercase">
		{#each links as { title, href, newtab }}
			<a
				sveltekit:prefetch
				{href}
				class={`hover:text-slate-50 transition ${
					path === href ? 'text-slate-50/100' : 'text-slate-300/75'
				}`}
				target={newtab ? '_blank' : ''}>{title}</a
			>
		{/each}
	</div>
</nav>
