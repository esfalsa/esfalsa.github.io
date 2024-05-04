---
title: "Faster NationStates Navigation with Custom Site Search"
pubDate: 2024-05-04T23:04:37Z
---

This is a bit of a different post; I don't have any significant progress on any project to report or any extensive thoughts to write up. Rather, I wanted to share a few tips on how to navigate NationStates more efficiently using custom site searches -- they're not something that I really think about a whole lot, so I never really thought to write about them before, but they streamline my experience navigating around NationStates a lot, so I figured they might be useful to others as well.

Google Chrome (and most other Chromium-based browsers, as far as I know) allows you to add [custom site search shortcuts](https://support.google.com/chrome/answer/95426); it's possible on Firefox as well, but [a bit inaccessible](https://superuser.com/a/1756774). I've personally found it quite helpful to set up different shortcuts for accessing different parts of NationStates, in particular for cases where I don't really want to search for something and browse a list of results, and instead just want to navigate to a specific page with a predictable URL structure.

For example, searching for a nation name from the NationStates site is possible, but it's often inefficient. If you know the nation you're looking for is named Testlandia, for example, it can be easier to just type out `nationstates.net/testlandia`. However, I was left wondering if there's an easier way that doesn't require typing out the entire domain name every time.

The search engine DuckDuckGo has this nifty feature called [bangs](https://duckduckgo.com/bangs), which allow you to search directly on a specific site by typing `!` followed by a keyword for the site. For example, `!w` searches Wikipedia and `!nsn` searches NationStates nations. I used this for a bit, but it's a bit slow and I'm a bit impatient; each search has to first go to DuckDuckGo, which then redirects me to NationStates. I realized that custom search shortcuts in the browser can do the same thing, but faster, and set up a shortcut with the keyword `!nsn` and the URL `https://www.nationstates.net/nation=%s` (where the `%s` is a placeholder for the search query itself). I think the real utility here, though, comes from the fact that many NationStates pages have a predictable URL structure, and this kind of trick works with all of them. For example, I have a `!nsra` (NationStates regional administration) shortcut that takes me to `https://www.nationstates.net/​page=region_admin/region=%s`.

Sometimes, though, the URL structure isn't as nice; for instance, the world activity page has a predictable URL, but it isn't necessarily ergonomic. If you want to apply filters, they're stored in the URL as a plus-separated list of filter names, but you have to remember the specific filter names -- if you're looking for new foundings (which is what the UI on the page calls them), you have to remember that the filter is actually called "founding" and that "foundings" doesn't work. Fortunately, at least in Chrome, you can even set up a custom search shortcuts to access a file URL, so I created an HTML file with some simple JavaScript to parse a search query and process redirect me to the correct URL based on the search query. Here are the contours of my current setup, though there's obviously room for customization here depending on your personal preferences.

```js
const filters = [
	{
		filter: "endo", // the name of the filter in the NationStates url
		aliases: ["endorsements", "endorsement", "endos"], //  names to accept as aliases
	},
	// and more...
];

let queries = (new URLSearchParams(location.search).get("q") || "")
	.split(/[ ,+]/) // split by spaces, commas, and plus signs
	.filter(Boolean); // filter out empty strings

let foundFilters = filters
	.filter(
		({ filter, aliases }) =>
			// find where a query matches the filter or an alias
			queries.includes(filter) || queries.some((q) => aliases.includes(q)),
	)
	.map(({ filter }) => filter) // get the name of each found filter
	.join("+");

if (foundFilters) {
	location.replace(
		`https://www.nationstates.net/page=activity/view=world/filter=${foundFilters}`,
	);
} else {
	location.replace("https://www.nationstates.net/page=activity/view=world");
}
```

So now, I can search for something like `!nsaw banjections endos moves` instead of having to remember it's actually `eject+endo+move` in the URL. By using JavaScript, you could also set up a similar system to match other URLs that have a predictale but not necessarily memorable structure: for instance, you could map world census names (such as "intelligence" or "smartest citizens") to their IDs that appear in URLs (such as 36).

It's not a perfect system, but for the most part, I've found that this system has made navigating NationStates a lot easier for me, and I hope you've found it useful as well.
