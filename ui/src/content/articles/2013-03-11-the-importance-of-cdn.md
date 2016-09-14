---
title: "The importance of CDN"
description: "Some weeks ago we announced the preview release of AlloyUI 2.0. One of the cool things about it is that now we have a pretty new CDN (Content Delivery Network). So instead of downloading AlloyUI to use in your local environment, you just to need copy and paste this line of code and start using it."
language: "en"
---

*[Leia em Português.](http://imasters.com.br/desenvolvimento/a-importancia-de-uma-cdn/)*

Some weeks ago we announced the preview release of [AlloyUI 2.0](http://alloyui.com). One of the cool things about it is that now we have a pretty new [CDN (Content Delivery Network)](http://en.wikipedia.org/wiki/Content_delivery_network). So instead of downloading AlloyUI to use in your local environment, you just to need copy and paste this line of code and start using it.

<!-- more -->

```
<script src="http://cdn.alloyui.com/2.0.0pr2/aui/aui-min.js"></script>
```

## Why it's so important to use a file hosted on a CDN?

Basically for performance improvements, we'll dig into some of them.

### Decrease latency

Let's say you are in China and your server is in Los Angeles. When you load a file the browsers sends a HTTP request that will go across the globe until reach your server and, as you can see, it takes time.

However if this file is hosted on a CDN it will be distributed across many different servers in the world. So when you make a request, it will look for the nearest server, which decreases latency time a lot.

![Tradicional scheme vs CDN scheme of distribution](http://imasters.com.br/wp-content/uploads/2013/03/1.jpg)

*Image: Traditional scheme of distribution vs CDN scheme of distribution*

### More parallel downloads

Browsers can't handle too many parallel downloads per domain.

![Not much parallel downloads](http://imasters.com.br/wp-content/uploads/2013/03/2.jpg)

That's why hosting files in different domains is a good performance tip.

![Not much parallel downloads](http://imasters.com.br/wp-content/uploads/2013/03/3.jpg)

### Cache

Let's say you visited a website that uses AlloyUI hosted on CDN, as soon as you load it your browser will automatically cache it in your machine. Then if you visit another website that uses AlloyUI too, you don't need to download all those files again because you already have cached them.

## What's the real benefit?

Let's try those performance improvements in real life. My experiment will load the exact same file using a CDN and don't using it.

**Didn't use CDN:**

![Didn't use CDN](http://imasters.com.br/wp-content/uploads/2013/03/4.jpg)

When you load [this file](http://js.liferay.com/aui/2.0.0pr2/aui/aui-min.js), that is not hosted on a CDN with a 10mb internet connection, you take 1.27 seconds with 404ms of latency.

**Use CDN:**

![Use CDN](http://imasters.com.br/wp-content/uploads/2013/03/5.jpg)

But when you load [this file](http://cdn.alloyui.com/2.0.0pr2/aui/aui-min.js), that is now hosted on a CDN with the same internet connection, you take 314ms with 155ms of latency.

That's a 75% decrease and this is only one file!

Now imagine a lot of modules and its dependencies being loaded, it will cause a significant difference.

## Conclusion

And that's all folks! If you have any questions please comment below :)