'use strict';
angular.module('routes')
    .config(function(
        $stateProvider,
        ROUTESURL,
        URLMAP,
        nextSessionView,
        weekSessionView
    ){
        $stateProvider
            .state('weekLayout', {
                abstract: true,
                templateUrl: ROUTESURL + 'week/week.tmpl.html',
                controllerAs: 'week',
                controller: 'weekCtrl',
                resolve: {
                    weekResolve: function(
                        appResolve,
                        setStudentsCourse,
                        setStudentsSessions,
                        setActiveStudents
                    ){
                        return appResolve
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
                    nextSessions: angular.extend(nextSessionView, {
                        templateUrl: ROUTESURL + 'week/next-sessions.tmpl.html',
                    }),
                    weekSessions: angular.extend(weekSessionView, {
                        templateUrl: ROUTESURL + 'week/week-sessions.tmpl.html',
                    }),
                }
            });
    })
    .controller('weekCtrl', function(){ })
;