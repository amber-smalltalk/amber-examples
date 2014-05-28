module.exports = function(grunt) {
  grunt.loadNpmTasks('../../node_modules/amber-dev');

  grunt.registerTask('default', ['amberc:presentation']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      options: {
        amber_dir: '../bower_components/amber',
        closure_jar: ''
      },
      presentation: {
        src: ['st/Presentation.st'],
        libraries: ['Web'],
        output_dir: 'js',
        deploy: true,
        amd_namespace: 'amber_examples_presentation'
      }
    }
  });

}
