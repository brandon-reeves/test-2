module.exports = function(grunt) {
	'use strict',

	// Project Configuration
	grunt.initConfig({
		jasmine: {
			src: [],
			options: {
				specs: [],
				vendor: [],
				banner: '(function($){',
				footer: '})(jQuery);'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');
};