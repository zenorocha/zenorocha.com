---
title: Lessons learned from growing a 6,338 people waitlist in 7 weeks
description: "I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users."
image: /static/img/posts/lessons-learned-from-growing-a-6338-people-waitlist-in-7-weeks.jpg
date: "2023-02-21"
---

The first question I get from YC batch mates is: *["How did you get your domain?"](/why-i-spent-25000-dollars-on-a-domain-or-how-to-pick-a-startup-name)*.

The second question is: *"How did you grow your waitlist?"*.

I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.

![Waitlist growth](/static/img/posts/lessons-learned-from-growing-a-6338-people-waitlist-in-7-weeks-1.jpg)

## What went well

**1. Landing page**

We knew that we were entering a space with many consolidated competitors, so it was crucial to show people that we were different. We did that by creating a landing page that was extremely simple but also had unique branding and smooth interactions.

![Resend.com](/static/img/posts/lessons-learned-from-growing-a-6338-people-waitlist-in-7-weeks-2.jpg)

Here's what worked for us:

* **Tip #1 - Show personality** - Adding an animated WebGL object was super important for me. Some people might say it's a distraction, but without saying a word, it communicates that we care about the technical details. Also, the Rubik's cube is the perfect analogy to what we were doing. It's an old thing that people are familiar with, but it's displayed in a new way. The same goes for Resend. We're doing something that people are familiar with (sending emails), but we're doing it in a modern way (using React).
* **Tip #2 - Know your audience** - As a developer, I absolutely love keyboard shortcuts. I couldn't live without them, and I'm sure many other developers feel the same way. Even though a landing page is not a place to add keyboard shortcuts, it was a great way to show that we care about the same things our audience cares about.
* **Tip #3 - Focus on the details** - Most landing pages we visit nowadays follow the same pattern. They use a predefined template that looks like every other landing page. As you start navigating, you might find typos or broken links. I truly believe that the small details make a big difference. If you don't communicate that you care about your own website, then why should someone else care?

**2. Social media posts**

Back in 2009, I created an account on this new social media website called Twitter. There were a few months when I was posting every day, and there were a few months when I wasn't posting at all. I didn't have a strategy, I was just sharing whatever I was working on. After years of doing that, I built a following of 39.4k people. This came in handy when we were launching Resend.

On January 4th, 2023 at 7:11 am PT, I published the [first tweet about Resend](https://twitter.com/zenorocha/status/1610655123063336961). This tweet had 999.3k views, 4,634 likes, 352 retweets, and 282 replies. I'm not a big LinkedIn user, but I did [post the same content there](https://www.linkedin.com/posts/zenorocha_personal-update-im-leaving-my-job-to-start-activity-7016420524977209344-qrUI), and it got 107,411 views, 1,378 likes, and 156 comments.

![Tweet about Resend](/static/img/posts/lessons-learned-from-growing-a-6338-people-waitlist-in-7-weeks-3.jpg)

Here's some tactical advice I learned from this experience:

* **Tip #4 - Post a video** - from all the possible content formats, video is the one that performs best nowadays. If you can't do video, then use an image. Plain text and links perform worst in my experience.
* **Tip #5 - Post early in the day** - when doing a big launch, be aware of the best time to post. I chose 7 am PT because that's when people from California wake up and check their phones, it's still early on the East Coast, and people from Europe have not ended their work day yet.
* **Tip #6 - Post during the week** - I also chose a weekday because people are more likely to be at work and have time to check their social media. In my opinion, Monday isn't a good day to launch because people are getting ready for the week. Friday is also not a good day because people are already thinking about the weekend. That's why we posted on Wednesday.

If you're not into social media, that's totally fine. There are many founders who don't engage on social platforms and still build incredible companies. However, if you're thinking about starting a profile, keep this in mind - the best time to start posting was yesterday, the second best time is today.

**3. Build in public**

After the initial launch, it's important that you keep bringing new people to the waitlist. We did that by sharing our progress publicly.

* **Tip #7 - Keep the momentum** - in order to keep people from the waitlist engaged, we started sending them emails about [company news](https://twitter.com/zenorocha/status/1620809395310583808) and [product updates](https://twitter.com/zenorocha/status/1618633776212631554). This was a great way to keep people interested in what we were doing.
* **Tip #8 - Be personal** - one of the things that I learned with YC is that being vulnerable is not a demonstration of weakness. Being vulnerable shows that you're a human being too. People act like they know everything. In reality, we're all just trying to figure it out. So don't be afraid of [showing the behind-the-scenes](https://twitter.com/zenorocha/status/1612263110370549760).
* **Tip #9 - Build with others** - as you start to share your journey, you'll start to get more people interested in what you're doing. Some of them might want to help you. In our case, that meant other companies building [integrations with our product](https://twitter.com/zenorocha/status/1621204586500591619). We also tried to respond to every single person who engaged with our content.

![Email about Resend](/static/img/posts/lessons-learned-from-growing-a-6338-people-waitlist-in-7-weeks-4.jpg)

## What went wrong

**1. Performance testing**

On the day we launched, we got several complaints about performance issues ([1](https://twitter.com/matloyed/status/1610715639576170496), [2](https://twitter.com/BarzolaGabriel/status/1610677004231131141), [3](https://twitter.com/steren/status/1610757385429319680), [4](https://twitter.com/bernatfortet/status/1611030644301365250), [5](https://twitter.com/jonatasvsalles/status/1610664703516090371)). We knew that people were going to sign up on mobile, but we didn't spend too much time testing the performance on real phones.

!["Slowest landing page I have seen in 2023" Tweet](/static/img/posts/lessons-learned-from-growing-a-6338-people-waitlist-in-7-weeks-5.jpg)

Dealing with performance issues in the middle of a launch is not fun. Small bugs can be dealt right away, but performance improvements typically require deep thinking and a lot of debugging. We ended up fixing all of them, but I wished we had done that before the launch.

**2. Email address validation**

When setting up the waitlist form, we wanted to have something that was easy to use and low friction. There was only a simple input field, and we didn't want to ask people to confirm their email address. Even though we had some back-end validation, people could still add fake email addresses.

![Resend Request Access screen](/static/img/posts/lessons-learned-from-growing-a-6338-people-waitlist-in-7-weeks-6.jpg)

In order to address this, we integrated an email validation service called [Emailable](https://emailable.com) to guarantee that the email addresses were real. If we had better validation from day one, we would have saved a lot of time.

**3. Processing the waitlist**

In the beginning, we didn't have a proper plan to process the waitlist. We found ourselves with a big list of email address and no idea how to prioritize them. What worked for us was building a quick Typeform to understand who were the best people to onboard first.

We initially required every prospect to go through a mandatory onboarding call first (Superhuman style), but we quickly realized that wouldn't scale with our current team size, so we changed it to automatically onboard certain user segments.

![Resend Typeform](/static/img/posts/lessons-learned-from-growing-a-6338-people-waitlist-in-7-weeks-7.jpg)

It's important that you qualify your leads before reaching out to them. If you don't, you'll end up wasting a lot of time with the wrong customer profile.

## Conclusion

A waitlist is a great way to build a community around your product. It's also a great way to get feedback from people who are interested in what you're building.

You will never be 100% ready to launch, and that's okay. There will always be something that you can improve or fix. The best thing you can do is to launch and iterate.

If you're not launching, you're not learning.