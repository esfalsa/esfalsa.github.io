---
title: 'Region Archiver DevBlog: If Only It Were That Simple'
datetime: 2023-01-08T17:06:11.114-0800
---

It's a little weird to think that the last time I posted, I was talking about how my code was actually working. Unfortunately, I spoke a little too soon; once I linked it up with actually pulling flags from NationStates, it definitely was not working. This DevBlog won't be so much about reporting progress as reporting future plans, because progress since then has been difficult amid debugging and real-life scheduling.

One of the biggest flaws in the parsing logic I originally wrote was that it was events-driven. It could get through the daily dump itself in a matter of seconds, but would then have thousands of rate-limited flag and banner requests queued up, at least on the first run. I wasn't getting any errors, but things weren't happening in the order I was expecting and it seemed like some requests were being silently dropped. Although I tried to debug those issues for a bit, eventually I just gave up and decided to start working on a streaming parser implemention instead.

So that's where I'm at now. The gist of it is that I get a stream for the daily dump download, pipe it through an unzip stream, then a parser stream that converts it into chunks of data to save, and finally to a stream writing it into files for eah region. Although I haven't copied over the parsing logic yet, I do know my stream pipeline is working at least. I'm actually not entirely sure why it's working, since it's apparently able to pause and resume the download stream based on backpressure, but if that ever fails I can hopefully just save the daily dump locally and create a read stream from the file.

I do still need to actually get my code working, of course. I'm pretty sure I know how to write everything I have left to write, but then again, that's what I was thinking a week and a half ago and it turns out I wasn't quite correct, so we'll have to see. It would be nice to have something working before my winter break ends in a week or so, and that's not even counting the browser extension I'm planning to actually use all this data.
