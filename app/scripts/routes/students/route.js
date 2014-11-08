'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('studentsLayout', {
                abstract: true,
                templateUrl: ROUTESURL + 'students/students.tmpl.html',
                controllerAs: 'students',
                controller: 'studentsCtrl',
                resolve: {
                    studentsResolve:  function(
                        $q,
                        syncStudentList,
                        syncCourseList,
                        setStudentsCourse,
                        setStudentsSessions
                    ){
                        return $q.all([syncStudentList(), syncCourseList()])
                            .then(setStudentsCourse)
                            .then(setStudentsSessions);
                    },
                }
            })
            .state('students', {
                url: URLMAP.students,
                parent: 'studentsLayout',
                views: {
                    studentList: {
                        templateUrl: ROUTESURL + 'students/student-list.tmpl.html',
                        controllerAs: 'sL',
                        controller: 'studentListCtrl',
                    }
                }
            });
    })
    .controller('studentsCtrl', function(){ })
    .controller('studentListCtrl', function(StudentList){
        var vm = this;
        vm.studentList = StudentList.get();
    })
;