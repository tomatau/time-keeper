'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('students', {
                url: URLMAP.students,
                templateUrl: ROUTESURL + 'students/students.tmpl.html',
                controller: 'students',
                controllerAs: 'students'
            });
    })
    .controller('students', function(){
    })
;