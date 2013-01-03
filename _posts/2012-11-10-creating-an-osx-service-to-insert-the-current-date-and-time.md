---
layout: post
date: 2012-11-10 11:06:53
title: Creating an OS X Service to Insert the Current Date and Time
---

To create a new [Jekyll] post, you need to create a text file with meta data---called YAML Front Matter---at the top. At its simplest, it looks something like this:

	---
	layout: post
	date: 2012-11-10 11:06:47
	title: Title of Post
	---

The largest barrier to creating a new post is inserting the exact date and time. My brain thinks of dates as DD/MM/YYYY, and of time in 12hr format; I wanted to automate it.

Below is a very simple AppleScript that inserts the date and time in the format that Jekyll requires.

	do shell script "date +%Y-%m-%d\\ %H:%M:%S"

To make inserting it simple, it's possible to assign a keyboard shortcut, by turning it into a Service in Automator.

1. Open Automator.app
2. Create a new Service
3. Set it to receive selected **text** in **any application**
4. Check the 'Output replaces selected text' tick-box
5. Insert the 'Run AppleScript' action
6. Copy and paste the above AppleScript
7. Press run to make sure it works
8. Save the `.workflow` file to `~/Library/Services`
9. Open the `Keyboard > Keyboard Shortcuts` system preference pane, select Services in the left column, then find the Service you just created.
10. Assign a keyboard shortcut. I use `Command` + `Option` + `d`

There is one pitfall: it only works on selected text.

When saving a post for Jekyll, the file-name also requires a date---but not a time. For this, you can follow the same process as above with a modified AppleScript:

	do shell script "date +%Y-%m-%d"

For this, I use the keyboard shortcut `Command` + `Option` + `Shift` + `d`.

I would love it if the Service created the entire file name. So if the post title 'This is a Post Title' was on the clipboard, it would create a file called `2012-11-10-this-is-a-post-title.md`; replacing spaces with hyphens and converting it to lowercase. However, that's well beyond my very limited AppleScript knowledge.

If you can't be bothered following steps one thru seven; [download mine].

[download mine]: http://cl.ly/KmH3
[Jekyll]: https://github.com/mojombo/jekyll