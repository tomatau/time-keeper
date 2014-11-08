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
    .controller('nextSessionsCtrl', function(ActiveStudents){
        function getNextStudents(count){
            return _.chain(ActiveStudents.get())
                .filter(function(student){
                    return student.nextSession > moment().add(1, 'hour');
                })
                .sortBy(function(student){ return student.nextSession; })
                .first(count).value();
        }
        var vm = this;
        vm.studentList = getNextStudents(2);
    })
    .controller('weekSessionsCtrl', function(StudentsThisWeek){
        var vm = this;
        vm.studentList = StudentsThisWeek.get();
    })
;