---
layout: post
date: 2012-12-02 13:10:55
title: Pull Quotes
---

Pull quotes are common in magazines, but you don't often seem them on the web. According to [Wikipedia][2], a pull quote is a 'quotation or excerpt from an article that is typically placed in a larger or distinctive typeface on the same page, serving to entice readers into an article or to highlight a key topic'.

<p data-pullquote="Because the content isn&#8217;t repeated, it&#8217;s invisible to screen readers and services like Instapaper."></p>

I found [a pull quote technique by Maykel Loomans][1] which is quite clever; it uses HTML5's `data-attribute` and CSS's `content` to include a pull quote in the page, without it being a repetition of content. Because the content isn't repeated, it's invisible to screen readers and services like Instapaper. However, his technique relies on adding a class to the `<p>` element, along with `data-pullquote=""`. As Jekyll uses Markdown to store content, you can't just add a class or data-attribute to a paragraph. Markdown does however, parse blocks of HTML. I decided to use a CSS attribute selector---instead of a class---to insert the pull quote with as little markup as possible:
	
	<p data-pullquote="Pull quote content"></p>

That's pretty bare bones. An empty paragraph tag with the data-attribute, `data-pullquote`. It's possible to use CSS to pull the content from `data-pullquote` and insert it into the page. First make the empty element visible:

	p[data-pullquote] {
		display: block;
	}

Then use a `:before` selector to add the content to the page, giving it some basic styles:
	
	p[data-pullquote]:before {
		content: attr(data-pullquote);
		float: right;
		width: 200px;
		margin: 0 -5% 0.5em 30px;
		padding: 0;
		font-size: 22px;
	}
	
I also wanted multiple pull quotes on a page to alternate between floating left and right; I tried selecting them with `nth-of-type`:
	
	p[data-pullquote]:nth-of-type(odd):before
	
Unfortunately that didn't work, `nth-of-type` was finding every odd paragraph, instead of every odd paragraph with `data-pullquote`. So I ended up having to use a class to optionally pull a quote to the left:
	
	p.pull-left[data-pullquote]:before {
		float: left;
		margin: 0 30px 0.5em -5%;
	}

It's more markup, but it does allow me to choose which quotes I pull to the left.

[1]: http://miekd.com/articles/pull-quotes-with-html5-and-css/ "Pull Quotes with HTML5 and CSS — miekd"
[2]: http://en.wikipedia.org/wiki/Pull_quote "Pull quote - Wikipedia, the free encyclopedia"