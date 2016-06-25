---
title: "Chrome Dev Summit 2013"
description: "Last month I had the opportunity to be in the best event I've ever
attended. Peter Lubbers and his team made an incridible job organizing the first
Chrome Summit for approximately 200 people in Mountain View and fortunately all
presentations were recorded, so I picked some of my favorite ones to share with
you today."
language: "en"
---

<p><img src="/assets/img/posts/chrome-dev-summit.jpg" alt="Chrome Dev
Summit"></p>

<p>Last month I had the opportunity to be in the best event I've ever attended.
<a href="https://twitter.com/peterlubbers">Peter Lubbers</a> and his team made
an incridible job organizing the first <a
href="http://developer.chrome.com/devsummit">Chrome Dev Summit</a> for
approximately 200 people in Mountain View and fortunately all presentations were
recorded, so I picked some of my favorite ones to share with you today.</p>

<!-- more -->

<h2><a href="https://twitter.com/jaffathecake">Jake Archibald</a>: Network
connectivity</h2>

<div class="video-wrap">
  <iframe src="http://www.youtube.com/embed/Z7sRMg0f5Hk">
  </iframe>
</div>

<p><em><a href="https://speakerdeck.com/jaffathecake/network-optional">&gt; See
the speaker deck</a>.</em></p>

<p>Although AppCache seems the perfect solution for storing offline resources
from a page, in practice it reveals <a href="http://alistapart.com/article
/application-cache- is-a-douchebag">many problems</a>. In a very funny way, <a
href="https://twitter.com/jaffathecake">Jake</a> presented the ServiceWorkers
(formerly Navigation Controllers), a new system that provide event-driven
scripts that run independent of web pages. Compared to AppCache, ServiceWorker's
API is more verbose but it gives you complete control of what is happening.</p>

<h2><a href="https://twitter.com/ebidel">Eric Bidelman</a>: Polymer</h2>

<div class="video-wrap">
  <iframe src="http://www.youtube.com/embed/DH1vTVkqCDQ">
  </iframe>
</div>

<p><em><a href="http://html5-demos.appspot.com/static/cds2013/index.html">&gt;
See the speaker deck</a>.</em></p>

<p><a href="http://webcomponentsorg.github.io/webcomponents.org/">Web
Components</a> is probably one of things that most interests me nowdays, it
leverages real encapsulation on the web and gives you the power to create your
own elements. Unfortunately, its specification isn't done yet so we need
polyfills to make sure it works today. <a href="http://www.polymer-
project.org/">Polymer</a>, the project presented by <a
href="https://twitter.com/ebidel">Eric</a>, introduces a set of polyfills that
add support for Shadow DOM, Custom Elements, HTML Imports, etc. And not only
that, it also provides some UI components and a very simple API to create Web
Components.</p>

<h2><a href="https://twitter.com/Paul_Kinlan">Paul Kinlan</a>: UX patterns for
mobile</h2>

<div class="video-wrap">
  <iframe src="http://www.youtube.com/embed/j3YbNHtnYo4">
  </iframe>
</div>

<p><em><a href="http://mobile-ux.appspot.com/">&gt; See the speaker
deck</a>.</em></p>

<p><a href="https://twitter.com/Paul_Kinlan">Kinlan's</a> talk was full of
practical tips like "12pt, 1em. 16 pixels font sizes are a minimum for
legibility" and "tap targets on the web should be 7mm large and include 2mm of
padding". He also announced that Chrome is removing the 300ms delay on clicks on
mobile and presented <a
href="https://developers.google.com/speed/pagespeed/insights/?ux=1">PageSpeed
Insights for UX</a> that checks viewport configuration, determines if text is
legible, touch target sizes, and more.</p>

<h2><a href="https://twitter.com/alice_boxhall">Alice Boxhall</a>: Multi-device
accessibility</h2>

<div class="video-wrap">
  <iframe src="http://www.youtube.com/embed/E0ojKLzXoZ4">
  </iframe>
</div>

<p><em><a href="https://docs.google.com/presentation/d/1xKlQZRHyLPXvrTdGkGIumc24
bT4_kxRmdqIC_b7fngo/pub?start=false&loop=false&delayms=3000">&gt; See the
speaker deck</a>.</em></p>

<p>When I first saw the event agenda I was a little skeptical about an entire
presentation on accessibility. However, <a
href="https://twitter.com/alice_boxhall">Alice</a> showed some really cool stuff
like <a href="https://www.youtube.com/watch?v=OKBaTRbi7p8">Chrome Vox</a> and
the promising <a href="https://github.com/GoogleChrome/accessibility- developer-
tools">Accessibility Developer Tools</a> project that can be runned in Chrome's
Audit tab or as a command-line tool via PhantomJS.</p>

<h2><a href="https://twitter.com/paul_irish">Paul Irish</a>: DevTools for
mobile</h2>

<div class="video-wrap">
  <iframe src="http://www.youtube.com/embed/gZH1d2Co1X0">
  </iframe>
</div>

<p><em><a href="https://docs.google.com/presentation/d/1nH54tvjC5mq4b_-
6rdLON7aV-SLSvJUN1Rh_51jaC8M/present#slide=id.p">&gt; See the
speaker deck</a>.</em></p>

<p>I've been watching <a href="https://twitter.com/paul_irish">Paul's</a>
presentations on Youtube since 2009 but never had a chance to see it live. So I
was really interested to see not only the content but also the way he present
things. And I can say that my expectations were fulfilled. Tons of interesting
stuff for mobile development like <a
href="http://www.html5rocks.com/en/tutorials/developertools/mobile/">remote
debugging</a>, <a
href="http://www.youtube.com/watch?v=Q7rEFEMpwe4">screencasting device screen to
desktop</a>, and <a href="http://www.youtube.com/watch?v=z7sTRdSpA04">mobile
emulation</a>.</p>

<h2><a href="https://twitter.com/duhroach">Colt McAnlis</a>: Tooling
techniques</h2>

<div class="video-wrap">
  <iframe src="http://www.youtube.com/embed/8MMmg3bDOjc">
  </iframe>
</div>

<p><em><a href="https://docs.google.com/presentation/d/1Aa9dn8S4su_8mrm8Pb3CDlWv
rWiJU_3AB6HKp3zaJUs/edit#slide=id.p18">&gt; See the
speaker deck</a>.</em></p>

<p>The pirate <a href="https://twitter.com/duhroach">Colt</a>, drew attention on
how to focus your efforts in order to build faster applications. His "hit list"
features the pillars for performance improvement: optimizing critical path, reducing
the number of paints, and reducing JavaScript execution time.</p>

<h2>Conclusion</h2>

<p>This first edition was really focused on tooling, mobile, and how Chrome can
help developers daily. Everything was carefully organized from the live
broadcast to the post-event disclosure. And since this is just a short testimony
of what happened, I highly recommend you to <a
href="http://www.youtube.com/playlist?list=PLOU2XLYxmsIJblRBPqrwisutm3dxoa43P">
watch every single talk</a>.</p>