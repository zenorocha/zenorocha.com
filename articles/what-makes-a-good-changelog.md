---
title: What makes a good changelog
description: "Changelogs are important communication tools, and should be made for people to enjoy reading. Here are five decisions we made to make the best changelog we possibly could."
slug: what-makes-a-good-changelog
canonical_url: https://workos.com/blog/what-makes-a-good-changelog
image: /static/img/posts/what-makes-a-good-changelog.jpg
date: "2021-08-27"
---

These days, there are a ton of great tools to automatically generate and publish changelogs. While it might seem to make things easier, automating everything is not always the answer. After all, changelogs are made for humans, not machines.

Changelogs are important communication tools, and should be made for people to enjoy reading. There should always be some level of editing, and tailoring the message to who you’re talking to, and what you're talking about. Relying on strict commit styles and auto-generating tools limits that amount of tailoring, even if the tool allows you to customize the end user output.

At WorkOS, we decided to [create our own changelog](https://workos.com/changelog) as a part of our website. Launching the changelog was simple, but the magic is in the details. Here are five decisions we made to make the best changelog we possibly could:

### 1. Changelogs Need to Be Clear

A changelog isn’t a place to sell anyone anything. The content needs to be essential, straightforward, and clear. If you have fluff in your changelog, you're doing it wrong.

![An example of the GitHub Changelog](/static/img/posts/what-makes-a-good-changelog-a.png)

Now, there are some exceptions. But even [the most charming changelogs](https://twitter.com/jbluft/status/1291753733190230017) convey their sense of humor with no more than a few extra, very carefully placed, words.

Even if you think you can make someone laugh, it’s not easy, and that’s not the point. It’s generally much better putting effort into being clear than into selling or being funny.

(And please, no more “Bug Fixes and Improvements!”)

### 2. Highlight Changes in Images

As software engineers, we spend a lot of time in our text-based applications such as code editors and terminals, so it’s easy to overlook the importance of images.

It’s much better if we have something that draws attention to the point of the entry, which you want people to pay attention to. Images usually make reading more interesting. Don't forget, we humans are visual beings.

![An example of the WorkOS Changelog](/static/img/posts/what-makes-a-good-changelog-b.png)

Including a screenshot doesn’t clearly show what you specifically changed. You have this huge product, and you're talking about this little thing that changed. You need to show the reader what to pay attention to. When you're composing an image, it’s important that you draw attention to what exactly changed.

There are many different ways you can do this. You can annotate it with a red box or circle. The way we opted for is creating a subtract effect, where you keep everything around your image more grayish. The changed piece remains normal ([like this!](https://workos.com/changelog/better-interaction-with-x-509-certificates)), which stands out from the grey background.

### 3. Spotlight the People Behind the Product

It’s really easy for a company to just show only what they shipped. This very impersonal standpoint is understandable, if it comes from Apple or Google. But if you don’t work for these big companies, there's nothing wrong with being transparent.

It’s good to show the people who contributed to each change for two reasons:

If I’m external to the company, it’s nice to see real people who I can connect with and talk to. If I see their avatars at the changelog, I can recognize them on Twitter or another social media site. This helps build trust and familiarity.

![An example of the Vercel Changelog](/static/img/posts/what-makes-a-good-changelog-c.png)

Also, publicly acknowledging the contributors provides an even greater sense of ownership to the engineers on the team. They have their names and avatars as creators of the feature. There’s nuance to this, though: I’ve noticed that this really motivates some people, but it has no effect on others.

### 4. Formatting Versions and Dates

By definition, a changelog is an ordered list with the most recent entries at the top of the page. An extremely important detail here is the date.

Since we’re based inside North America, we could have easily implemented a date format that represents our convention. However, it's really important that we think from a global perspective when including the date. For us, this meant actually describing the month instead of just using numbers. So for example, instead of 11.08.2021, we write August 11, 2021. (Otherwise, the reader could think we meant November 8, 2021.)

![An example of the Raycast Changelog](/static/img/posts/what-makes-a-good-changelog-d.png)

Each of our entries is linkable. Remember, a changelog is a communication tool. Readers should be able to link to any change.

It’s also important to note the versions. If you're building a library, framework, or SDK the version is way more important than the date. For those cases, you should always rely on [semantic versioning](https://semver.org/).

### 5. Changelogs Need Engineering Time

Usually, a startup would want to avoid putting as much responsibility on the engineers as possible. But, it’s really important to have engineers write the entries for the changelog.

A changelog is an extension of your product, and influences [the product’s usability](https://twitter.com/zenorocha/status/1418571935412199428) the same way docs, SDKs, and demos would. It needs to feel like it was made for your product. If it’s driven by the engineers who built the product, then naturally that process becomes easier.

![The Developer Experience Hierarchy of Needs](/static/img/posts/what-makes-a-good-changelog-e.png)

Even if you don’t think your changelog will have many external readers in the near future, it can still be useful for your colleagues in the support team or the marketing team. It can serve as a communication tool from your engineering team to the other departments inside that company.

### A World with Better Changelogs

If you ever want to learn about what to expect from WorkOS, visit our changelog. It’s where we’ll explain how and why our software changes. If you want more changelog inspiration, [I’ve tweeted about the topic before](https://twitter.com/zenorocha/status/1404500294235410433). Happy logging!

*If you liked this post, you can [read the WorkOS changelog here](https://workos.com/changelog?utm_source=blog&utm_medium=blog+post&utm_campaign=changelog+post). If you also want to spend your time working on creating great developer experiences, [we are hiring](https://jobs.lever.co/workos). If you ever want to talk about developer experience (or changelogs), please [tweet or DM me](https://twitter.com/zenorocha/)!*

_Originally published in the [WorkOS Blog](https://workos.com/blog/what-makes-a-good-changelog)_