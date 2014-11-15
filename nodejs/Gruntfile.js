module.exports = function(grunt) {
  grunt.loadNpmTasks('../node_modules/amber-dev');

  grunt.registerTask('default', ['amberc:hello']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {
      options: {
        amber_dir: 'node_modules/amber',
        closure_jar: ''
      },
      hello: {
        src: ['hello/Hello.st'],
        main_class: 'Hello',
        amd_namespace: 'amber_examples_hello',
        output_name: 'hello/Program'
      },
      writefile: {
        src: ['writefile/WriteFile.st'],
        main_class: 'WriteFile',
        amd_namespace: 'amber_examples_hello',
        output_name: 'writefile/Program'
      },
      benchfib: {
        src: ['benchfib/Benchfib.st'],
        main_class: 'Benchfib',
        amd_namespace: 'amber_examples_benchfib',
        output_name: 'benchfib/Program'
      },
      meta: {
        src: ['meta/MyScript.st'],
        main_class: 'MyScript',
        libraries: [
            'Kernel-ImportExport', 'Compiler-Exceptions', 'Compiler-Core', 'Compiler-AST',
            'Compiler-IR', 'Compiler-Inlining', 'Compiler-Semantic', 'Compiler-Interpreter', 'parser'
        ],
        amd_namespace: 'amber_examples_meta',
        output_name: 'meta/Program'
      },
      pystone: {
        src: ['pystone/Pystone.st'],
        main_class: 'Pystone',
        amd_namespace: 'amber_examples_pystone',
        output_name: 'pystone/Program'
      },
      trivialserver: {
        src: ['trivialserver/TrivialServer.st'],
        main_class: 'TrivialServer',
        amd_namespace: 'amber_examples_trivialserver',
        output_name: 'trivialserver/Program'
      }
    }
  });
}
