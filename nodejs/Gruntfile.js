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
        src: ['meta/MyScript.st'],
        main_class: 'MyScript',
        libraries: [
            'Importer-Exporter', 'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
            'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', 'parser'
        ],
        output_name: 'meta/Program'
      },
      pystone: {
        src: ['pystone/Pystone.st'],
        main_class: 'Pystone',
        output_name: 'pystone/Program'
      },
      trivialserver: {
        src: ['trivialserver/TrivialServer.st'],
        main_class: 'TrivialServer',
        output_name: 'trivialserver/Program'
      }
    }
  });
}
