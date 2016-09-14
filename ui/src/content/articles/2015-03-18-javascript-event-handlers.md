---
title: JavaScript Event Handlers
---

Have you ever wondered what's the difference between this:

```
elem.onclick = function(e) {}
```

…and this:

```
elem.addEventListener('click', function(e) {});
```

They do the same thing, right? First listen for a click event, then execute a callback function. In fact, they're slightly different.

# Inline Events

When JavaScript arrived in the web, people used to attach events right into the markup.

```
<a onclick="alert('Yay');">Link</a>
```

That line got the job done, but soon developers realized that this wasn't a good idea. They started advocating for a better separation of concerns. JavaScript should be moved to a `<script>` tag or `.js` file. This is generally what’s referred to as unobtrusive JavaScript.

```
elem.onclick = function(e) {
  alert('Yay');
}
```

When moving inline event handlers to a JavaScript file, they gained more control over the scope. They could now use anonymous functions, function references, or closures.

People got used to this syntax, many still use it nowadays, however there are some problems with that:

1. You may only have one inline event assigned.
2. Inline events are stored as a property of the DOM element and, like all object properties, it can be overwritten.
3. This event will continue to fire even if you delete the onclick property.

How do you solve that?

# Event Listeners

Back in 2000, the [DOM Level 2 Events Spec](http://www.w3.org/TR/DOM-Level-2-Events/events.html) was released, offering a more granular way to control events.

```
elem.addEventListener('click', function(e) {
  alert('Yay');
});
```

In addition to multiple event listeners, you can also set a third optional parameter to control [event bubbling](http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing/#answer-4616720). If you want to remove any applied event just call *removeEventListener*.

Unfortunately, Microsoft did notimplement the DOM Level 2 event model until IE9. Instead they had its own proprietary method.

```
elem.attachEvent('onclick', function(e) {
  alert('Yay');
});
```

# Which is the best?

This question is a matter of browser support and necessity.

jQuery and other javascript frameworks encapsulate the different browser implementations so you don't need to write cross-browser compliant code.

No need to support IE8? Then, just go with *addEventListener*.