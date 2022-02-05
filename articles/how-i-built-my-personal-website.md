---
title: How I built my personal website
description: "Most people think about their personal websites as a portfolio. It's this thing where you can showcase your work and maybe share some contact info. For me, a personal website is much more than that - it's a playground for experimentation."
image: /static/img/posts/how-i-built-my-personal-website.jpg
date: "2021-11-11"
---

Most people think about their personal websites as a portfolio. It's this thing where you can showcase your work and share some contact info.

For me, a personal website is much more than that - it's a **playground for experimentation**.

It's your own little corner of the web where you have full control. It's a place where you can break the rules and build anything you want. There's no deadline, no predefined stack, no boundaries.

Over the years, I kept evolving and improving this space. Today, I want to take you on a trip through all the different versions and technologies used here, along with details on how I built this latest iteration.

## Version 1 (2011 - 2012)

This website was written in plain HTML and CSS. There was no build process, compilation, or anything like that. The only automated step was a shell script that would use `rsync` to send all the files via SSH to my [Dreamhost](https://www.dreamhost.com/) server.

I wanted to try some fancy JavaScript techniques, so I had some data stored as JSON and loaded it on the client-side using [Ajax](https://en.wikipedia.org/wiki/Ajax_(programming)). The transitions were implemented using [jQuery](https://jquery.com/), and the markup was written with [HTML5](https://en.wikipedia.org/wiki/HTML5), so I had to use [Modernizr](https://modernizr.com/) to support [IE6](https://en.wikipedia.org/wiki/Internet_Explorer_6).

What I loved about this site was the simplicity. There was no navigation, only external links. On a single page, you could see everything. Also, that illustration was so fun!

*[View source code →](https://github.com/zenorocha/zenorocha.com/tree/v1)*

<img alt="zenorocha.com V1 screenshot" src="/static/img/posts/how-i-built-my-personal-website-2012.jpg" class="post-image-full">

## Version 2 (2013 - 2015)

Apart from this site, I also had a blog that was hosted on [Tumblr](https://www.tumblr.com/) and that was served with the `blog.zenorocha.com` domain.

Once I started writing more posts, I felt the need to unify my portfolio with my blog. That's when I started using [Jekyll](https://jekyllrb.com/). This was my first exposure to [Ruby](https://www.ruby-lang.org/en/) and [YAML](https://yaml.org/), which was really exciting. The posts were written in [Markdown](https://daringfireball.net/projects/markdown/). The layout was built using the [Liquid](https://shopify.github.io/liquid/) templating language.

I remember using this JavaScript library called [Fokus](https://lab.hakim.se/fokus/) to impress people when they selected a paragraph. To automate the linting process, I used a task runner called [Grunt](https://gruntjs.com/). For hosting, I used [GitHub Pages](https://pages.github.com/) which was giving HTTPS certificates for free (that was a big deal back then).

*[View source code →](https://github.com/zenorocha/zenorocha.com/tree/v2)*

<img alt="zenorocha.com V2 screenshot" src="/static/img/posts/how-i-built-my-personal-website-2013.jpg" class="post-image-full">

## Version 3 (2016 - 2020)

After having so many problems with Ruby gems, I ended up migrating to [Metalsmith](https://metalsmith.io/), a super fast and pluggable static generator written in JavaScript. The templating language I chose was [Handlebars](https://handlebarsjs.com/), and the whole thing would compile in seconds.

On the client-side, I used [Headroom](https://wicky.nillia.ms/headroom.js/), a fancy library that slides the header out of view when scrolling down and slides back in when scrolling up. At that time, [Single Page Applications (SPAs)](https://en.wikipedia.org/wiki/Single-page_application) were a huge trend, so I used [Senna.js](https://sennajs.com/), a library that I helped build, to accomplish it.

I'm super into [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food), so I also used a cloud hosting solution that I was building at work called *WeDeploy*, which eventually became [Liferay DXP Cloud](https://www.liferay.com/products/dxp-cloud).

In terms of design, a huge inspiration for me was [Medium](https://medium.com/). The reading experience and the way images were displayed were extremely beautiful, so I tried to replicate some of that.

*[View source code →](https://github.com/zenorocha/zenorocha.com/tree/v3)*

<img alt="zenorocha.com V3 screenshot" src="/static/img/posts/how-i-built-my-personal-website-2016.jpg" class="post-image-full">

## Version 4 (2021 - Present)

For this new site, I tried to focus on typography instead of images, mixing solid dark tones with vivid gradients. It features two fascinating concepts - **keyboard shortcuts** and **command palettes**.

The UI components are written in [React](https://reactjs.org/), and everything is powered by [Next.js](https://nextjs.org/). The cool thing about this stack is that you can make everything static compiled while still adding some dynamic aspects like fetching the [Google Analytics API](https://developers.google.com/analytics/devguides/reporting/core/v4) to display the number of views. Deployment is handled by [Vercel](https://vercel.com/), the single best developer experience you can find nowadays.

The command palette is built using [kbar](https://github.com/timc1/kbar/). The code snippets are highlighted with [Prism](https://prismjs.com/) using a custom set of [Dracula](https://draculatheme.com) colors. The favicons are made with SVG and support both dark and light modes. Finally, all the smooth hover interactions are powered by [Framer Motion](https://www.framer.com/motion/) which I'm absolutely in love with.

*[View source code →](https://github.com/zenorocha/zenorocha.com/tree/master)*

<img alt="zenorocha.com V4 screenshot" src="/static/img/posts/how-i-built-my-personal-website-2021.jpg" class="post-image-full" style="border: 1px solid rgba(255, 255, 255, .3)">

## The end?

Is this site perfect? No. Is this site done? Not at all.

This is a snapshot of my personality, my worldview, and the limited time I found to display it. There are good things about it, but there are also fundamental flaws. Having this permanent playground means that there is always opportunity to improve.

And that's the beauty of it.