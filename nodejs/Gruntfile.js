module.exports = function(grunt) {
  grunt.loadTasks('../vendor/amber/grunt/tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['amberc:hello']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    amberc: {	
		 _config: {
			amber_dir: '../../vendor/amber',
			closure_jar: ''
		},
		hello: {
			working_dir: 'hello',
			src: ['Hello.st'],
			main_class: 'Hello',
			output_name: 'Program'
		 },
		benchfib: {
			working_dir: 'benchfib',
			src: ['Benchfib.st'],
			main_class: 'Benchfib',
			output_name: 'Program'
		},
		meta: {
			working_dir: 'meta',
			src: ['MyScript.st'],
			main_class: 'MyScript',
			libraries: ['parser','Compiler'],
			output_name: 'Program'
		},
		pystone: {
			working_dir: 'pystone',
			src: ['Pystone.st'],
			main_class: 'Pystone',
			output_name: 'Program'
		},
		trivialserver: {
			working_dir: 'trivialserver',
			src: ['TrivialServer.st'],
			main_class: 'TrivialServer',
			output_name: 'Program'
		}


      }
    });

}
