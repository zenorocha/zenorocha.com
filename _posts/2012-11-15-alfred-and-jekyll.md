---
layout: post
date: 2012-11-15 12:26:22
title: Use Alfred.app to Create a New Jekyll Post
link: http://aaronmoodie.com/2012/09/jekyll-setup/
---

So simple, so useful. Aaron created a simple shell script---executed with [Alfred]---that takes a 'template' Jekyll post, dates and names it, then moves it to a drafts folder.

I modified it slightly to work for my setup[^1]: Typing `post post-slug` into Alfred *instantly* opens a new post template in [TextMate].

Pair this with my [OS X service to insert the current date and time], and the friction is almost completely removed from creating a new post.

[^1]: I don't use a drafts folder. Instead I either use `published: false` or `draft: true` in the YAML Front Matter. The latter is a custom thing that does actually publish the post, but keeps it hidden from Index, Archive and RSS. The former is Jekyll default, and makes Jekyll ignore the post all together.

[Alfred]: http://www.alfredapp.com/
[TextMate]: https://github.com/textmate/textmate
[OS X service to insert the current date and time]: http://andytaylor.me/2012/11/10/creating-an-osx-service-to-insert-the-current-date-and-time/