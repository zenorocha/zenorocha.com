---
layout: post
draft: false #true makes it live, but hides from index and archive.
published: true
date: 2011-02-16 08:50:00
title: Short URLs on your own domain
link:
excerpt:
---

<p>I've recently set up my own self hosted URL shortener using <a href="http://lessnmore.net/">Lessn More</a> by <a href="http://alanhogan.com/">Alan Hogan</a>, which is a fork of <a href="http://www.shauninman.com/archive/2009/08/17/less_n">Lessn</a> by <a href="http://www.shauninman.com/blog">Shaun Inman</a>.</p>
<p>I guess it's a bit more initial effort to host your own and there's some (very minimal) server costs. But there are also lots of advantages over something like <a href="http://bit.ly/pro/">bit.ly pro</a>, which lets you use your own domain, but doesn't give you unique slugs based on your domain.</p>
<p>Bit.ly is so commonly used, that you end up with a six character slug. For example: http://bit.ly/<strong>hDT4Bk</strong>. I setup a bit.ly pro account a while ago, expecting to start from single character slugs. If that was the case, an eight character domain, with a two character slug would be a couple of characters shorter than an average bit.ly URL (shorter again if you had a shorter domain). But unfortunately bit.ly pro just tacks the same slug onto your domain as it would on the bit.ly or j.mp domains. In fact the same slug works across all three domains.</p>
<p>If you want to use a custom slug on bit.ly (or any other good/popular variation) there's a good chance it'll be taken. As an example, the first two I tried (<a href="http://bit.ly/photo ">http://bit.ly/photo</a> and <a href="http://bit.ly/shopping">http://bit.ly/shopping</a>) were taken.</p>
<p>All that's gone when you host your own. You start with one character slugs till they're all gone, then move on to two. I have no idea how to work out how many two or three character combinations there are (especially when you factor in uppercase and lowercase) but I'd say there'd be a lot. And every conceivable custom slug you want is available.</p>
<p>Beyond that, it's kind of nice to use your own domain. <a href="http://tlr.name/3">http://tlr.name/3</a> looks better to me than <a href="http://bit.ly/cxsCwU">http://bit.ly/cxsCwU</a>. It's also nice to see sites/brands provide their own recognisable short URL's. <a href="http://flic.kr">flic.kr</a> for example.</p>
<p>If you're looking for a short domain to register, <a href="http://domai.nr/">domai.nr</a> is awesome. You still end up needing to check on an actual registrars site, but it's a great place to start. Plus GoDaddy makes my eyes bleed.</p>
<p>Finally, Lessn More does virtually everything I wanted it to. But the stats page was a bit hard to read. I tidied up the css a bit (which is embedded in the header.php file). You can <a href="http://tlr.name/lessnmorestats">download it here</a>.</p> 