module.exports = function(grunt) {
  grunt.loadTasks('../vendor/amber/grunt/tasks/');

  grunt.registerTask('default', ['amberc:trysmalltalk']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      _config: {
        amber_dir: '../vendor/amber',
        closure_jar: ''
      },
      trysmalltalk: {
        src: ['st/TrySmalltalk.st'],
        libraries: ['Canvas'],
        output_dir: 'js'
      }
    }
  });

}
