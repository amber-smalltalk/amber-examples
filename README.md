amber-examples
==============

Various amber examples



Prerequisites
=============

1. A web browser with reasonably good support for HTML5 canvas.
2. [nodejs](http://www.nodejs.org/). This will give you the node package manager `npm` as well.
3. A global install of the [`amber`](http://amber-lang.net/) [npm](http://npmjs.org/) package
4. A global install of the [`bower`](http://bower.io/) client side package manager in order to install the dependencies

The `amber` and `bower` packages can be installed with the following command (In some cases you have to call `npm` with `sudo npm`):

    npm install --global amber-cli bower

or the same thing, but less typing:

    npm i -g amber-cli bower

Reference: http://docs.amber-lang.net/js-glossary.html

Getting started
===============

Clone the repository 
    git clone https://github.com/amber-smalltalk/amber-examples.git

Get dependencies of this project:
 
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
