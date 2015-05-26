module.exports = function(grunt) {

  //grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-jade');
  //grunt.loadNpmTasks('grunt-babel');
  //grunt.loadNpmTasks('grunt-sass');
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      main: {
        options: {
          sourceMap: true
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**npm/*.js'],
            dest: 'public/'
          }
        ]
      }
    },
    clean: ['public'],
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**'],
            dest: 'public/'
          }
        ]
      }
    },
    jade: {
      main: {
        options: {
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.jade', '!**/_*.jade'],
            dest: 'public/',
            ext: '.html'
          }
        ]
      }
    },
    sass: {
      main: {
        options: {
          sourceMap: true,
          sourceMapEmbed: true
        },
        files: {
          'public/css/main.css': 'src/_styles/main.scss'
        }
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('build', [
    'clean',
    'copy'
  ]);

};
