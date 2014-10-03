'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL){
        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: ROUTESURL + 'dashboard/dash.tmpl.html',
                controller: 'dashboard',
                controllerAs: 'dash'
            });
    })
    .controller('dashboard', function(){
    })
;