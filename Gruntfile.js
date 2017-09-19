module.exports = grunt => {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "public/app.css": "src/index.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      scripts: {
        files: ['src/jsx/*.jsx', 'src/**/*.js'],
        tasks: ['babel', 'browserify'],
        options: {
          nospawn: true
        },
        // },
        // configFiles: {
        //   files: [ 'Gruntfile.js', 'app.js', 'server/*.js' ],
        //   tasks: ['server'],
        //   options: {
        //     nospawn: true
        //   }
      }
    },
    injector: {
      options: {
        relative: true,
        min: true
      },
      local_dependencies: {
        files: {
          'public/index.html': ['public/**/*.js', 'public/**/*.css'],
        }
      }
    },
    babel: {
      options: {
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
      },
      jsx: {
        files: [{
          expand: true,
          cwd: 'src/jsx/', // Custom folder
          src: ['*.jsx'],
          dest: 'src/compiled/', // Custom folder
          ext: '.js'
        }]
      }
    },
    browserify: {
      dist: {
        src: ['src/compiled/index.js'],
        dest: 'public/app.js'
      }
    }
  });

  grunt.registerTask('server', 'Start a custom web server', function () {
    require('./app.js');
  });

  grunt.registerTask('build', ['babel', 'browserify', 'less', 'injector']);

  grunt.registerTask('default', ['build', 'server', 'watch']);

  grunt.registerTask('serve', ['default']);
};