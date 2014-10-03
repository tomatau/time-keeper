'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL){
        $stateProvider
            .state('week', {
                url: "/week",
                templateUrl: ROUTESURL + "week/week.tmpl.html",
                controller: 'week',
                controllerAs: 'week'
            });
    })
    .controller('week', function($scope){ })
;