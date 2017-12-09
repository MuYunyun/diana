// Karma configuration
// Generated on Sat Dec 09 2017 14:28:51 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'power-assert'],

    // list of files / patterns to load in the browser
    // 导入测试文件的入口
    files: [
      'lib/diana.js',
      'test/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)

      // 'src/**/*.js': ['webpack', 'sourcemap', 'coverage'],
      // 'src/**/*.js': ['babel', 'coverage'],
      // 'src/browser/index.js': ['babel', 'webpack', 'sourcemap', 'coverage'],
      // 'src/node/index.js': ['webpack', 'sourcemap', 'coverage'],
      // 'src/common/index.js': ['webpack', 'sourcemap', 'coverage'],
      'lib/diana.js': ['coverage'], // 统计覆盖率的文件
    },

    // webpack: {
    //   devtool: 'inline-source-map',
    //   module: {
    //     rules: [{
    //       test: /\.js$/,
    //       use: { loader: 'istanbul-instrumenter-loader' },
    //       // exclude: [/node_modules/, /\.spec.js$/],
    //       // include: [/node_modules/, /\.spec.js$/],
    //     }],
    //     loaders: [
    //       { test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader' },
    //     ]
    //   }
    // },

    // webpackServer: {
    //   noInfo: true // prevent console spamming when running in Karma!
    // },

    // optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress', 'coverage'],
    reporters: ['progress', 'coverage', 'coverage-istanbul'],

    // reporter options
    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },

    coverageIstanbulReporter: {
      reports: ['text-summary'],
      fixWebpackSourcePaths: true
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    customLaunchers: {
      Chrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
