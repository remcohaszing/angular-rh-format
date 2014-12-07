'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    bower: grunt.file.readJSON('bower.json'),

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
    ngAnnotate: {
      dist: {
        src: '<%= jasmine.unit.src %>',
        dest: 'dist/<%= bower.name %>.js'
      }
    },
    ngdocs: {
      options: {
        startPage: 'api/rh.format',
        scripts: ['angular.js', 'src/angular-format.js'],
        html5Mode: false
      },
      all: '<%= jasmine.unit.src %>'
    },
    uglify: {
      dist: {
        src: '<%= ngAnnotate.dist.dest %>',
        expand: true,
        ext: '.min.js'
      }
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-ngdocs');

  grunt.registerTask('default', [
    'watch'
  ]);

  grunt.registerTask('test', [
    'jasmine',
    'jscs'
  ]);

  grunt.registerTask('dist', [
    'ngAnnotate',
    'uglify'
  ]);
};
