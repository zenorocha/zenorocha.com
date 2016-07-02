---
title: "How did Clipboard.js get 5000 stars in a few days?"
---

On Monday I open sourced a SUPER simple [Copy to Clipboard library](https://clipboardjs.com/).

[Everybody went crazy](https://twitter.com/search?f=tweets&vertical=default&q=clipboard.js&src=typd).

Today is Friday and there are more than 5,000 stars on that GitHub repository.

Somebody asked me ["how did the repo achieve this impressive feat"](https://github.com/zenorocha/clipboard.js/issues/56)? And few people answered that it was because of [Hacker News](https://news.ycombinator.com/item?id=10301881).

But the truth is, **it has nothing to do with Hacker News**. Here are few different factors that contributed to that:

* **Experience:** I’ve been [working with open source](/most-active-contributors-on-github) for a while now. I gave more than [70 talks](/talks) and built [many projects over the last years](/projects). There was a LOT of hard work involved and lessons learned along the way.
* **Credibility:** Because of all those things I’ve done, lots of people started to follow me not only on [GitHub](https://github.com/zenorocha/) (~3k) but also on [Twitter](https://twitter.com/zenorocha) (~20k). I try to offer as much value as I can for those followers **every day**. That translates to a broader reach whenever I need to share something I’ve built.
* **Docs & demos:** 99% of developers complain that nobody cares about their code on GitHub. How you expect people to use something if you don’t teach them? My advice is that you need to spend more time writing and improving your documentation than writing code.
* **Timing:** On September 1, I read this article about [Mozilla starting to support execCommand](https://hacks.mozilla.org/2015/09/flash-free-clipboard-for-the-web/). At that article they said *“Firefox 41, which is currently in Beta, and slated to move to release in mid-September”*. I realized that was the missing part for this API to be adopted broadly. I wrote clipboard.js in a private repo and waited until [Firefox 41 was released](https://developer.mozilla.org/en-US/Firefox/Releases/41).
* **Working is not enough:** Most developers just make things work and that’s it. I spent a good amount of time trying to make this library smaller, trying to make the public API easier, and refactoring the source code for better readability.
* **Knowing your audience:** Everybody hates Flash and everybody hates bloated frameworks. Everybody loves a simple API and everybody loves GitHub’s copy to clipboard. If you don’t know your audience, you don’t know how to create something they’ll like.

> That’s not everything, but I hope it encourage folks to realize that it’s not just about coding.