---
title: 'DevBlog: A New Region Archiver?'
datetime: 2022-12-24T12:45:15-0800
---

So. It's been a while.

Recently, I've been working on a new region archival utility.

When (or rather, if) I finish this project, it certainly won't be the first. I love [Eyebeast](https://eyebeast.calref.network/) and it's already my go-to tool for detagging; in fact, it's a major inspiration for this project. It's also possible that something like [Conductor](https://github.com/hierocles/conductor) will be up and running by the time I finish my yet-to-be-named archival utility. Why, then, make my own? Well, long story short, I'm lazy.

Detagging right now, despite all the tools for it, is still a fair bit of work. Going through regions at update isn't all that bad — it's probably possible, with a target list set before update, to automate it all to spamming a single keybind — but actually detagging regions is still a bit much for my incredibly short attention span. It still requires searching up a region and manually copy-pasting information or clicking buttons. The horror!

In the long run, my goal is to create a tool that can reduce detagging to the same monotonous act of spamming a single keybind. The basic setup I have in mind is something like:

1. a browser extension that fetches data and sends it to NationStates on user input,
2. an API that archived region data, and
3. a script that parses daily dumps and updates the data stored in the API.

I'm still in the early stages of this project. I have a data dump parser set up, but I need to start working on actually saving that data. The performance also isn't great. It takes around 30 seconds on my computer to go through the daily dump even with a SAX parser, which is apparently slower than just dumping the full text of the daily dump into an XML parser and converting it into a giant JavaScript object, so my code must _really_ not be optimized well. The important thing is that it works…

In any case, 30 seconds isn't all that much compared to the lengths of time this script will eventually need to run for. As far as I can tell, requests for regional flags and banners count as requests to the HTML site, so the rate limit for automated requets is ten requests per minute. With around 16,000 regional flags and 5,300 custom banners, that works out to over 35 hours. Things will get better after the first run, since if the flag or banner hasn't changed it doens't need to be archived again, but I'll probably only archive regions with executive delegates or something.
