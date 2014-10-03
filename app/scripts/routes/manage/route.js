'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL){
        $stateProvider
            .state('manage', {
                url: "/",
                templateUrl: ROUTESURL + "manage/manage.tmpl.html",
                controller: 'manage',
                controllerAs: 'manage'
            });
    })
    .controller('manage', function($scope){
    })
;