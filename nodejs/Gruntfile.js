module.exports = function(grunt) {
  grunt.loadTasks('../vendor/amber/grunt/tasks');

  grunt.registerTask('default', ['amberc:hello']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {
      _config: {
        amber_dir: '../vendor/amber',
        closure_jar: ''
      },
      hello: {
        src: ['hello/Hello.st'],
        main_class: 'Hello',
        output_name: 'hello/Program'
      },
      benchfib: {
        working_dir: 'benchfib',
        src: ['Benchfib.st'],
        main_class: 'Benchfib',
        output_name: 'Program'
      },
      meta: {
        working_dir: 'meta',
        src: ['MyScript.st'],
        main_class: 'MyScript',
        libraries: ['parser','Compiler'],
        output_name: 'Program'
      },
      pystone: {
        working_dir: 'pystone',
        src: ['Pystone.st'],
        main_class: 'Pystone',
        output_name: 'Program'
      },
      trivialserver: {
        working_dir: 'trivialserver',
        src: ['TrivialServer.st'],
        main_class: 'TrivialServer',
        output_name: 'Program'
      }
    }
  });
}
