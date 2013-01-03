---
layout: post
date: 2011-12-03 12:00:00
title: The Nebulous Notes Utility Bar and Markdown
---

I heard [Merlin][] mention [Nebulous Notes][] on [Back to Work][] this week.

I'm a massive [Markdown][] nerd and a reasonably prolific note taker so I'm always looking for the next, great iOS text editor. I'd seen Nebulous in the App Store before, but honestly I'd been a bit put off by the icon and screenshots. It didn't seem to have the polish of [Elements][] or the simplicity of [Simplenote][].

I dug a bit deeper and found that this assumption was largely unfounded. Plus it has one absolutely killer feature---the Utility Bar. This is essentially and extra row of keys above the standard keyboard. [iA Writer][ia] was the first app that I saw implement this. Their version is nice, but it's limited to the set of keys *they* decided would be useful. As lovely as Writer is, it forces you into their way of writing. It really is made for *writing*, not note taking, or outlining, or anything else you might use a text editor for.

What Nebulous Notes lets you do is customise this Utility Bar with your own *macros*. This is great for [Markdown][]. When I take notes they're usually bulleted lists with indented bullets for sub points. For example:

	* This is my first point
		- This is a sub point
		- This is another sub point
	* This is my second point
	* This is my third point

Typing this on an iPad or iPhone is a pain in the arse. You need to change the keyboard to get to the hyphen and you need to change it twice to get to the asterisk.

In Nebulous I can setup a macro key that adds an asterisk with a space after it — ready to type a point. I also setup another that adds a tab, then a hyphen, then a space — ready to type an indented bullet.

I did the same for ordered lists. Tap a button and 1. with a space after is inserted. Tap another button and 2. with a tab before and a space after is inserted. As Markdown automatically re-numbers ordered list items. It doesn't matter if all items in your list start with 1. and all sub items start with 2.

Similarly for heading levels I setup buttons for h2 and h3 that insert two or three hash's respectively, with a space afterwards.

The macro's can also reference things. `$sel` will use the currently selected text and `$paste` will use the contents of the clipboard. This means selecting a word and hitting the button programmed with `*$sel*` will wrap it in asterisks (which outputs as *emphasis/italics* in Markdown). If you tap the button again it simply adds an extra set of asterisks for **strong/bold**.

This makes Markdown links really interesting. `[$sel]($paste)` would turn the selected text into an inline link using the URL in the clipboard. `[$sel](http://$cursor)` would take the selected text but insert `http://` with your cursor ready to type.

I prefer reference links so I use `[$sel][$cursor]` and `[$paste]: $cursor`. The first of these takes the selected text and wraps it in square brackets with an empty set of square brackets next to it, ready to have a reference name typed into them. I'd then copy the reference name to the clipboard and run the second one at the bottom of the document — so I'd have a list of links I need to find when I'm finished writing.

It's pretty killer.

## Download mine ##

You can export your custom macro's as a text file. If you want you can [download mine][dl]. Just (unzip it then) dump it in the root of your Dropbox folder. At the bottom of the list of Macro's in the app, theres an import button.

## A few notes about the rest of the app ##

* When you're using a bluetooth keyboard, the Utility Bar stays on screen, even though the software keyboard disappears.
* Due to the nerdy nature of this customisation, I also expected support for custom CSS for the Markdown preview. This means [Notsey][] is still hanging around for the one single task of previewing in a nicer, custom style.
* You can pinch to zoom to change the font size.
* There is a decent selection of built in typefaces, both monospaced and variable width. And you can set the background and text to be *any* colour you like.
* Sync works a bit differently to other apps in this category. I think this is a good thing, but I'm not sure yet.
* It's worth noting that I've customised the Utility Bar for Markdown. But you could can customise it however you want. You could any other strings you use regularly like `'s` or even regularly used single characters that are on the next keyboard like `&`, `:` or `?`.
* It's universal. So you get iPhone and iPad for the same price.

[Nebulous Notes]: http://itunes.apple.com/au/app/nebulous-notes-for-dropbox/id375006422?mt=8 "App Store - Nebulous Notes (for Dropbox)"

[Back to Work]: http://5by5.tv/b2w "5by5 | Back to Work"

[dl]: http://cl.ly/CJ1b "Download"

[Markdown]: http://daringfireball.net/projects/markdown/ "Daring Fireball: Markdown"

[ia]: http://itunes.apple.com/au/app/ia-writer/id392502056?mt=8 "iA Writer for iPad on the iTunes App Store"

[Simplenote]: http://itunes.apple.com/au/app/simplenote/id289429962?mt=8 "App Store - Simplenote"

[Elements]: http://itunes.apple.com/au/app/elements-dropbox-and-markdown/id382752422?mt=8 "App Store - Elements - Dropbox And Markdown Powered Text Editor"

[Merlin]: http://www.kungfugrippe.com/ "kung fu grippe"

[Notsey]: http://itunes.apple.com/au/app/notesy-for-dropbox/id386095500?mt=8 "App Store - Notesy for Dropbox"