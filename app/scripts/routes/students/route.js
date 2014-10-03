'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL){
        $stateProvider
            .state('students', {
                url: "/",
                templateUrl: ROUTESURL + "students/students.tmpl.html",
                controller: 'students',
                controllerAs: 'students'
            });
    })
    .controller('students', function($scope){
    })
;