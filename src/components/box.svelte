<script>
	export let title;
	export let titleClass = 'text-slate-900 mb-8 text-4xl font-extrabold tracking-tight';
	export let id = null;
</script>

<section class="rounded-xl bg-slate-50 heropattern-plus-slate-100 shadow-sm">
	<span {id} class="-top-24 relative" />
	<div
		class="bg-gradient-radial from-slate-100 via-slate-100/25 to-transparent rounded-xl md:p-16 p-8 shadow-inner"
	>
		{#if title}
			<h1 class={titleClass}>
				{title}
			</h1>
		{/if}
		<div class="max-w-prose text-slate-700 space-y-4">
			<slot />
		</div>
	</div>
</section>
