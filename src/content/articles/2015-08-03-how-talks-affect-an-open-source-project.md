---
title: "How talks affect an open source project?"
---

Good documentation, readable code, great performance, intuitive APIs. These are few things that differentiates a successful open source project than just another GitHub repo that nobody cares. But what if you've done all that and still nobody is paying attention?

Unless you’re a rockstar developer or a well-known company, you’ll need to promote your new thing. I know, I know, you're an engineer, "promoting" is a curse word for you. Well, I'm sorry to tell you that but "build it and they will come" [doesn't work these days](http://www.quora.com/Why-is-If-you-build-it-they-will-come-terrible-advice).

Once you accept that promoting is a necessary "evil", there are [many ways you can explore that like](https://hacks.mozilla.org/2013/05/how-to-spread-the-word-about-your-code/) sharing on social media, reaching out influencers, writing articles, recording screencasts, and so on.

You can even go a tech conference and give a talk! Sounds scary, right? I know, I know, [public speaking is tough](http://speaking.io/) and talking in front of other people can be intimidating. However, if you face that fear you'll see how it's actually a pretty rewarding experience.

Conferences are unique opportunities to promote your thing because there's a lot of excitement going on. Attendees are simply eager to share something new to their followers and peers.

But how can we prove that? How can we demonstrate that **creating an open source project + giving a talk about it = growth of community interest**? How can we evaluate interest after all?

Driven by my endless curiosity on to [how to measure developer relations success](http://www.quora.com/How-do-you-measure-success-in-developer-relations), I did some data mining to find out how the answer. Let's explore two relevant open source projects from two big players in the tech industry.

## React by Facebook

[React](https://github.com/facebook/react) was first announced at [JSConf US 2013](http://2013.jsconf.us/). Despite some [severe feedback](https://twitter.com/cowboy/status/339853906681151488) in the beginning, they kept working closely to the community and now are one of the most popular frameworks of its kind.

At the time I write this, React has a total of **25,527** stars on GitHub. What we're going to do here is scan each of those stars and check when the starring event happened. Then, we'll plot that data on a chart.

![React — GitHub stars collected by day](https://d262ilb51hltx0.cloudfront.net/max/2000/1*67cNX3vW6a9a24myd258Zg.png)

Cool! Now, can you see some peaks in the graph? Those are days when there were a lot of people starring that repo. I guess something relevant happened at that time, so let's do some research to find out.

![React — GitHub stars collected by day VS conference dates](https://d262ilb51hltx0.cloudfront.net/max/2000/1*Ipm-WggtuCoHA9kG4r8O1Q.png)

Coincidentally, talks about React in conferences such as [JSConf](http://2013.jsconf.us/), [F8](https://fbf8.com/) and [React Conf](http://reactconf.com/) happened at the very same day as those peaks.

Besides giving talks, they also did a very good job in driving attention for their releases, specially with [0.8](https://facebook.github.io/react/blog/2013/12/19/react-v0.8.0.html) and [0.12](https://facebook.github.io/react/blog/2014/10/28/react-v0.12.html) versions.

Okay, that was interesting to note. Now, let's check some other project to see if that formula is really true.

## Polymer by Google

[Polymer](https://github.com/polymer/polymer) was first introduced in 2013 at a conference too. However, it wasn't a community driven event like JSConf, it was a much much bigger event, it was [Google I/O](https://developers.google.com/events/io/2013/).

After years of improvements, they finally reached version *1.0*. Over the years, lots of releases and updates were made. Several of them announced at official Google events like [Chrome Dev Summit](https://developer.chrome.com/devsummit/) and I/O.

At this moment, Polymer has a total of **11,919** stars on GitHub. After some data mining, let's check how those stars are distributed over time.

![Polymer — GitHub stars collected by day](https://d262ilb51hltx0.cloudfront.net/max/2000/1*JzlED7A_il37jRPUYkRhPA.png)

Again, we can spot some peaks in the graph. Those peaks represents the amount of starring events that occurred at that particular day. I wonder what happened there.

![Polymer — GitHub stars collected by day VS conference dates](https://d262ilb51hltx0.cloudfront.net/max/2000/1*6_NSgfpo6jefLkUKmmG1gg.png)

There you have it, another clear correlation between star growth and conference appearances. As we expect, talks really have the power to drive momentum and all those events were important to boost React's and Polymer's interest and relevance with the community.

Even though, GitHub stars don’t tell if a project A is better than project B *(please don't judge a repo by number of stars)*, it’s undeniable that this number shows how interested the community is in most of the times.

And why is it important to have lots of people interested in a project? Because it's more people using it, which increases the chances of bug reports and contributions. Hopefully, this community interest that we've been talking about will translate into a better software in the end.