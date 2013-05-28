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
        src: ['benchfib/Benchfib.st'],
        main_class: 'Benchfib',
        output_name: 'benchfib/Program'
      },
      meta: {
        working_dir: 'meta',
        src: ['MyScript.st'],
        main_class: 'MyScript',
        libraries: ['parser','Compiler'],
        output_name: 'Program'
      },
      pystone: {
        src: ['pystone/Pystone.st'],
        main_class: 'Pystone',
        output_name: 'pystone/Program'
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
