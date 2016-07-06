---
title: "Why we created WebComponents.org?"
---

It all started 7 months ago in October, 2013 with a new organization on GitHub called `WebComponentsOrg`. Googlers from the Polymer/Chrome team, along with some great folks from Mozilla's X-Tag/Brick, as well as other Web Components community members (like me) had been cooking up a vision for a simple, neutral site/community devoted to encouraging good best practices for Web Components.

<!-- more -->

As time passed by, more and more people started to get really excited about it and [Eric Bidelman](https://twitter.com/ebidel) was doing a great job highlighting all these [community content around Web Components in a Gist](https://gist.github.com/ebidel/6314025).

However, we believed that for Web Components to truly succeed, it was important that web developers strive to make their components interoperable among frameworks and easily discoverable. Polymer was doing well in the role of pioneering and evangelizing those best practices, but it was becoming clear that formalizing them in a more neutral place will be strategically important.

## Getting our hands dirty

We were a bunch of developers with limited resources, so we started to develop ourselfs. First, [Addy Osmani](https://twitter.com/addyosmani) put together something simple based on the setup over on [yeoman.io](http://yeoman.io/) using [Jekyll](http://jekyllrb.com/) and [Redcarpet](https://github.com/vmg/redcarpet). The idea was a compiled wiki that anyone could come in and edit but members of the site team needed to approve the changes in order for them to go live.

![Pre-alpha Version](/img/posts/wcorg-prealpha.jpg)

That helped us to shape what we wanted to cover under that new initiative. But we clearly needed to put more effort into it, specially in the user interface part. In November 2013, I created a mockup and proposed a new [UI based in cards](http://insideintercom.io/why-cards-are-the-future-of-the-web/). Then I went to the Mountain View and presented it to some Chrome team members.

![Proposed Mockup](/img/posts/wcorg-mockup.jpg)

Everybody liked it but we still needed someone to design it in Photoshop or something like that. Again, resources were limited, we just couldn't alocate a design team from Google or hire a design agency to do this. But hey, this is the open source world that we're living it. So I talked to [Briza Bueno](https://twitter.com/brizabueno), an incredible person with high skills in design who happens to be my sister. She agreed to help us and we started to play for real now.

## New logo, new home, new everything

Briza did some really cool stuff, from redesigning the main logo to creating several W3C's Spec icons. Which can be all found in the [Web Components icons repository](https://github.com/webcomponents/webcomponents-icons) by the way.

![New logo](/img/posts/wcorg-logo.jpg)

In the meanwhile, I started to develop it. At that point, it was clear for us that we were going to use a static generator to build it, however Jekyll was not helping at all, so I decided to move to [DocPad](http://docpad.org/). One of the main reason we migrated were all the limitations we found on Jekyll and also because everyone involved was primary skilled in JavaScript so why not moving to solution based in NodeJS instead of Ruby?!

At some point, tired of writing `WebComponentsOrg` all the time on GitHub, I decided to track the owner of the [WebComponents organization](https://github.com/webcomponents/). After some tweets I finally found [Daniel Buchner](https://twitter.com/csuwildcat) from Mozilla who was kind enough to add us as admins.

The [CustomElements.io](http://customelements.io/) source code and the boilerplate repo were moved under this new organization too. Later on, new boilerplates were created:

* [Polymer Boilerplate](https://github.com/webcomponents/polymer-boilerplate)
* [X-Tag Boilerplate](https://github.com/webcomponents/x-tag-boilerplate)
* [VanillaJS Boilerplate](https://github.com/webcomponents/element-boilerplate)
* [Yeoman Generator](https://github.com/webcomponents/generator-element)

Finally, some social media and discussion channels were created too:

* [@webcomponents](https://github.com/webcomponents/) on GitHub
* [@Web_Components](https://twitter.com/web_components/) on Twitter
* [+Web Components](https://plus.google.com/b/103330502635338602217/103330502635338602217/posts) on Google+
* [webcomponents](https://groups.google.com/forum/#!forum/webcomponents) on Google Groups
* `#webcomponents` on Freenode IRC

## ...And it finally landed!

After months thinking and discussing this project, I'm really glad that it's finally live to the public at [WebComponents.org](http://webcomponents.org/).

[![Website](/img/posts/wcorg.jpg)](http://webcomponents.org/)

I just got back from San Francisco after officialy launching it at [SFHTML5](http://www.meetup.com/sfhtml5/events/169452272/) and now I'm in a plane from Salvador (Brazil) to Warsaw (Poland) where three presentations wait for me in Europe. We still have lots of things to do but it's a honor to show this project to people all over the world.

[![Presenting at SFHTML5](/img/posts/wcorg-launch.jpg)](https://www.youtube.com/watch?feature=player_detailpage&v=mN7IAaRdi_k#t=8697)

Each day I believe more that to achieve great things you need great people next you. This project wouldn't exist with the help of many people that you may not see in the [commit history](https://github.com/webcomponents/webcomponents.github.io/graphs/contributors) but had a really big influence like [Addy Osmani](https://twitter.com/addyosmani), [Alex Komoroske](https://twitter.com/jkomoros), [Bernard De Luna](https://twitter.com/bernarddeluna), [Briza Bueno](https://twitter.com/brizabueno), [Ciro Nunes](https://twitter.com/cironunesdev), [Daniel Buchner](https://twitter.com/csuwildcat), [Eduardo Lundgren](https://twitter.com/eduardolundgren), [Eric Bidelman](https://twitter.com/ebidel), [Luan Muniz](https://twitter.com/lluanmuniz), [Pascal Precht](https://twitter.com/PascalPrecht), [Rob Dodson](https://twitter.com/rob_dodson), and [Sindre Sorhus](https://twitter.com/sindresorhus).

Thank you so much guys for all support you've been providing.