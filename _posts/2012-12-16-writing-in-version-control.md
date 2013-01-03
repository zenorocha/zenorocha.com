---
layout: post
date: 2012-12-16 23:16:44
title: Writing in Version Control
---

Git and I have only recently become friends; I had no idea what I was missing. If you're new to Git, it's a free and open source Distributed Version Control System (DVCS). When a file---or project---is version controlled with Git, every change is reversible and its entire history is saved. You can get up to speed [here][3].

When I used Tumblr, my local- and live-copy of each post quickly got out of sync, because I'd make some edits directly into the Tumblr editor. Now that I'm using [Jekyll][5], all my blog posts are saved as plain text [Markdown][4] files in Dropbox. This means I always have access to them. But more than that, it means I always have access to the master copy. And because the entire site is version controlled with Git, I know exactly what I've changed, down to the line.

<p data-pullquote="Sure they&#8217;ve used Word&#8217;s Track Changes, but do they know how much better it could be?"></p>

Which got me thinking. Developers have been using version control forever, but have writers? Do many of them even know version control exists? Sure they've used Word's Track Changes, but do they know how much better it could be?

Tools like GitHub's [Mac][1] and [PC][2] Git GUI apps, mean you no longer have to touch a command line; changes are visual and easy to understand. Maybe it's my resistance to MS Office, but a Git GUI seems far easier to understand and follow than Track Changes.

Imagine an author and editor collaborating on a book. As the author writes, they're committing each substantial addition or change. They then have a complete history of every meaningful change they've made through the entire process of writing a book; mind-blowing on its own. Plus, each time these changes are pushed to GitHub[^1], they're backed up, safely stored in an off-site location.

The editor could feasibly comment on each commit if they really wanted to. However, it seems like the *really* powerful part is when they start editing. The editor makes all their edits and the author can merge them one by one, understanding what changed, and rejecting changes they disagree with.

This is obviously an over-simplified example, but think about the possibilities. The benefits of version control are applicable to everything from blog posts to multi-author books.

Want to try it out? Download [GitHub for Mac][1] (or [Windows][2]), save a text file with some content in a folder, then drag that folder to the app. It'll ask you if you want to make it a local Git repository, let it. You can then write your first *Commit summary* (a note on what you've changed---or in this case added), unselect the sync toggle button (because you're not syncing with a remote yet), then hit the *Commit* button. Every time you make a change, write a short commit message outlining those changes and hit the commit button again. The entire history is kept in hidden files within that folder. It's that simple.

[^1]: GitHub is a remote server for Git repositories. You can use Git locally without ever pushing it to a remote server; however, the real power is evident when you collaborate on a project with others, and to do that you need a remote server. If you're looking to test the waters with a private repository, [BitBucket][6] is an alternative to GitHub that lets you have up to five collaborators on a private repository for free.

[1]: http://mac.github.com/ "GitHub for Mac"
[2]: http://windows.github.com/ "GitHub for Windows"
[3]: http://git-scm.com/ "Git"
[4]: http://daringfireball.net/projects/markdown/
[5]: https://github.com/mojombo/jekyll
[6]: https://bitbucket.org/