'use strict';

module.exports = function (grunt) {
    var path = require('path');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('amber-dev');

    // Default task.
    grunt.registerTask('default', ['amberc:all']);
    grunt.registerTask('devel', ['amdconfig:app', 'requirejs:devel']);
    grunt.registerTask('deploy', ['amdconfig:app', 'requirejs:deploy']);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        // pkg: grunt.file.readJSON(''),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // task configuration
        amberc: {
            options: {
                amber_dir: path.join(__dirname, "bower_components", "amber"),
                library_dirs: ['src'],
                closure_jar: ''
            },
            all: {
                src: [
                    'src/TrySmalltalk.st', // list all sources in dependency order
                ],
                amd_namespace: 'amber-trysmalltalk',
                libraries: ['Web']
            }
        },

        amdconfig: {app: {dest: 'config.js'}},

        requirejs: {
            deploy: {options: {
                mainConfigFile: "config.js",
                onBuildWrite: function (moduleName, path, contents) {
                    return moduleName === "config" ? contents + "\nrequire.config({map:{'*':{app:'deploy'}}});" : contents;
                },
                pragmas: {
                    excludeIdeData: true,
                    excludeDebugContexts: true
                },
                include: ['config', 'node_modules/requirejs/require', 'deploy'],
                out: "the.js"
            }},
            devel: {options: {
                mainConfigFile: "config.js",
                onBuildWrite: function (moduleName, path, contents) {
                    return moduleName === "config" ? contents + "\nrequire.config({map:{'*':{app:'devel'}}});" : contents;
                },
                include: ['config', 'node_modules/requirejs/require'],
                out: "the.js"
            }}
        }
    });

};
