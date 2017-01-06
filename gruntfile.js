module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          //hostname: '127.0.0.1',
          hostname: '*',
          port: 18307,
          base: './',
          livereload: true
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/**/*.js',
        options: {
          interrupt: true
        }
      },
      html: {
        files: 'src/**/*.html',
        options: {
          interrupt: true
        }
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['src/**/*']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['connect:server', 'watch']);
};
