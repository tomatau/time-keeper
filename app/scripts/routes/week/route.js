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
                    students: function(syncStudentList){
                        return syncStudentList();
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
        StudentList,
        CourseList,
        SessionList
    ){
        var vm = this,
            studentList = StudentList.get();

        var thisWeek = moment();

        function getThisWeeksSession(student){
            var sessionsHad = student.sessions.length - student.numSessions;
            var firstSession = moment(student.firstSession);
            var thisWeeksSession;

            // if there are some sessions remaining
            // there should be a session this week
            //

            // if the first session week is the same as the current week
            // it's their first week!
            if ( thisWeek.week() == firstSession.week() ) {
                // select the day of the week
                thisWeeksSession = angular.copy(firstSession)
                    .day(student.sessionDay).toDate();
            } else if ( thisWeek.week() > firstSession.week() ) {
                // first session in past
                thisWeeksSession = angular.copy(firstSession)
                    .add(sessionsHad, 'weeks')
                    .day(student.sessionDay).toDate();
            }
            return thisWeeksSession;

            // console.log(thisWeek.week())
            // console.log()
        }

        _.each(studentList, function(student, id){
            studentList[id].course = CourseList.get( student.course );
            studentList[id].sessions = SessionList.getStudentSessions( student.id );
            studentList[id].weeksSession = getThisWeeksSession( student );
        });
        console.table(studentList);
        vm.studentList = studentList;
    })
;