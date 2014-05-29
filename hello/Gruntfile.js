module.exports = function(grunt) {
  grunt.loadNpmTasks('../../node_modules/amber-dev');

  grunt.registerTask('default', ['amberc:hello']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      options: {
        amber_dir: '../bower_components/amber',
        closure_jar: ''
      },
      hello: {
        src: ['st/HelloApp.st'],
        libraries: ['Web'],
        output_dir: 'js',
        deploy: true,
        amd_namespace: 'com_examples_hello'
      }
    }
  });

}
