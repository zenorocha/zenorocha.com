---
title: The different between Static Site, Client Side and Server Side Rendering
description: A common problem when you start studying front-end development is understanding the difference between a Static Site, a Client Side, and a Server Side Rendering. In addition to the definition itself, the question is always about when to use one instead of the other.
image: https://miro.medium.com/max/1400/0*lwmYDgbDyrc2xoYl
date: "2022-05-05"
---

A common problem when you start studying front-end development is understanding the difference between Static Site, Client Side and Server Side Rendering. In addition to the definition itself, the question is always about when to use one instead of the other.

The idea here is to explain a little of each one, besides trying to explain the strengths and weaknesses of each of them.

## Static Site (HTML / CSS / JS)

It's a simple pure HTML + CSS + JS, and can be written by yourself or using some static generator like <a href="https://www.gatsbyjs.com/" target="_blank">GatsbyJS</a>.

<div class="iframe-wrap">
  <iframe src="https://www.youtube.com/embed/1zhT23VDVDc">
  </iframe>
</div>

### Pros

- Almost null use of the server, since everything has already been rendered and the only function now is to serve the data, resulting in less cost to the client.
- It can be served in a CDN (better cache), further reducing the work of the server, since after storing the files in CDN, it will be responsible for serving them to the client.
- Better performance among the others, since it does not involve any complex process, only download the files.
- Flexibility to use on any server. As we are talking about pure HTML, CSS and JavaScript, we do not need to worry if the server and Node, or Ruby, or Java, or Python running. Any simple server will be able to serve the application.

### Cons

- Build time can be very high, as it's necessary to generate all pages of the app during the build process.
- Difficulty scaling large applications because of the amount of files that need to be generated.
- Difficulty generating constant updates, since every update need a new build.

## Client Side (Single Page Application - SPA)

Instead of serving the HTML, CSS and JS files separately, the Client Side Rendering will generate a JavaScript file that will be downloaded by the user's browser and the communication with the APIs and the rendering will finally be done. Every step, from the JavaScript bundle download to the rendering of the page, will be done on the client's side.

A perfect example is the <a href="https://create-react-app.dev/" target="_blank">Create React APP</a> (CRA).

<div class="iframe-wrap">
  <iframe src="https://www.youtube.com/embed/4-Lel1oaV7M">
  </iframe>
</div>

### Pros

- Allow pages rich in interactions without reloading.
- Quick site after initial load, since after downloading the JavaScript bundle on the first access, the browser will already have all the necessary information to run, making only API calls when needed.
- Great for web applications

### Cons

- Initial loading can be very slow, depending on the size of the project.
- Unpredictable performance. If you need to render too many things on the user's screen, performance may drop.
- Difficulties in SEO. Since, in the SPA, you need to access the side to download the JavaScript bundle and render the information on the screen, the Google's crawler may doesn't wait until the whole proccess is over and can cause SEO penalties.
- Because of the above point, most part of the content is not indexed.

## Server Side (SSR)

Unlike the others, in Server Side Rendering all content is rendered on the server side, and the client browser already receives the entire page ready. Among other tools, one of the most famous is <a href="https://nextjs.org/" target="_blank">Next.js</a>.

<div class="iframe-wrap">
  <iframe src="https://www.youtube.com/embed/0bvo6UKkNDA">
  </iframe>
</div>

### Pros

- Great in SEO. Since all the content is rendered on the server side, the page is ready when the Google's crawler access it.
- Meta tags with more appropriate previews.
- Better performance for the user (content will be viewed faster).
- Code shared with backend in Node.
- Less processing on the user side.

### Cons

- Time To First Byte (TTFB) larger. The server will prepare all the content before sending to the browser.
- Larger HTML, since all the content will be sent at once.
- Full reload on route changes.

## How to choose which one to use, then?

Ideally, you should use the <b>Static Site Generation</b> when:

- It's a simple site without much user interaction.
- There's no frequent content update.
- The site is simple, without many pages.
- When performance is extremely important.

e.g.: Landing pages, blogs, portfolios.

The <b>Client Side Rendering</b> should be used when:

- Don't need to indexed at Google.
- The user makes many interactions on the page and do not want to refresh.
- The information will be different for each user.

e.g.: Web applications, like Twitter Web, Facebook Web, Spotify Web.

Finally, the <b>Server Side Rendering</b> should be used when:

- You need a SPA, but with faster loading.
- You need a good indexing on Google.
- The content changes frequently.

e.g.: Ecommerce, newspaper site.