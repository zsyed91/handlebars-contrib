/* jshint node: true */

module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json')
    , jshint: {
        all: [
            "Gruntfile.js"
          , "spec/**/*.js"
          , "src/**/*.js"
        ]
      , options: {
          jshintrc: '.jshintrc'
        },
      }
    , jasmine: {
        src: "lib/jasmine-2.3.2/**/*.js"
      , options: {
          specs: "spec/**/*.js"
        , vendor: "lib/**/*.js"
        , version: '2.3.2'
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-jasmine')

  grunt.registerTask('test', ['jshint', 'jasmine'])
  grunt.registerTask('default', ['test'])
};