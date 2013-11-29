amber-examples
==============

Various amber examples

Web Examples Getting started
===============

You should have [NodeJS](http://nodejs.org/) installed. You should also have [Bower](http://bower.io/) installed
`npm install -g bower`.

First clone the amber-examples repository recursively `git clone https:\\github.com\amber-examples.git --recursive`.
Next because amber-example uses bower you must do a `bower install` from the cloned repository.


To start the file server execute one of the start scripts:

`start.sh`  (Linux, OS X)
`start.bat` (Windows) or click on this to start the server.

and point your browser to `http://localhost:4000/`

Rebuilding examples using Grunt.js (development mode)
====================================================

Since Amber 0.10.0 Grunt.js is used as commandline build system.
To use it with the examples it is first necessary to install all dependencies with

* install grunt-cli globally if not already present: `npm install -g grunt-cli`
* `cd amber-examples`
* `npm install`

Afterwards the examples can be built/recompiled by running the following command in
the subdirectory of each example:

`grunt`

The subdirectories might contain additional README files which might contain additional information.
