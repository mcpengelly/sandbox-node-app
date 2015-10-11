module.exports = function(grunt) {
	//load plugins for grunt
	[
		grunt.cafe.mocha,
		grunt.contrib.jshint,
		grunt.exec
	].forEach(function (task) {
		grunt.loadNpmTasks(task);
	});

	//configure plugins
	grunt.initConfig({
		cafemocha: {
			all: { src: 'qa/test-*.js', options : {ul: 'tdd'} }
		},
		jshint: {
			app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'],
			qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
			exec: { linkchecker: { cmd: 'linkchecker http://localhost/3000'}}
	},
	});

	//register tasks
	//grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
	grunt.registerTask('default', ['cafemocha', 'jshint']);
};
