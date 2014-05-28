module.exports = function(grunt) {
  grunt.loadNpmTasks('../../node_modules/amber-dev');

  grunt.registerTask('default', ['amberc:processing']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      options: {
        amber_dir: '../bower_components/amber',
        closure_jar: ''
      },
      processing: {
        src: ['st/Processing-Examples.st'],
        output_dir: 'js',
        deploy: true,
        amd_namespace: 'amber_examples_processing'
      }
    }
  });

}
