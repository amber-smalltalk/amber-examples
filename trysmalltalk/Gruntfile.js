module.exports = function(grunt) {
  grunt.loadNpmTasks('../../node_modules/amber-dev');

  grunt.registerTask('default', ['amberc:trysmalltalk']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      options: {
        amber_dir: '../bower_components/amber',
        closure_jar: ''
      },
      trysmalltalk: {
        src: ['st/TrySmalltalk.st'],
        libraries: ['Web'],
        output_dir: 'js',
        deploy: true,
        amd_namespace: 'amber_examples_profstef'
      }
    }
  });

}
