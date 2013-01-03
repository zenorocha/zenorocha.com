---
layout: post
draft: false #true makes it live, but hides from index and archive.
published: true
date: 2011-07-09 16:02:00
title: Simple 2D Dock Modification
link:
excerpt:
---

I've been using this dock modificaton for a couple of years[^2] now and I thought I'd share it. The default 2D dock[^3] has a horrible fat white stroke on it. I modified the images so they're all just 55% transparent black. I also made the separator a simple line instead of the zebra crossing.

It changes the bottom, left and right 2D docks.

![Docked to the bottom](https://raw.github.com/andytlr/OS-X-Simple-2D-Dock-Modification/master/example%20images/bottom.png)

![Docked to the side](https://raw.github.com/andytlr/OS-X-Simple-2D-Dock-Modification/master/example%20images/side.png)

## How to ##

1. [Download](https://github.com/andytlr/OS-X-Simple-2D-Dock-Modification) the modified .png's.
2. In Finder, navigate to: HD → System → Library → CoreServices → Dock.app[^1] → Contents → Resources
3. Backup all the .png's in the *Resources* folder that match the file names in the download.
4. Delete them out of the *Resources* folder.
5. Copy the .png's from the download into the *Resources* folder.
6. Open *Terminal* and type: <code>killall Dock</code>

[^1]: You'll need to right click and *Show Package Contents*.
[^2]: To the best of my knowledge, these same .png's work in Leopard, Snow Leopard, Lion **and Mountain Lion**. But backup the originals.
[^3]: If you currently have the 3D dock enabled you'll need to switch to 2D. Open Terminal and type this: <code>defaults write com.apple.dock no-glass -boolean YES; killall Dock</code>