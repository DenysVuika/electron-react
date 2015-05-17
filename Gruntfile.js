var path = require('path');

module.exports = function (grunt) {

  grunt.initConfig({

    watch: {
      content: {
        files: [
          'components/**/*.js*',
          'app.js',
          'index.html',
          'main.js'
        ],
        tasks: ['browserify'],
        options: {
          livereload: true
        }
      },
      less: {
        files: 'less/**/*.less',
        tasks: ['less:dev'],
        options: {
          livereload: true
        }
      }
    },

    less: {
      dev: {
        files: {
          "dist/app.css": "less/app.less"
        }
      },
      dist: {
        options: {
          compress: true
        },
        files: {
          "dist/app.min.css": "less/app.less"
        }
      }
    },

    browserify: {
      options: {
        debug: true,
        transform: ['babelify']
      },
      app: {
        src: 'components/app.jsx',
        dest: 'dist/app.js'
      }
    },

    uglify: {
      options: {
        mangle: true,
        sourceMap: true
      },
      app: {
        files: {
          'dist/app.min.js': 'dist/app.js'
        }
      }
    },

    react: {
      'extra-pages': {
        files: [
          {
            expand: true,
            cwd: 'core/modules/extra-pages/src/components',
            src: ['**/*.jsx'],
            dest: 'core/modules/extra-pages/dist/components',
            ext: '.js'
          }
        ]
      },
      'help-md': {
        files: [
          {
            expand: true,
            cwd: 'core/modules/help-md/src/components',
            src: ['**/*.jsx'],
            dest: 'core/modules/help-md/dist/components',
            ext: '.js'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-react');

  grunt.registerTask('default', [
    'less:dev',
    'browserify',
    'react'
  ]);

  grunt.registerTask('serve', [
    'less:dev',
    'browserify',
    'react',
    'watch'
  ]);

  grunt.registerTask('dist', [
    'less:dist',
    'browserify',
    'uglify',
    'react'
  ]);

  grunt.registerTask('modules', [
    'react'
  ]);

};
