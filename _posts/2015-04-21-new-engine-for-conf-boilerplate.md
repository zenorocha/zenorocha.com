---
layout: post
title: "New engine for Conf Boilerplate"
description: "A long time ago in a galaxy far far away... we came up with this idea to help event organizers in an essencial task: the conference site."
language: "en"
---

*Read in portuguese on [BrazilJS](http://braziljs.org/blog/uma-nova-engine-para-o-conf-boilerplate)*

A long time ago in a galaxy far far away... we came up with this idea to help event organizers in an essencial task: *build the event site*.

That's because the more events we helped more we noticed that on the organization journey there are dozens of tasks that needs more attention than just building a website.

We wanted to put together something that was productive and easy to set up, so we chose the path of [static generators](https://www.staticgen.com/).

<!-- more -->

[We began the project using Jekyll](https://github.com/braziljs/conf-boilerplate/tree/v1.0.0). However, its focus on blogs and constant problems with [Ruby](https://www.ruby-lang.org/en/) dependencies led us to an obvious way: migrate to [Node](http://nodejs.org/). After all, this is a Brazil**JS** project, so nothing more obvious than evangelize something done in JavaScript.

Finally in 2012, [we announced Conf Boilerplate](http://braziljs.org/blog/apresentando-conf-boilerplate/) to the public. And since then, [more than 20 conferences around the world](https://github.com/braziljs/conf-boilerplate#showcase) have used our tool, including *DevFest's*, *TEDx's* and, of course, *Front In's*.

At that time we chose [DocPad](https://docpad.org/) as the engine to build Conf Boilerplate because of its high level of customization. This decision helped us dramatically, pulling several projects and initiating many developers in the Node world.

However, a number of issues including [governance](https://github.com/docpad/docpad/issues/821) and performance led us to [explore other solutions](https://github.com/braziljs/conf-boilerplate/issues/109). Which brings us to [Metalsmith](http://www.metalsmith.io/).

We hope this new tool will improve your workflow in this project and we invite you to play with [version 3](https://github.com/braziljs/conf-boilerplate/releases/tag/v3.0.0) that although it doesn't bring any extra functionality, brings substantial changes in the architecture, not only in the static generation engine, but in the templates engine as well.

More informations on how to migrate and what exactly changes, you can find in the [release notes]((https://github.com/braziljs/conf-boilerplate/releases/tag/v3.0.0).

*Happy hacking!*