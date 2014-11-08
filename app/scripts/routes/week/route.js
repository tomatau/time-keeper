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
                    weekResolve: function(
                        $q,
                        syncCourseList,
                        syncStudentList,
                        setStudentsCourse,
                        setStudentsSessions,
                        setActiveStudents
                    ){
                        return $q.all([syncStudentList(), syncCourseList()])
                            .then(setStudentsCourse)
                            .then(setStudentsSessions)
                            .then(setActiveStudents);
                    },
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
                        resolve: {
                            nextResolve: function(weekResolve, setStudentsNextSession){
                                setStudentsNextSession();
                            }
                        }
                    },
                    weekSessions: {
                        templateUrl: ROUTESURL + 'week/week-sessions.tmpl.html',
                        controllerAs: 'wS',
                        controller: 'weekSessionsCtrl',
                        resolve: {
                            weekSessResolve: function(weekResolve, setStudentsThisWeek){
                                setStudentsThisWeek();
                            }
                        }
                    },
                }
            });
    })
    .controller('weekCtrl', function(){ })
    .filter('getNextStudents', function(){
        return function getNextStudents(students, count){
            return _.chain(students)
                .filter(function(student){
                    return student.nextSession > moment().add(1, 'hour');
                })
                .sortBy(function(student){ return student.nextSession; })
                .first(Number(count) || 2).value();
        };
    })
    .controller('nextSessionsCtrl', function(ActiveStudents){
        var vm = this;
        vm.studentList = ActiveStudents.get();
    })
    .controller('weekSessionsCtrl', function(StudentsThisWeek){
        var vm = this;
        vm.studentList = StudentsThisWeek.get();
    })
;