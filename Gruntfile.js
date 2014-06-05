module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /\@VERSION/g,
              replacement: '<%= pkg.version %>'
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['build/<%= pkg.name %>.min.js'], dest: 'build/'}
        ]
      }
    }
  });

  // Load grunt tasks from NPM packages
  require( "load-grunt-tasks" )( grunt );

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'replace']);

};