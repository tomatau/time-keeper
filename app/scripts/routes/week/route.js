'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('weekLayout', {
                abstract: true,
                templateUrl: ROUTESURL + 'week/week.tmpl.html',
                controllerAs: 'week',
                controller: 'weekCtrl',
                resolve: {
                    students: function(
                        syncStudentList,
                        setStudentsCourse,
                        setStudentsSessions,
                        setActiveStudents,
                        setStudentsThisWeek
                    ){
                        return syncStudentList()
                        // when the students are added and removed
                        // when sessions are added
                        // courses won't be added here and if they are.. no students
                        // this will need to be updated
                            .then(setStudentsCourse)
                            .then(setStudentsSessions)
                            .then(setActiveStudents)
                            .then(setStudentsThisWeek);
                    },
                    courses: function(syncCourseList){
                        return syncCourseList();
                    }
                }
            })
            .state('week', {
                url: URLMAP.week,
                parent: 'weekLayout',
                views: {
                    nextSessions: {
                        templateUrl: ROUTESURL + 'week/next-sessions.tmpl.html',
                        controllerAs: 'nS',
                        controller: 'nextSessionsCtrl',
                    },
                    weekSessions: {
                        templateUrl: ROUTESURL + 'week/week-sessions.tmpl.html',
                        controllerAs: 'wS',
                        controller: 'weekSessionsCtrl',
                    },
                }
            });
    })
    .controller('weekCtrl', function(){ })
    .controller('nextSessionsCtrl', function(){ })
    .controller('weekSessionsCtrl', function(
        StudentsThisWeek
    ){
        var vm = this;
        vm.studentList = StudentsThisWeek.get();
    })
;