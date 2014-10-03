'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL){
        $stateProvider
            .state('week', {
                url: "/",
                templateUrl: ROUTESURL + "week/week.tmpl.html",
                controller: 'week',
                controllerAs: 'week'
            });
    })
    .controller('week', function($scope){ })
;