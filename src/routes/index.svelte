<script>
	import gradient from '../assets/gradient.png';
	import Link from '../components/link.svelte';
	import Box from '../components/box.svelte';
</script>

<svelte:head>
	<title>Pronoun | Home</title>
</svelte:head>

<div class="max-w-5xl mx-auto space-y-8">
	<section
		class="rounded-xl overflow-hidden shadow-md bg-[length:100%_100%]"
		style="background-image:url('{gradient}')"
	>
		<div class="bg-slate-900/75 backdrop-blur-lg selection:bg-slate-50/20 p-16">
			<h1 class="md:text-6xl mb-8 text-5xl font-extrabold tracking-tight">
				👋&ensp;<span class="text-gradient">Hello there!</span>
			</h1>
			<div class="text-slate-200 text-md max-w-prose selection space-y-2">
				<p class="mb-4 text-lg font-medium">
					I’m <span class="font-bold">Pronoun</span>, though you may also know me as
					<Link href="https://www.nationstates.net/esfalsa" class="link !font-bold" newtab>
						Esfalsa
					</Link> on NationStates.
				</p>
				<p>
					While you take a look around, feel free to read a bit more <Link href="/about"
						>about me</Link
					>
					or check out some of my projects, like
					<Link href="/projects#applesauce">Applesauce</Link> or the
					<Link href="/projects#spyglass-archive">Spyglass Archive</Link>.
				</p>
				<p>
					And if you’d like to get in touch, feel free to <Link href="/contact">contact me</Link>.
					I’m always happy to connect!
				</p>
			</div>
		</div>
	</section>
	<Box title="ℹ️&ensp;About Me" id="about">
		<p>
			I’ve been playing NationStates on and off since September 2014, and have been a member of the
			South Pacific for pretty much as long as I can remember. In that time, I’ve been involved in a
			few different pursuits — primarily as a member of the regional Assembly, in military gameplay
			with the South Pacific Special Forces, and in the modern-tech Pacifica roleplay canon on the
			forums.
		</p>
		<p><Link href="/about">Read more about me</Link></p>
	</Box>
	<Box title="👨‍💻&ensp;Projects" id="projects">
		<p>
			In my free time, I also like to make tools here and there that improve my NationStates
			experience. Some of the more noteworthy projects I’ve made or contributed to include:
		</p>
		<ul class="ml-4 list-disc">
			<li>
				<Link href="/projects#applesauce">Applesauce</Link>, a simple but versatile endorsement
				tool;
			</li>
			<li>
				the <Link href="/projects#spsf-data-portal">SPSF Data Portal</Link>, an interactive reports
				browser for the South Pacific Special Forces;
			</li>
			<li>
				<Link href="/projects#streamkit">StreamKit</Link>, a formatter for the Stream social network
				from the Pacifica canon; and
			</li>
			<li>
				<Link href="/projects#spyglass-archive">Spyglass Archive</Link>, a simple website that
				stores sheets generated with <Link href="https://github.com/Derpseh/Spyglass" newtab
					>Spyglass</Link
				>.
			</li>
		</ul>
	</Box>
</div>
