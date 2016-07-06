---
title: "Discoverability for Web Components"
image: /img/posts/discoverability-for-web-components.png
---

In a world where you can create your own `<awesome-button>` tag and distribute it with a simple `<link rel="import" href="awesome-button.html">`, a whole range of options for composability and reusability emerges.

[Web Components](http://webcomponents.org/) are coming and there are many challenges coming along. How we connect component authors with component consumers is one of them.

# AMD? CommonJS? HTML Imports? ES6 Modules?

Dependency management has always been a trouble for client-side developers.

We started defining global variables but one could not ensure that the same global variable name wasn't used in a page already. Then, module specs like *AMD* and *CommonJS* appeared but the community never came to a consensus on which one to use.

Now, *EcmaScript 6* and *Web Components* are coming and they both introduce a different approach to dependency management.

```
import { MyDependency } from "my-dependency";
```

vs

```
<link rel="import" href="my-dependency.html">
```

It's still unclear how they'll interoperate but being able to package templates, images, styles, and scripts into one file is not only appealing but a key factor in making Web Components truly successful ([despite browser vendor disagreements](https://hacks.mozilla.org/2014/12/mozilla-and-web-components/)).

# npm? jspm? bower? component?

Speaking about lack of consensus, nowadays there's a clear fragmentation in the front-end package management world as well.

New tools like [spm](http://spmjs.io/), [jam](http://jamjs.org/), and [volo](http://volojs.org/) appears everyday. In the meanwhile, developers still struggle between choosing *Bower* or *npm*.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;What is Bower?&quot;<br>&quot;A package manager&quot;<br>&quot;How do I install it?&quot;<br>&quot;Use npm&quot;<br>&quot;What&#39;s npm?&quot;<br>&quot;A package manager&quot;<br>&quot;....&quot;</p>&mdash; Jakob Homan (@BlueBoxTraveler) <a href="https://twitter.com/BlueBoxTraveler/status/453685413115203584">April 9, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Sure, everybody loves *npm*. It works well, it’s [reliable](http://status.npmjs.org/), many communities are [moving](http://blog.npmjs.org/post/111475741445/publishing-your-jquery-plugin-to-npm-the-quick) [there](http://cordova.apache.org/announcements/2015/04/21/plugins-release-and-move-to-npm.html), and they got some [serious funding](https://www.crunchbase.com/organization/npm) which indicates continuous development.

However, the way it handles dependencies isn’t suitable for the web. Unless you want different versions of the same library loaded in your page. That's why some people still prefer *Bower* because it manages dependencies in a flat tree. [Hopefully](https://github.com/npm/npm/wiki/npm-%E2%87%94-Polymer-brainstorming-session), this will be solved on [npm@3](https://github.com/npm/npm/wiki/Roadmap).

# gallery? registry? search?

There are many different approaches that could improve how people find what components they need.

For instance, we could build a new registry just like *npm* and *Bower*. But let's face it, no one wants to install another *CLI* or include another configuration file in their repositories.

Another solution would be having a curated list of *Web Components*. That’s actually how we started [CustomElements.io](https://customelements.io/), it was a gallery where people would manually submit their projects. But soon we realized that if we wanted to scale that was not an option anymore.

> 90% percent of everything is crap — Sturgeon’s law

The way I see it, a powerful discoverability tool for *Web Components* should be able to scrape those package managers and provide information that would help developers to make decisions about what third-party component to use, regardless of where it’s registered.

And that's what we're trying to do. We're building a new [CustomElements.io](https://customelements.io/) to better connect component authors with component consumers.

![](https://d262ilb51hltx0.cloudfront.net/max/2000/1*sZNZ7KJ-HYcO1HuTvlp1FA.png)

Built on top of [Node](https://nodejs.org/), [Hapi](http://hapijs.com/), [ElasticSearch](https://www.elastic.co/), and [Web Components](http://webcomponents.org/) (why not?), we hope to serve the community with a much better discoverability experience. For now, we're introducing a new design and architecture, expect more really cool features pretty soon.

As always, ideas are welcome on [GitHub](https://github.com/customelements/www).

> Thanks to [Giovanni Keppelen](https://twitter.com/keppelen) and [Italo Waxman](https://twitter.com/italowaxman).
