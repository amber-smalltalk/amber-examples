module.exports = function(grunt) {
  grunt.loadTasks('../vendor/amber/grunt/tasks/');

  grunt.registerTask('default', ['amberc:presentation']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      _config: {
        amber_dir: '../vendor/amber',
        closure_jar: ''
      },
      presentation: {
        src: ['st/Presentation.st'],
        output_dir: 'js'
      }
    }
  });

}
