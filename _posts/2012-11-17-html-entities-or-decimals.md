---
layout: post
date: 2012-11-17 10:05:54
title: HTML Entities or Decimals
link:
---

I had issues with the RSS feed for this site. The feed validator was telling me that using a HTML entity like `&lsquo;` was invalid. I don't know much about XML, but it seemed strange; I *had* escaped the character; I *hadn't* just pasted in a 'curly' quotation mark.

Turns out XML doesn't like some HTML entities. Using `&infin;` for the infinity symbol isn't good enough, you need to use the HTML decimal `&#8734;`. However, it seems that using `&amp;` for an ampersand is valid. XML is an indiscriminate beast.

I guess that's why [SmartyPants][] et al. convert characters to HTML decimals rather than entities; the decimal will always work, the entity won't.

I've updated the [character reference table][] on Style Manual accordingly.

[character reference table]: http://stylemanual.org/#html-decimals--shortcuts
[SmartyPants]: http://daringfireball.net/projects/smartypants/