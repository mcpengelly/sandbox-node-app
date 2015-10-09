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
}
