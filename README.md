amber-examples
==============

This project contains various Amber Smalltalk  examples. Amber may run in a web browser or as a command line program.


Tools needed
=============

1. A web browser with reasonably good support for HTML5 canvas.
2. git, on Windows [Git for Windows](http://msysgit.github.com/)
3. [nodejs](http://www.nodejs.org/). This will give you the node package manager `npm` as well.
4. A global install of the [`amber`](http://amber-lang.net/) [npm](http://npmjs.org/) package
5. A global install of the [`bower`](http://bower.io/) client side package manager in order to install the dependencies
6. A global install of the [`grunt`](http://gruntjs.com/) task runner which is used as the command line build system 

The `amber` and `bower` packages can be installed with the following command (In some cases you have to call `npm` with `sudo npm`):

    npm install --global amber-cli bower grunt-cli

or the same thing, but less typing:

    npm i -g amber-cli bower grunt-cli
    

Reference: http://docs.amber-lang.net/js-glossary.html


Setting up amber-examples 
==========================

Clone the repository 

    git clone https://github.com/amber-smalltalk/amber-examples.git

Get dependencies of this project:

    cd amber-examples 
    git submodule update --init --recursive
    npm install
    bower install


Amber in the browser  
==========================

Amber runs in the browser and this includes an IDE. 

To have access to this start a small web server:

`amber serve`

and point your browser to

`http://localhost:4000/`


Amber on the command line 
====================================================


Build or recompile a command line example  (e.g. nodejs) by executing 

`grunt`

in the subdirectory.

The subdirectories might contain additional README files which might contain additional information.


Notes
=====

- Since Amber version 0.10.0 [`grunt`](http://gruntjs.com/) is used as commandline build system.


Status
======

- Loads fine with Amber version 0.12.6
