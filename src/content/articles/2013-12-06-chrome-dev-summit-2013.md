---
title: "Chrome Dev Summit 2013"
description: "Last month I had the opportunity to be in the best event I've ever
attended. Peter Lubbers and his team made an incridible job organizing the first
Chrome Summit for approximately 200 people in Mountain View and fortunately all
presentations were recorded, so I picked some of my favorite ones to share with
you today."
language: "en"
image: /img/posts/chrome-dev-summit.jpg
---

Last month I had the opportunity to be in the best event I've ever attended. [Peter Lubbers](https://twitter.com/peterlubbers) and his team made an incridible job organizing the first [Chrome Dev Summit](http://developer.chrome.com/devsummit) for approximately 200 people in Mountain View and fortunately all presentations were recorded, so I picked some of my favorite ones to share with you today.

<!-- more -->

## [Jake Archibald](https://twitter.com/jaffathecake): Network connectivity

<div class="iframe-wrap">
  <iframe src="http://www.youtube.com/embed/Z7sRMg0f5Hk">
  </iframe>
</div>

*[> See the speaker deck.](https://speakerdeck.com/jaffathecake/network-optional)*

Although AppCache seems the perfect solution for storing offline resources from a page, in practice it reveals [many problems](http://alistapart.com/article/application-cache- is-a-douchebag). In a very funny way, [Jake](https://twitter.com/jaffathecake) presented the ServiceWorkers (formerly Navigation Controllers), a new system that provide event-driven scripts that run independent of web pages. Compared to AppCache, ServiceWorker's API is more verbose but it gives you complete control of what is happening.

## [Eric Bidelman](https://twitter.com/ebidel): Polymer

<div class="iframe-wrap">
  <iframe src="http://www.youtube.com/embed/DH1vTVkqCDQ">
  </iframe>
</div>

*[> See the speaker deck.](http://html5-demos.appspot.com/static/cds2013/index.html)*

[Web Components](http://webcomponentsorg.github.io/webcomponents.org/) is probably one of things that most interests me nowdays, it leverages real encapsulation on the web and gives you the power to create your own elements. Unfortunately, its specification isn't done yet so we need polyfills to make sure it works today. [Polymer](http://www.polymer-project.org/), the project presented by [Eric](https://twitter.com/ebidel), introduces a set of polyfills that add support for Shadow DOM, Custom Elements, HTML Imports, etc. And not only that, it also provides some UI components and a very simple API to create Web Components.

## [Paul Kinlan](https://twitter.com/Paul_Kinlan): UX patterns for mobile

<div class="iframe-wrap">
  <iframe src="http://www.youtube.com/embed/j3YbNHtnYo4">
  </iframe>
</div>

*[> See the speaker deck.](http://mobile-ux.appspot.com/)*

[Kinlan's](https://twitter.com/Paul_Kinlan) talk was full of practical tips like "12pt, 1em. 16 pixels font sizes are a minimum for legibility" and "tap targets on the web should be 7mm large and include 2mm of padding". He also announced that Chrome is removing the 300ms delay on clicks on mobile and presented [PageSpeed Insights for UX](https://developers.google.com/speed/pagespeed/insights/?ux=1) that checks viewport configuration, determines if text is legible, touch target sizes, and more.

## [Alice Boxhall](https://twitter.com/alice_boxhall): Multi-device accessibility

<div class="iframe-wrap">
  <iframe src="http://www.youtube.com/embed/E0ojKLzXoZ4">
  </iframe>
</div>

*[> See the speaker deck.](https://docs.google.com/presentation/d/1xKlQZRHyLPXvrTdGkGIumc24bT4_kxRmdqIC_b7fngo/pub?start=false&loop=false&delayms=3000)*

When I first saw the event agenda I was a little skeptical about an entire presentation on accessibility. However, <a href="https://twitter.com/alice_boxhall">Alice</a> showed some really cool stuff like <a href="https://www.youtube.com/watch?v=OKBaTRbi7p8">Chrome Vox</a> and the promising <a href="https://github.com/GoogleChrome/accessibility- developer-tools">Accessibility Developer Tools</a> project that can be runned in Chrome's Audit tab or as a command-line tool via PhantomJS.

## [Paul Irish](https://twitter.com/paul_irish): DevTools for mobile

<div class="iframe-wrap">
  <iframe src="http://www.youtube.com/embed/gZH1d2Co1X0">
  </iframe>
</div>

*[> See the speaker deck.](https://docs.google.com/presentation/d/1nH54tvjC5mq4b_-
6rdLON7aV-SLSvJUN1Rh_51jaC8M/present#slide=id.p)*

I've been watching [Paul's](https://twitter.com/paul_irish) presentations on Youtube since 2009 but never had a chance to see it live. So I was really interested to see not only the content but also the way he present things. And I can say that my expectations were fulfilled. Tons of interesting stuff for mobile development like [remote debugging](http://www.html5rocks.com/en/tutorials/developertools/mobile/), [screencasting device screen to desktop](http://www.youtube.com/watch?v=Q7rEFEMpwe4), and [mobile emulation](http://www.youtube.com/watch?v=z7sTRdSpA04).

## [Colt McAnlis](https://twitter.com/duhroach): Tooling techniques

<div class="iframe-wrap">
  <iframe src="http://www.youtube.com/embed/8MMmg3bDOjc">
  </iframe>
</div>

*[> See the speaker deck.](https://docs.google.com/presentation/d/1Aa9dn8S4su_8mrm8Pb3CDlWv
rWiJU_3AB6HKp3zaJUs/edit#slide=id.p18)*

The pirate [Colt](https://twitter.com/duhroach), drew attention on how to focus your efforts in order to build faster applications. His "hit list" features the pillars for performance improvement: optimizing critical path, reducing the number of paints, and reducing JavaScript execution time.

## Conclusion

This first edition was really focused on tooling, mobile, and how Chrome can help developers daily. Everything was carefully organized from the live broadcast to the post-event disclosure. And since this is just a short testimony of what happened, I highly recommend you to [watch every single talk](http://www.youtube.com/playlist?list=PLOU2XLYxmsIJblRBPqrwisutm3dxoa43P).