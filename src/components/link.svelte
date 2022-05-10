<script>
	export let href;
	export let newtab = false;
	let className = 'link';
	export { className as class };
	export let rel = null;
</script>

<a sveltekit:prefetch {href} target={newtab ? '_blank' : ''} class={className} {rel}><slot /></a>
