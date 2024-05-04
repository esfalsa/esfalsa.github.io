---
title: "Region Archiver DevBlog: Well… It’s Working"
pubDate: 2022-12-27T22:19:30-08:00
---

It's been another few days and in that time I've made some more progress with my region archiver script. My code actually works now!

I've achieved a pretty sweet performance improvement too, cutting the time to parse a daily dump from around 30 seconds to around 5. The secret trick? My internet speeds magically improved, and I have no idea why. Apparently, I forgot that I was downloading an archived data dump with my SAX parsing script, and that was the limiting factor rather than my parsing logic.

That doesn't mean my parsing logic is good, though. It's true that the script right now mostly works, but I still need to test the flag and banner downloads — NationStates just came back online after [going down for the past few days](https://www.nationstates.net/page=news/2022/12/27/index.html). A bigger problem is that I'm also generating a dump of all archived data by loading the entire dump into memory, updating it, and then dumping it back into its file. It somehow works, but doesn't feel sustainable. I'm leaning towards dropping the dump entirely, since if I ever do need it I could probably just read and concactenate each individual region file, but we'll see.

After some light testing, I'm also beginning to think a simple frontend may be worth it after all. My original plan was just to serve the data for each region as static JSON files through GitHub pages, but build times in the ballpark of a minute (with [Astro](https://astro.build/), i.e., using [Vite](https://vitejs.dev/) under the hood) mean it might not be so bad after all.
