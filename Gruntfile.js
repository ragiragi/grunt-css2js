module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        scriptFiles: ['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js'],
        nodeunit: {
            all: ['test/**/*.js']
        },
        watch: {
            scripts: {
                files: ['<%= scriptFiles %>'],
                tasks: 'default',
                options: {
                    debounceDelay: 250
                }
            }
        },
        jshint: {
            options: {
                "curly" : true,
                "eqeqeq" : true,
                "immed" : true,
                "latedef" : true,
                "newcap" : true,
                "noarg" : true,
                "sub" : true,
                "undef" : true,
                "boss" : true,
                "eqnull" : true,
                "node" : true,
                "globals" : {}
            },
            all: ['<%= scriptFiles %>']
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('default', ['jshint', 'nodeunit']);

};
