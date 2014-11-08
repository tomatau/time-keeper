'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('manageLayout', {
                abstract: true,
                templateUrl: ROUTESURL + 'manage/manage.tmpl.html',
                controllerAs: 'manage',
                controller: 'manageCtrl',
                resolve: {
                    weekResolve: function(
                        $q,
                        syncStudentList,
                        syncCourseList,
                        setStudentsCourse,
                        setStudentsSessions
                    ){
                        return $q.all([syncStudentList(), syncCourseList()])
                            .then(setStudentsCourse)
                            .then(setStudentsSessions);
                    }
                }
            })
            .state('manage', {
                url: URLMAP.manage,
                parent: 'manageLayout',
                views: {
                    addCourse: {
                        templateUrl: ROUTESURL + 'manage/add-course.tmpl.html',
                        controller: 'addCourseCtrl',
                        controllerAs: 'aC',
                    },
                    addStudent: {
                        templateUrl: ROUTESURL + 'manage/add-student.tmpl.html',
                        controller: 'addStudentCtrl',
                        controllerAs: 'aS',
                    }
                }
            });
    })
    .controller('manageCtrl', function(CourseList, StudentList){
        var vm = this;
        vm.studentList = StudentList.get();
        vm.courseList = CourseList.get();
    })
;