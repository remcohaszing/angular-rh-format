'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jasmine: {
      options: {
        specs: 'tests/**/*Spec.js',
        vendor: [
          'bower_components/angular/angular.js'
        ],
        helpers: [
          'bower_components/angular-mocks/angular-mocks.js'
        ]
      },
      unit: {
        src: 'src/**/*.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        '<%= jasmine.options.specs %>',
        '<%= jasmine.unit.src %>',
        __filename
      ]
    },
    jscs: {
      options: {
        config: '.jscsrc'
      },
      src: '<%= jshint.files %>'
    },
    watch: {
      js: {
        files: '<%= jshint.files %>',
        tasks: ['test']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('default', [
    'watch'
  ]);

  grunt.registerTask('test', [
    'jasmine',
    'jscs'
  ]);
};
