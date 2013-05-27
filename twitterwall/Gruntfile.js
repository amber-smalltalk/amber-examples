module.exports = function(grunt) {
  grunt.loadTasks('../vendor/amber/grunt/tasks/');

  grunt.registerTask('default', ['amberc:twitterwall']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    amberc: {  
      _config: {
        amber_dir: '../vendor/amber',
        closure_jar: ''
      },
      twitterwall: {
        src: ['st/TwitterWall.st'],
	output_dir: 'js',
	libraries:[ 'Canvas']
      }
    }
  });

}
