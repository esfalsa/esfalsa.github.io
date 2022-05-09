<script>
	export let href;
	export let newtab;
	let className = 'link';
	export { className as class };
</script>

<a sveltekit:prefetch {href} target={newtab ? '_blank' : ''} class={className}><slot /></a>
