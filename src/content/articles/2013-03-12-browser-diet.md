---
title: "Why did I create Browser Diet?"
description: "We developers talk a lot about HTML5, CSS3, EcmaScript 6 news that we almost forget to talk about other things that are also very important, but aren't as novelty just like web performance. After a huge effort, we finally launched a community-driven performance guide called browserdiet.com and today I'm here to share my experience leading this awesome project."
language: "en"
image: /images/browserdiet.jpg
slug: browser-diet
---

<p><em><a href="http://tableless.com.br/como-perder-peso-no-browser/">Leia em português.</a></em></p>

<p>We developers talk a lot about HTML5, CSS3, EcmaScript 6 news that we almost forget to talk about other things that are also very important, but aren't as novelty just like web performance.</p>

<p>After a huge effort, we finally launched a community-driven performance guide called <a href="http://browserdiet.com">browserdiet.com</a> and today I'm here to share my experience leading this awesome project.</p>

<!-- more -->

<h2>Motivation</h2>

<p>2012 was a very different year for me, I spent 1/3 of my time traveling to give talks and I found a lot of bad internet connections in hotels and airports. It made me very angry. And of course I always cursed the hotel/airport, until realize that's actually our fault.</p>

<p>We developers are selfish. We spend all day at the office with a high speed connection and forget that there are other people in the world experiencing different speeds.</p>

<h2>The beginning</h2>

<p>I started to study more about Web Performance Optimization (WPO) and came across the following scenario. In english, excellent references like <a href="http://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309">High Performance Websites</a> and <a href="http://www.amazon.com/Even-Faster-Web-Sites-Performance/dp/0596522304/ref=sr_1_1">Even Faster Web Sites</a> books, both by <a href="http://stevesouders.com/">Steve Souders</a>. Besides <a href="http://developer.yahoo.com/performance/rules.html">Yahoo!</a> and <a href="https://developers.google.com/speed/docs/best-practices/rules_intro">Google</a>'s online guides. In portuguese, a dozen of lost blogposts.</p>

<p>So I thought: "What if I created the ultimate community-driven performance guide?" But it didn't make sense to do it alone, so I started to talk with some friends.</p>

<h2>Conception</h2>

<p>One thing was very clear to me, I wanted to do a fun project.</p>

<p>First, I conviced a designer called <a href="http://www.brizabueno.com/">Briza Bueno</a> <em>(Americanas.com)</em> to help me. She developed an identity much more funny than those boring guides that exist today. All based in <a href="http://myextralife.com/56geeks/">Scott Johnson</a>'s illustrations, whom I asked permission to use images.</p>

<p>Then it came time to develop the structure of this website, <a href="http://irae.pro.br">Iraê Lambert</a> <em>(Yahoo!)</em> helped me on that part writing a static generator in Python. But I didn't master that code and the barriers I encountered for not knowing what was manipulating started to keep me away from the project, while other ideas were emerging.</p>

<p>Result: the project was stopped for one year until I decided to rewrite everything using another static generator in Node.JS called <a href="http://docpad.org">DocPad</a>. Like any other open source project, if you want to do something with the collaboration of people you'll need to eliminate as many barriers as possible. So, inspired by <a href="http://html5please.com/">HTML5 Please</a>, I decided that all tips would be written in the simplest format in the world, <a href="http://en.wikipedia.org/wiki/Markdown">Markdown</a>.</p>

<h2>Content</h2>

<p>Design and development were ready, we had everything except what really matters, content. So I invited many great friends who face performance challenges everyday, <a href="https://github.com/davidsonfellipe">Davidson Fellipe</a> <em>(Globo.com)</em>, <a href="https://github.com/keppelen">Giovanni Keppelen</a> <em>(Peixe Urbano)</em> and <a href="https://github.com/jaydson">Jaydson Gomes</a> <em>(Terra)</em>. The initial categories HTML, CSS, JavaScript and jQuery were divided between us.</p>

<p>My eternal dilemma between Portuguese and English also persisted in this project. I even bought this small domain <a href="http://comoperderpesonobrowser.com.br">comoperderpesonobrowser.com.br</a>, but it clearly wouldn't work for an english content too. That's why I opted for something shorter and universal.</p>

<h2>Revision</h2>

<p>After much improvement I decided to invite other guys to review, like <a href="https://github.com/marcelduran">Marcel Duran</a> <em>(Twitter)</em>, <a href="https://github.com/miketaylr">Mike Taylor</a> <em>(Opera)</em>, <a href="https://github.com/mangini">Renato Mangini</a> <em>(Google)</em> and <a href="https://github.com/sergiolopes">Sérgio Lopes</a> <em>(Caelum)</em>. Everyone was excited and insanely contributed, including questions related to the code of the website were extremely debated like <a href="https://github.com/zenorocha/browser-diet/issues/40">CSS Sprites vs Lazy Load</a>.</p>

<h2>Launch</h2>

<p>I was planning to launch this project at least in April. But when I saw that the first contributors (Briza, Davidson, Giovanni and Jaydson) would be present at <a href="http://riojs.org">Rio.JS</a> I changed my presentation title and started running against time.</p>

<p>Fortunately everything worked out and we launched the project!</p>

<p>The final result you can see at: <a href="http://browserdiet.com">browserdiet.com</a>.</p>

<p>Source code, as always, is <a href="https://github.com/zenorocha/browser-diet">available at Github</a>.</p>

<p><em>PS: My <a href="https://speakerdeck.com/zenorocha/como-perder-peso-no-browser/">slides are also online</a> for those who weren't there.</em></p>

<script async class="speakerdeck-embed" data-id="31ed55c06ab8013086e822000a8f982b" data-ratio="1.33333333333333" src="//speakerdeck.com/embed.js"></script>

<h2>Conclusion?</h2>

<p>I'm very excited to see how the community will receive and benefit from these great tips that we prepared.</p>

<p>So, let's make the web faster?</p>

<h2>Reactions</h2>

<blockquote class="twitter-tweet"><p>love this new project: <a href="http://t.co/u8FWpD5mW0" title="http://browserdiet.com">browserdiet.com</a></p>&mdash; Stoyan Stefanov (@stoyanstefanov) <a href="https://twitter.com/stoyanstefanov/status/311258820800303104">March 11, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<p><em>Stoyan Stefanov, Engineer - Facebook</em></p>

<blockquote class="twitter-tweet"><p>How to lose weight in the browser — the definitive front-end performance guide: <a href="http://t.co/YqRgmFvipm" title="http://browserdiet.com/">browserdiet.com</a></p>&mdash; Mathias Bynens (@mathias) <a href="https://twitter.com/mathias/status/311193207327293440">March 11, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<p><em>Mathias Bynens, Web Developer - Freelance</em></p>

<blockquote class="twitter-tweet" data-conversation="none"><p>@<a href="https://twitter.com/zenorocha">zenorocha</a> @<a href="https://twitter.com/addyosmani">addyosmani</a> awesome project! we need more stuff like this, and more people thinking about it.</p>&mdash; Ilya Grigorik (@igrigorik) <a href="https://twitter.com/igrigorik/status/311303945920339968">March 12, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<p><em>Ilya Grigorik, Developer Advocate - Google</em></p>

<blockquote class="twitter-tweet"><p>Some of Brazil's brightest front-end devs created and just launched <a href="http://t.co/8FNPhsjzQx" title="http://browserdiet.com/">browserdiet.com</a>. Check it out!</p>&mdash; Mike Taylor (@miketaylr) <a href="https://twitter.com/miketaylr/status/311253455647952897">March 11, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<p><em>Mike Taylor, Web Opener - Opera</em></p>