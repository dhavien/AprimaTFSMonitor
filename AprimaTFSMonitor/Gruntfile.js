module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components',
                        src: [ 
                            '**.js',
                            '**.map',
                            '!angular-ui-router/**',
                            'angular-ui-router/release/**',
                            '!lodash/**',
                            'lodash/dist/**',
                            '!restangular/**',
                            'restangular/dist/**',
                            '!bootstrap/**',
                            'bootstrap/dist/**',
                            'bootstrap/js/dist/**',
                            '!jquery/**',
                            'jquery/dist/**',
                            'angular/**.js',
                            'angular/**.map',
                            '!angular/index.js'
                        ],
                        dest: 'Scripts/dist/'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    //Run tasks as default action
    grunt.registerTask('default', ['copy']);
}