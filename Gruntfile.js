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
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'less:dev',
    'browserify'
  ]);

  grunt.registerTask('serve', [
    'less:dev',
    'browserify',
    'watch'
  ]);

  grunt.registerTask('dist', [
    'less:dist',
    'browserify',
    'uglify'
  ]);

};
