---
layout: post
date: 2012-11-18 09:24:32
title: SearchLink&#58; Automated Markdown Linking
link: http://brettterpstra.com/searchlink-automated-markdown-linking-improved/
---

[Brett Terpstra][] seems to spend countless hours writing scripts that make menial and repetitive tasks quick and painless; SearchLink does just that. Brett:

> SearchLink is a System Service for OS X that handles searching multiple sources and automatically generating Markdown links for text. It allows you to just write, marking things to link as you go. When you're done, you run it on the document and --- if your queries were good --- have your links generated automatically without ever opening a browser.

It essentially means you can type `[Brett Terpstra](!g)` and---when run---it will grab the first Google result for the search term 'Brett Terpstra'.

There are plenty of other arguments: `(!wiki)` searches Wikipedia, `(!def)` fetches a dictionary definition, `(!yoursite.com)` does a site search. It can even grab links to the Mac App Store and iTunes.

If your link text isn't descriptive enough to return a good result, you can be more specific with search text after the argument. I.e. `check [this](!g "SearchLink Brett Terpstra") out`.

It requires the JSON Ruby Gem to be installed to the system version of Ruby. I'm using [Ruby Version Manager][RVM] so `sudo gem install json` didn't work straight away. [Josh Dick] in the comments pointed out how to make it work with RVM:

Open the `SearchLink.workflow` file and change 'Shell' to `/bin/zsh`. Take the contents of the script and save it as `SearchLink.rb` somewhere, then replace the contents of the script in Automator with:

	[[ -s $HOME/.rvm/scripts/rvm ]] && source $HOME/.rvm/scripts/rvm
	ruby ~/path/to/SearchLink.rb

Remember to change the path to wherever you saved `SearchLink.rb`.

[Brett Terpstra]: http://brettterpstra.com/
[Josh Dick]: http://joshdick.net/
[RVM]: https://rvm.io/ "RVM"