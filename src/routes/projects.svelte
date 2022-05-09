<script>
	import Box from '../components/box.svelte';
	import Link from '../components/link.svelte';
</script>

<svelte:head>
	<title>Pronoun | Projects</title>
</svelte:head>

<div class="mx-8 mt-8 mb-16">
	<div class="max-w-5xl mx-auto space-y-8">
		<Box title="Applesauce" id="applesauce">
			<p>
				Applesauce is a simple but versatile endorsement tool for NationStates that provides a
				single button to endorse multiple nations, one at a time, from a single tab.
			</p>
			<p>
				I originally began developing Applesauce in February 2022 in order to streamline my
				endotarting process. The tools I was familiar with&nbsp;—&nbsp;the North Pacific’s <Link
					href="https://www.nationstates.net/page=dispatch/id=1483127"
					newtab>endorsement tools</Link
				> and <Link href="https://www.nationstates.net/page=dispatch/id=1257698" newtab
					>AugustinAndroid</Link
				>&nbsp;—&nbsp;all required repeatedly opening and closing tabs instead of just, well,
				endorsing.
			</p>
			<p>
				That said, nowadays I primarily use Applesauce for military gameplay. Other tools, like <Link
					href="https://tspforums.xyz/archer/"
					newtab>Archer</Link
				>, offer the one-tab endorsement functionality without the need to download and install any
				code. Instead, it’s the cross-endorsement shortcuts, rather than endotarting functionality,
				that I find the most valuable in my personal usage.
			</p>
			<p>Applesauce is free and open-source software released under the AGPL-3.0 license.</p>
			<p>
				<Link href="https://github.com/esfalsa/applesauce" newtab>View on GitHub</Link>
			</p>
		</Box>
		<Box title="SPSF Data Portal" id="spsf-data-portal">
			<p>
				The SPSF Data Portal is a spreadsheet that offers a public database of, and statistics
				about, the operations of the South Pacific Special Forces. On the technical side of things,
				it’s just a Google Sheets spreadsheet that parses update reports and compiles the data.
			</p>
			<p>
				I developed and introduced the portal in March and April 2022, supplanting earlier SPSF
				report parsers developed by HumanSanity and Luca, which were built around Excel and Python.
				In development, I discovered that most of the functionality needed could be accomplished,
				for better or worse, with just spreadsheet formulas. Keeping the data on Google Sheets
				rather than formatting it with BBCode, also allowed for user interaction to filter the
				available data.
			</p>
			<p>
				<Link
					href="https://docs.google.com/spreadsheets/d/1CeE0ERg8WpFCljIYEM3SjWKQjwv8gsyGcEuR9O1-YKE/edit"
					newtab>View the portal</Link
				>
			</p>
		</Box>
		<Box title="StreamKit" id="streamkit">
			<p>
				StreamKit is a simple website to format posts on <Link
					href="https://tspforums.xyz/thread-2899.html"
					newtab>Stream</Link
				>, a fictional social network in the modern-tech Pacifica roleplay canon on the South
				Pacific forums.
			</p>
			<p>StreamKit was built with Svelte and SvelteKit and is hosted on GitHub Pages.</p>
			<p>
				<Link href="/streamkit" newtab>Open StreamKit</Link>
			</p>
		</Box>
		<Box title="Spyglass Archive" id="spyglass-archive">
			<p>
				Spyglass Archive is a simple website that runs Spyglass once a day and saves the result.
				Spyglass itself was originally released <Link
					href="https://github.com/Derpseh/Spyglass"
					newtab>here</Link
				> under the <Link href="https://github.com/Derpseh/Spyglass/blob/master/LICENSE" newtab
					>GPLv3</Link
				> license. It generates Excel spreadsheets with estimated update times of each region.
			</p>
			<p>
				The archive uses GitHub Actions to run Spyglass each day and saves the result to a site
				built with Jekyll and published with GitHub Pages.
			</p>
			<p>
				<Link href="/spyglass-archive" newtab>View the archive</Link>
			</p>
		</Box>
		<Box title="Other Projects" id="other-projects">
			<p>
				Some of my other projects are available on my <Link
					href="https://github.com/esfalsa?tab=repositories"
					newtab>GitHub profile</Link
				>, though all the major ones are listed on this page.
			</p>
		</Box>
	</div>
</div>
