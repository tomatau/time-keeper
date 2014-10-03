'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('week', {
                url: URLMAP.week,
                templateUrl: ROUTESURL + 'week/week.tmpl.html',
                controller: 'week',
                controllerAs: 'week'
            });
    })
    .controller('week', function(){ })
;