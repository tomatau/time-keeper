'use strict';
angular.module('routes', [
        'core',
        'models',
        'forms',
        'useCases',
        'ui.router'
    ])
    .constant('ROUTESURL', 'scripts/routes/')
    .config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });