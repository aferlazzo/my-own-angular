
/*
	Everything in Gruntfile.js is wrapped in a function, 
	which is assigned to the module.exports attribute.
	This is related to the Node.js module system, and has 
	little practical significance to us. 

	The interesting part is the call to grunt.initConfig. 
	This is where we will pass our project configuration to Grunt.
*/
module.exports = function(grunt) {
   grunt.initConfig({
		jshint: {
			all: ['src/**/*.js', 'test/**/*.js'],
			options: {					// jsHint options:
				globals: {
					_: false,			// ignore _ (from Lo-Dash)
					$: false,			// idnore $ (from jQuery)
					jasmine: false,
					describe: false,
					it: false,
					expect: false,
					beforeEach: false
				},
				browser: true,		// enable browser config
				devel: true			// enable development environment
			}
		},
		testem: {
			unit: {
				options: {
					framework: 'jasmine2',
					launch_in_dev: ['PhantomJS'],
					before_tests: 'grunt jshint',
					serve_files: [
						'node_modules/lodash/lodash.js',
						'node_modules/jquery/dist/jquery.js',
						'src/**/*.js',
						'test/**/*.js'
					],
					watch_files: [
						'src/**/*.js',
						'test/**/*.js'
					]
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-testem');

	// define the default Grunt task as running the testem unit test
	grunt.registerTask('default', ['testem:run:unit']);
};

