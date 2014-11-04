'use strict';
angular.module('timekeeper', [
        'core',
        'config',
        'routes'
    ])
    .config(function($compileProvider, ENV){
        $compileProvider.debugInfoEnabled(ENV.DEV);
        // $httpProvider.useApplyAsync(true);
    });