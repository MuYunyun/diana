// Karma configuration
// Generated on Sat Dec 09 2017 14:28:51 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // 把文件导入浏览器，和下面的 preprocessors 对应
    files: [
      // 'test/**/*.spec.js',
      'dist/test/index.js',
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'test/**/*.spec.js': ['browserify'], // 踩了 browserify 的坑，生成的 coverage 只是一个 require 路径，就没深找还有什么类似 webpack 的 istanbul 插件了
      'dist/test/index.js': ['webpack', 'sourcemap', 'coverage'],
    },

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [{
          enforce: 'post',
          test: /\.js$/,
          use: { loader: 'sourcemap-istanbul-instrumenter-loader' },
          exclude: [/node_modules/, /\.spec.js$/],
          // include: [/node_modules/, /\.spec.js$/],
        }],
      }
    },

    // optionally, configure the reporter
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress', 'coverage'], // 这个有 bug~~ 改用下面 karma-remap-istanbul

    // coverageIstanbulReporter: {
    //   reports: ['text-summary'],
    //   fixWebpackSourcePaths: true
    // },

    remapIstanbulReporter: {
      remapOptions: {}, //additional remap options
      reportOptions: {}, //additional report options
      reports: {
        'text-summary': null, // to display summary results on console
        json: 'coverage/coverage.json',
        lcovonly: 'coverage/lcov.info',
        html: 'coverage/html/',
      }
    },

    reporters: ['progress', 'karma-remap-istanbul-fix'], // 好吧，，remap-isbanbul 也报了一个未找到 sourcemap 的 error，直接注释了 remap-istanbul 包的 CoverageTransformer.js 文件的 169 行，以后有机会再捣鼓吧。（心累）

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
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
