/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "require-css": "bower_components/require-css",
    "jquery": "bower_components/jquery/jquery",
    "jquery-ui": "bower_components/jquery-ui/jquery-ui",
    "amber_lib/es5-shim": "bower_components/es5-shim",
    "codemirror": "bower_components/codemirror",
    "mousetrap": "bower_components/mousetrap/mousetrap",
    "jquery.blockUI": "bower_components/blockui/jquery.blockUI",
    "helios/showdown": "bower_components/showdown/src/showdown",
    "requireJS": "node_modules/requirejs/require",
    "bootstrap2.3.2": "bower_components/bootstrap2.3.2/bootstrap",
    "amber": "bower_components/amber/support",
    "amber_vm": "bower_components/amber/support/deprecated-vm-files",
    "amber_vm/_st": "bower_components/amber/support/deprecated-vm-files/as-receiver",
    "amber_css": "bower_components/amber/support/resources",
    "amber_core": "bower_components/amber/src",
    "amber-ide-starter-dialog": "bower_components/amber-ide-starter-dialog/lib/idestarter",
    "helios": "bower_components/helios/src",
    "helios/resources": "bower_components/helios/resources",
    "helios/index": "bower_components/helios/index",
    "amber-trysmalltalk": "src"
  },
  "map": {
    "*": {
      "css": "require-css/css"
    }
  },
  "shim": {
    "jquery-ui": {
      "deps": [
        "jquery",
        "jquery"
      ]
    },
    "codemirror/lib/codemirror": {
      "deps": [
        "css!codemirror/lib/codemirror",
        "css!codemirror/lib/codemirror"
      ]
    },
    "bootstrap2.3.2/js/bootstrap": {
      "deps": [
        "jquery",
        "css!bootstrap2.3.2/css/bootstrap"
      ]
    },
    "ensure-console": {
      "exports": "console"
    }
  },
  "rjs_comment1": "require.min should be removed",
  "rjs_comment2": "it's backward compatibility hack if config finds",
  "rjs_comment3": "support/requirejs before node_modules/requirejs;",
  "rjs_comment4": "the former will go away in 0.14.0"
});