module.exports = function(grunt) {
	//load plugins for grunt
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
		'grunt-exec'
	].forEach(function (task) {
		grunt.loadNpmTasks(task);
	});

	//configure plugins
	grunt.initConfig({
		cafemocha: {
			all: { src: 'qa/tests-*.js', options : {ul: 'tdd'} }
		},
		jshint: {
			app: ['my-node-app/app.js', 'my-node-app/lib/*.js', 'lib/*.js'],
			qa: ['Gruntfile.js', 'my-node-app/public/qa/*.js', 'public/qa/*.js']
		},
		exec: {
			//linkchecker: { cmd: 'linkchecker http://localhost/3000'
		}
		//explore grunt.option plugin to paramaterize
	});

	//register tasks
	grunt.registerTask('default', ['cafemocha', 'jshint']);
};
