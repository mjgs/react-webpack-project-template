// Karma configuration
// Generated on Mon Jun 27 2016 17:31:41 GMT+0700 (ICT)

process.env.BABEL_ENV = "test";

const webpackConfig = require('./webpack.config');
const fileGlob = 'src/js/**/*.test.js';

module.exports = function setKarmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [fileGlob],
    exclude: [],
    preprocessors: {
      [fileGlob]: ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/', subdir: '.'},
        {type: 'json', dir: 'coverage/', subdir: '.'},
        {type: 'text-summary'}
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  });
};