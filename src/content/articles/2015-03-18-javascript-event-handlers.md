---
title: "JavaScript Event Handlers"
description: "A brief comparison between inline events and event listeners."
language: "en"
link: "https://medium.com/@zenorocha/javascript-event-handlers-280ed3cc5631"
nomore: true
---

Have you ever wondered what's the difference between this:

<pre class="prettyprint lang-html">elem.onclick = function(e) {}</pre>

…and this:

<pre class="prettyprint lang-js">elem.addEventListener('click', function(e) {});</pre>

They do the same thing, right? First listen for a click event, then execute a callback function. In fact, they're slightly different.

**[Continue reading…](https://medium.com/@zenorocha/javascript-event-handlers-280ed3cc5631)**