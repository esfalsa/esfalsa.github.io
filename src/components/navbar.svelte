<script>
	import Link from './link.svelte';
	import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@rgossiaux/svelte-headlessui';
	import { page } from '$app/stores';

	let links = [
		{ title: 'About Me', href: '/about' },
		{ title: 'Applesauce', href: '/projects#applesauce' },
		{ title: 'SPSF Data Portal', href: '/projects#spsf-data-portal' },
		{ title: 'StreamKit', href: '/projects#streamkit' },
		{ title: 'Spyglass Archive', href: '/projects#spyglass-archive' },
		{ title: 'Contact', href: '/contact' }
	];

	let path;

	$: path = $page.url.pathname + $page.url.hash;
</script>

<div class="fixed top-0 z-50 w-full p-4">
	<Menu let:open>
		<nav
			class="bg-slate-800/80 backdrop-blur-2xl rounded-xl {open
				? 'h-full'
				: 'h-14'} z-50 flex flex-row flex-wrap items-center content-start w-full p-4 text-white transition-all shadow-xl"
		>
			<div><Link href="/" class="mr-12 text-xl font-bold text-center">Pronoun</Link></div>
			<div
				class="lg:flex flex-row items-center hidden space-x-6 text-xs font-semibold tracking-wide text-center uppercase"
			>
				{#each links as { title, href, newtab }}
					<Link
						{href}
						class="hover:text-slate-50 h-fit transition {path === href
							? 'text-slate-50'
							: 'text-slate-300/75'}"
						{newtab}
					>
						{title}
					</Link>
				{/each}
			</div>
			<MenuButton class="lg:hidden block ml-auto">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</MenuButton>
			<div class="basis-full h-0" />
			<div class="w-full">
				<Transition
					enter="transition duration-100 ease-out"
					enterFrom="transform scale-95 opacity-0"
					enterTo="transform scale-100 opacity-100"
					leave="transition duration-75 ease-out"
					leaveFrom="transform scale-100 opacity-100"
					leaveTo="transform scale-95 opacity-0"
				>
					<MenuItems
						class="divide-slate-500 sm:divide-none flex flex-col w-full px-4 mt-8 divide-y"
					>
						<MenuItem class="sm:p-4 flex">
							<Link
								href="/"
								class="{path === '/'
									? 'text-gradient font-bold'
									: 'text-slate-400 font-medium'} text-lg align-middle p-4 sm:p-0 w-full sm:w-fit"
							>
								Home
							</Link>
						</MenuItem>
						{#each links as { title, href, newtab }}
							<MenuItem class="sm:p-4 flex">
								<Link
									{href}
									{newtab}
									class="{path === href
										? 'text-gradient font-bold'
										: 'text-slate-400 font-medium'} text-lg align-middle p-4 sm:p-0 w-full sm:w-fit"
								>
									{title}
								</Link>
							</MenuItem>
						{/each}
					</MenuItems>
				</Transition>
			</div>
		</nav>
	</Menu>
</div>
