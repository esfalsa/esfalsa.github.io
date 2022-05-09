<script>
	import Box from '../components/box.svelte';
	import Link from '../components/link.svelte';

	let links = [
		{ title: 'Discord', text: 'Pronoun#2968' },
		{
			title: 'NationStates',
			text: 'Esfalsa',
			component: Link,
			props: {
				href: 'https://www.nationstates.net/page=compose_telegram?tgto=Esfalsa',
				newtab: true
			}
		},
		{
			title: 'TSP Forums',
			text: 'Pronoun',
			component: Link,
			props: {
				href: 'https://tspforums.xyz/user-554.html',
				newtab: true
			}
		},
		{
			title: 'TSPedia',
			text: 'Pronoun',
			component: Link,
			props: {
				href: 'https://wiki.tspforums.xyz/wiki/User:Pronoun',
				newtab: true
			}
		},
		{
			title: 'GitHub',
			text: 'esfalsa',
			component: Link,
			props: {
				href: 'https://github.com/esfalsa',
				newtab: true
			}
		}
	];
</script>

<svelte:head>
	<title>Pronoun | Contact</title>
</svelte:head>

<div class="mx-8 mt-8 mb-16">
	<div class="max-w-5xl mx-auto space-y-8">
		<Box
			title="Contact Me"
			titleClass="bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 w-fit mb-8 text-5xl font-extrabold tracking-tight text-transparent"
		>
			<p class="text-lg font-semibold tracking-tight">Let’s get in touch!</p>
			<p>I’m always happy to connect. Here’s how to get in touch with me:</p>
			<ul class="space-y-2">
				{#each links as link}
					<li>
						<span class="bg-slate-300 px-1.5 font-bold rounded-md py-0.5 mr-2">{link.title}</span>
						{#if link.component}
							<svelte:component this={link.component} {...link.props}>{link.text}</svelte:component>
						{:else}
							{link.text}
						{/if}
					</li>
				{/each}
			</ul>
		</Box>
	</div>
</div>
