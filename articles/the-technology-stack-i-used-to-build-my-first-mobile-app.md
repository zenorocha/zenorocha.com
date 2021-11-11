---
title: The technology stack I used to build my first mobile app
description: "In January 2nd, I decided to build my first mobile app just for fun. Three weeks later, the MVP was done and available to users in the App Store and Play Store. It's been 6 months since I started that journey and today I decided to share the technology stack that helped me get here."
image: /static/images/tech-stack-lecheese.jpg
date: "2019-07-01"
---

In January 2nd, I decided to build my first mobile app just for fun. Three weeks later, the MVP was done and available to users in the [App Store](https://itunes.apple.com/us/app/le-cheese/id1449930676) and [Play Store](https://play.google.com/store/apps/details?id=com.lecheese.app).

It's been 6 months since I started that journey and today I decided to share the technology stack that helped me get here.

## Development Platform

![](/static/img/posts/app-tooling-dev.png)

There are lots of options to choose in this area. [Ionic](https://ionicframework.com/) seems great, [Flutter](https://flutter.dev/) seems promising, but I decided to use [React Native](https://facebook.github.io/react-native/) for many reasons.

First of all, because it's JavaScript and you should [always bet on JS](http://brendaneich.github.io/ModernWeb.tw-2015/#74). Instead of learning [Swift](https://developer.apple.com/swift/) and [Kotlin](https://kotlinlang.org/), I can write one code base and compile to native iOS and Android platforms. It uses the same design as [React](https://reactjs.org/), so it's easy to build components and manage state.

By using [Expo](https://expo.io/), the process of building and publishing to the stores is pretty straightforward. And finally, there's a huge community behind it, which makes it easy to find answers and reuse packages.

## Database

![](/static/img/posts/app-tooling-database.png)

Since this is a project that I'm working solo, I need the ability to evolve fast without spending too much time setting up and maintaining complex software. That's why I went with [Firebase](https://firebase.google.com/).

There are two database options within Firebase, you can either use the [Realtime Database](https://firebase.google.com/docs/database) or [Firestore](https://firebase.google.com/docs/firestore). I chose Firestore since it's the evolution of thei Realtime Database. You can [read more about the difference between them](https://firebase.google.com/docs/firestore/rtdb-vs-firestore).

## Authentication

![](/static/img/posts/app-tooling-auth.png)

There are many great services that help with user authentication such as [Auth0](https://auth0.com/), [Okta](https://www.okta.com/), etc. However, I wanted something that could also be integrated with database access rules. That's why I went with [Firebase Authentication](https://firebase.google.com/docs/auth).

## Storage

![](/static/img/posts/app-tooling-storage.png)

One important piece of the app is the ability to upload pictures from your phone. The natural solution was to use [Firebase Storage](https://firebase.google.com/docs/storage) which was pretty cheap and easy to set up.

## Search

![](/static/img/posts/app-tooling-search.png)

Unfortunately, Firebase doesn't solve all my problems. Full-text search is one of those things that are not covered in their platform.

In order to have this functionality, I decided to use a service called [Algolia](https://www.algolia.com/) which is focused on search. Every new entry to Firestore triggers a [Cloud Function that updates the Algolia search index](https://firebase.google.com/docs/firestore/solutions/search) and maintains the data in sync.

## Machine Learning

![](/static/img/posts/app-tooling-ml.png)

Speaking of [Cloud Functions](https://firebase.google.com/docs/functions), there are some ML capabilities behind the scenes which are all triggered after an action is made in the app. For example:

Whenever a photo is uploaded, I use [AutoML Vision](https://cloud.google.com/vision/) to detect text from the image and verify explicit content.

Whenever a review is made, I use [AutoML Natural Language](https://cloud.google.com/natural-language/) to classify entities, get the sentiment, and extract other useful metadata.

Whenever a new cheese is added, I use [Text-to-Speech](https://cloud.google.com/text-to-speech/) to provide the pronunciation based on its country language.

## Other Applications

![](/static/img/posts/app-tooling-other.png)

I love web development, but since my focus is to find product-market fit for the mobile app, I have very limited time to spend on this area.

To increase my productivity I decided to use [React](https://reactjs.org/) and [Next.js](https://nextjs.org/) to build the API, website, and an admin application to help me review user content.

## Web Hosting

![](/static/img/posts/app-tooling-host.png)

Since I'm using Next.js the obvious choice was to host with [Zeit's Now](https://zeit.co/now). I used that for some time, but after having trouble to migrate from v1 to v2, I decided to move to [App Engine](https://cloud.google.com/appengine/).

Now my billing is centralized in one place which makes things easier too.

## Conclusion

As you can see, I'm using a lot of tools to make the process of building this app easier and more fun.

One important thing to say is that there's no right or wrong. When it comes to tooling, you have to choose what makes sense to you and your team.

I hope this article can help you choose your own stack for your own apps :)
