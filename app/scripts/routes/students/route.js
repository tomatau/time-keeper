'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('studentsLayout', {
                abstract: true,
                templateUrl: ROUTESURL + 'students/students.tmpl.html',
                controllerAs: 'students',
                controller: 'studentsCtrl'
            })
            .state('students', {
                url: URLMAP.students,
                parent: 'studentsLayout',
                views: {
                    studentList: {
                        templateUrl: ROUTESURL + 'students/student-list.tmpl.html'
                    }
                }
            });
    })
    .controller('studentsCtrl', function(){
    })
    .controller('studentListCtrl', function(){
    })
;