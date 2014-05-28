amber-examples
==============

Various amber examples

Getting started
===============

To get started you must first get the tools for this project:

    npm install -g amber-cli
    npm install -g bower

 and dependencies of this project:
 
    git submodule update --init --recursive
    npm install
    bower install

Afterwards execute the server:

`amber serve`

and point your browser to

`http://localhost:4000/`

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
