'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('dashboard', {
                url: URLMAP.dashboard,
                templateUrl: ROUTESURL + 'dashboard/dash.tmpl.html',
                controller: 'dashboard',
                controllerAs: 'dash'
            });
    })
    .controller('dashboard', function(){
    })
;