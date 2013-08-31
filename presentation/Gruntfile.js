module.exports = function(grunt) {
  grunt.loadTasks('../vendor/amber/grunt/tasks/');

  grunt.registerTask('default', ['amberc:presentation']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      options: {
        amber_dir: '../vendor/amber',
        closure_jar: ''
      },
      presentation: {
        src: ['st/Presentation.st'],
        libraries: ['Canvas'],
        output_dir: 'js',
        deploy: true,
        amd_namespace: 'amber_examples_presentation'
      }
    }
  });

}
