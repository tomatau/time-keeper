// Karma configuration
// Generated on Tue Sep 30 2014 09:30:30 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // angular
      'app/bower_components/jquery/dist/jquery.js'
      ,'app/bower_components/underscore/underscore.js'
      ,'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js'
      ,'app/bower_components/idbwrapper/idbstore.js'
      ,'app/bower_components/angular/angular.js'
      ,'app/bower_components/angular-messages/angular-messages.js'
      ,'app/bower_components/angular-strap/dist/angular-strap.min.js'
      ,'app/bower_components/angular-strap/dist/angular-strap.tpl.min.js'
      ,'app/bower_components/angular-mocks/angular-mocks.js'

      // testing libraries
      ,'node_modules/jasmine-expect/dist/jasmine-matchers.js'
      ,'node_modules/sinon-browser-only/sinon.js'
      ,'node_modules/jasmine-sinon/lib/jasmine-sinon.js'
      ,'app/tests/test-helpers.js'

      // source files (load folders in order of deps)
      ,'app/scripts/**/core.js'
      ,'app/scripts/**/models.js'
      ,'app/scripts/**/forms.js'
      ,'app/scripts/**/firebase/gateway.js'
      ,'app/scripts/**/indexeddb/gateway.js'
      ,'app/scripts/**/gateways.js'
      ,'app/scripts/**/use-cases.js'
      ,'app/scripts/config.js'
      ,'app/scripts/environment.js'
      // glob all the scripts
      ,'app/scripts/core/**/*.js'
      ,'app/scripts/models/*.js'
      ,'app/scripts/forms/**/*.js'
      ,'app/scripts/gateways/**/*.js'
      ,'app/scripts/use-cases/**/*.js'

      // tests
      ,'app/tests/**/*-test.js'
      // tmplates
      ,'app/scripts/**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/scripts/**/*.html': 'html2js'
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'tmpls'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'mocha' ],


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
    browsers: [
        'Chrome'
        // ,'Firefox'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
