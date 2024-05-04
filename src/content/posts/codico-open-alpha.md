---
title: "Codico DevBlog: Open Alpha"
pubDate: 2022-08-07T00:03:25-07:00
---

So, it's been a few days since my last Codico DevBlog. Yesterday, I released [Codico](https://github.com/esfalsa/codico) into open alpha. Parts of the interface remain clunky, and others have bugs I'm aware of (not to mention the ones I haven't learned of yet), but it has enough functionality that I'm generally satisfied enough to call it a release.

Overall, it's a tool that doesn't actually do that much. It just takes a bunch of text from a Google Sheet, runs a templating engine over it (where half the templating syntax admittedly isn't supported — I'm not really keen to execute user-inputted JavaScript code, which is what that would require), and uploads the result through the NationStates API.

I do think, however, that maybe this lightweight approach has some merit. My hope is that it could be useful for groups of people working on the same set of dispatches — not everyone may have the technical knowledge to download a script and run it from their local environment, but it's easier to just open a website and fill out input fields as prompted.

Ironically, I'm not entirely sure where I'll go from here. Codico, unlike pretty much everything else I've made, is something I'm not very likely to use personally. Normally, that's how I get my ideas — I see a need that I have, I try to create something that addresses it, and if it's something that I think others may also find useful, I bundle it up into something slightly more presentable and release it. Codico was honestly just born from reading up on the NationStates API and thinking to myself that being able to create and edit dispatches seemed pretty cool. Sure, I'll keep it in my back pocket and probably will find a use for it eventually, but until then, it's probably going to stay in alpha for a while.
