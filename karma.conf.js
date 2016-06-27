// Karma configuration
// Generated on Mon Jun 27 2016 17:31:41 GMT+0700 (ICT)

// const webpackEnv = { test: true };
// const webpackConfig = require('./webpack.config')(webpackEnv);
// const fileGlob = 'src/js/**/*.test.js';

module.exports = function setKarmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: ['src/js/**/*.test.js'],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  });
};