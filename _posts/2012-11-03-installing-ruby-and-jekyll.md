---
layout: post
date: 2012-11-03 11:00:00
title: Installing Ruby &amp; Jekyll on Mac OS X
---

Because of my ignorance for Terminal, I struggled to install Ruby and [Jekyll][3], so I've written some notes on that process. When I have to do it from scratch again, I'll attempt to make them clearer.

I installed so much shit trying to get Jekyll installed, that I don't really know what I did. But there was a couple of gotchas. So if I need to do it again, the rough process was what I've listed below. Along the way, [this][2] seemed to be the most straightforward guide I read.

## Install Ruby and Dependencies ##

* Download and install **Xcode** from the Mac App Store. Xcode apparently *used* to come with **Command Line Tools**, but now you have to install them as an extra. Within Xcode, go to *Preferences > Downloads*, and install them. I installed Xcode figuring it came with these---I'm guessing I would have had Ruby installed earlier if I knew about this.
* Install **Homebrew**, a package manager. `ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"` It lets you install stuff easily.
* Install **RVM: Ruby Version Manager**. This lets you switch versions of Ruby without affecting the system version. `curl -L https://get.rvm.io | bash -s stable --ruby`.

## Install and Run Jekyll ##

* The Jekyll Wiki is the best source of instructions for installation, but also templating and usage etc. Starting with [Installation][4] and moving on to [Usage][5].
* Use `gem install jekyll` to install Jekyll. If you've got Ruby installed properly this should work.
* Once installed, you can run `jekyll --server` on a folder that is setup with Jekyll template files. If your `_config.yml` file doesn't have server set to auto, you can additionally add it to this command: `jekyll --server --auto`.
* Hit up <http://localhost:4000> and you should have a working site.

## Command Line Alias ##

`jekyll --server --auto` is a long command to type each time. To make this shorter, open the file `.bash_profile` in your home directory and add an alias. Adding the line `alias jsa='jekyll --server --auto';` means each time you want to run Jekyll you can simply type `jsa`.


[2]: https://gist.github.com/1587643 "Gist explaining installing Ruby on OS X Lion"
[3]: https://github.com/mojombo/jekyll "Jekyll on GitHub"
[4]: https://github.com/mojombo/jekyll/wiki/Install "Jekyll Installation"
[5]: https://github.com/mojombo/jekyll/wiki/Usage "Jekyll Usage"