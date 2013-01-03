---
layout: post
date: 2012-11-03 11:10:00
title: UNIX Command Line Usage Notes
---

This post is essentially the result of watching Dan Benjamin's PeepCode screencast, [Meet the Command Line][1] and taking bucket-loads of notes.

A few general things to remember about UNIX:

* UNIX is most often case sensitive.
* UNIX will always override a file without warning.
* Help is sometimes `help`, `-h` or `--help`
* `Command` + `K` clears the screen.
* `sudo` is a command that gives you permissions of a superuser. Allowing you to force something to happen when your user account doesn't have permissions.
* You need to wrap file and folder names with spaces in "quotes". I.e. `cd "Misc Documents"`


Commands
--------

### Change Directory ###

* `cd directoryname` changes the directory to one a level deeper
* Hitting tab whilst typing a directory name will attempt to auto-complete it
* `cd ..` takes you up a level.
* `cd ../..` will take you back two levels.
* `cd ../directoryname` will take you back a level and into a folder called directory name.
* `~` represents your home directory. Typing `cd ~` anywhere will take you 'home' (simply typing `cd` alone will also take you home). Typing `cd /directoryname` will take you to a folder within your home directory. I.e. `cd ~/dropbox/notes`
* `cd /` takes you to the root of the drive.

### Directory Listing ###

* `ls` lists everything in the current directory.
* `ls -l` gives you a 'long list'; providing more detail.
* adding `-a` shows hidden files.
* `-h` is an abbreviation for 'human readable'. As file sizes are listed in bytes, this will show them in B, K, M, G.
* these can be strung together. I.e. `ls -lha`. But there isn't any point in doing `ls -h`, as it needs the long list to make the long list human readable.
* you can list the contents of the parent directory with `ls ..` as `..` represents the parent directory. Just as `cd ..` takes you to the parent directory.
* `ls -R` will show you all files and folders in every level below. But it looks like shit. With 'Tree' installed you can type `tree` to see the structure in a more graphical way. See *Tree*, under *Programs* for more detail.

### Showing the Current Path ###

`pwd` shows the current path. It'll output something like:

	/Users/andytlr/dropbox/websites

### Copying, Moving and Renaming Files ###

* `cp` is the command for copying.
* `cp -R -v samples my-samples` is a copy command. `cp` is short for copy, it's telling it to make a copy of a folder called `samples` and call it `my-samples`.
	* I think `-R` means *recursively*, which I think means to make the changes to all child files and folders.
	* I think `-v` means *verbose*. But I don't know what that means.
* `cp filename.txt newfile.txt` will copy a single file.
* `cp filename.txt folder` will copy the file to a directory called `folder`.
* `mv` is the command for moving.
* Moving a file to another file is essentially renaming. I.e. `mv file.txt newname.md`.
* `mv newname.md folder` will move `newname.md` to a directory called `folder`. Just like copying.
* `mv newname.md ~` will move `newname.md` to your home directory. You could also use `/path` in place of `~` to specify an absolute path.

### Showing the Contents of a File ###

* `cat filename.txt` will show the contents of filename.txt

### Saving and Appending Output to a File ###

* `tree > tree.txt` will make a file called tree.txt with the directory structure.
* `cat file.txt > newfile.txt` will take the contents of file.txt and make a new file called newfile.txt with that contents. However, if that file already exists, its contents will be overridden.
* Using `>>` will append the contents instead of overwriting it. `cat currentfile.txt >> newfile.txt` will put the contents of currentfile.txt at the end of newfile.txt, if newfile.txt doesn't exist, it will be created. So unless you specifically want to overwrite a file, it's probably saver to use `>>`.

### Removing a File or Directory ###

* `rm filename.txt`
* `rm filename1.txt filename2.txt` to remove more than one file.
* `rm -i filename.txt` removes with confirmation.
* `rmdir directoryname` is the command to remove a directory. This only works on empty directories.
* `rm -R directoryname` removes a directory and contents.
* `mr -f filename.txt` force removes a file without a confirmation.

### Make a Directory ###

* `mkdir directoryname`
* To make a directory structure you can use `-p`. I.e. `mkdir -p dir1/dir2/dir3/dir4/dir5`

### Make a File ###

* You can create a new text file with `cat`. `cat > newfilename.md` will give you a new line in Terminal. Type some contents for the file `newfilename.md`. To save and exit, start a new line and type `Control` + `D`.
* It's probably easier to just use a text editor. For example `nano` gives you a fresh document and you can save from within Nano. `nano newfilename.md` will create a file called `newfilename.md` and open it in Nano.

### Pipes ###

Pipes let you chain commands together. They're represented by `|`.

If the output of one command could be the input to the next you could use a pipe like `command1 | command2`.


Programs
--------

### SSH ###

* To connect to a remote server use `ssh username@server`
* `uname -a` will show you details of the server.
* Type `exit` to disconnect.

### SFTP ###

* To transfer files to a remote server use `sftp username@server`[^1]
* `put filename` is the command to transfer a file to the server.
* `get filename` is the command to transfer a file from the server.
* Type `exit` to disconnect.

[^1]: It seemed more complicated, but in the last 5min of [Dan's video][1], there was a section on Secure Copy (SCP), which is an alternative to SFTP.

### Tree ###

* Install Tree via Homebrew with `brew install tree`.
* Once installed, typing `tree` will give you a listing of all the files in the current directory, but also show you all the children in a more graphical way than `ls -R`.
* As with `ls` you can type `tree ..` or `tree directoryname` to see up or down in the structure.

A typical output might look like this:

	.
	├── folder1
	│   └── folder2
	│       └── folder3
	│           └── folder4
	└── test1
	    ├── test2
	    │   ├── test2.md
	    │   └── test3
	    │       ├── test.md
	    │       ├── test3.md
	    │       └── test4
	    └── test2.md

But if the structure is deep, like in `/` or `~`, it quickly gets out of hand.

### More ###

* Use more with a pipe to show the contents of a file standalone by typing `cat filename.txt | more`. More will do this for any command that outputs content. This is only useful for big files, as without it, the whole file will be shown and you'll be looking at the bottom of the content, not the top.
* You can use a `<` to tell something to take the contents of the following. For example `more < filename.txt`

### Nano Text Editor ###

`nano filename.txt`

### Word Count ###

`cat filename.txt | wc` will show you a word count of the file.

### Grep ###

`cat filename.txt | grep keyword` will output only the lines in a file that contain 'keyword'. This appears to be case sensitive.

### Gzip and TAR ###

* `gzip filename.txt` will compress a file. It will also remove the original file, unlike in the OS X GUI.
* `gzip -d filename.txt.gz` will de-compress the g-zipped file. It will remove the g-zipped file and just retain the uncompressed file.

Gzip will only compress one file, not a folder. For that you need TAR (short for Tape Archive).

* To 'make and archive' of a directory use `tar -cvf filename.tar directoryname`. The `c` means create, the `v` means verbose and `f` means you want to specify a file name.
* By default---unlike Gzip---TAR will leave the original directory.

A TAR file is an archive, but it is *not* compressed.

* `gzip filename.tar` to get `filename.tar.gz`

Using the previous TAR command with the `-z` flag, you can Gzip it at the same time.

* `tar -czvf filename.tgz directoryname` (.tgz is short for .tar.gz)

To **expand** a TAR file, you need to do it from a new folder. Otherwise it'll dump the contents in the current folder. (It seems like if you compressed a folder, though, that it will expand that folder, rather than it's contents. So unless there's a folder with the same name in the current directory, you're alright.)

* `tar -xzvf ~/filename.tgz` will expand the archive `filename.tgz` from the parent folder into the current folder.



[1]: https://peepcode.com/products/meet-the-command-line "Dan Benjamin's PeepCode screencast, Meet the Command Line"