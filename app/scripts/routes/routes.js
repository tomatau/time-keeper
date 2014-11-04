'use strict';
angular.module('routes', [
        'core',
        'models',
        'forms',
        'useCases',
        'ui.router'
    ])
    .constant('ROUTESURL', 'scripts/routes/')
    .constant('URLMAP', {
        'dashboard' : '/',
        'manage'    : '/manage',
        'students'  : '/students',
        'week'      : '/week',
    })
    .config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    })
;