<script>
	export let href;
	export let newtab = false;
	export let addClass = '';
	let className = `link ${addClass}`;
	export { className as class };
	export let rel = null;
</script>

<a sveltekit:prefetch {href} target={newtab ? '_blank' : ''} class={className} {rel}><slot /></a>
