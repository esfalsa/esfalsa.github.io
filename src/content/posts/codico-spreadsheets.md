---
title: "Codico DevBlog: Spreadsheets?"
pubDate: 2022-08-03T22:02:10-0700
---

For the past few days, I've been working on a new project called [Codico](https://github.com/esfalsa/codico). My goal is to create a simple way to write and publish dispatches, and keep them all up to date with any new content changes. But today, that led me to a strange place: making a spreadsheet template.

Having users store information for their dispatches in their own Google Sheets might seem like a cop-out replacement for implementing an actual accounts system and database — and it is, to be honest. But it's just so _easy_. Google Sheets covers a lot of fancy features. Version history? Controlling edit access? Live collaborative editing? All covered by Google Sheets.

It also neatly avoids any concerns about having to pay for hosting or cloud services. It's not that I'm particularly averse to spending money on this project, but I have a long-running pledge to myself not to spend any money on games. It was made with mobile game in-app purchases in mind, but NationStates counts too. We'll see how long that part lasts though. I also considered building an editing experience within the web app, but it was never going to be as feature-rich as Google Sheets. In particular, I could write content to the file system for individual users, but no hosted database would mean users would have to manually export and import their content to share with others working on the same dispatches.

Unfortunately, the Google Sheets API seemed really clunky to use. Fortunately, I'd stumbled upon this cool project a while back called [opensheet](https://github.com/benborgers/opensheet#readme) that offers an easy-to-use JSON API for Google Sheets. It does require spreadsheets to be viewable by anyone with the link, but considering the dispatches are all public anyway, leaving the raw templates behind those dispatches publicly viewable shouldn't be a huge problem.

From there, it was just a matter of pulling data from opensheet and displaying it ([SWR](https://swr.vercel.app/) is awesome, by the way). I say it was "just a matter of" pulling the data, but of course I had to pull something stupid in the middle. Apparently, I managed to edit the TypeScript types declaration exported by the SWR library when using VSCode's 'rename symbol' feature, and then spent a solid half hour trying to figure out why I was getting a TypeScript error. Oh well.

Anyway, eventually I got it working.

![Codico with data pulled from a spreadsheet](/images/posts/codico-basic-spreadsheet-view.png)

It's still a barebones site, but at least the Google Sheets import is working. And most importantly, it already comes with dark mode. Ideally, my goal for tomorrow is finish the code that actually turns dispatch templates into ready-to-post BBcode, but we'll see how far I actually get.
