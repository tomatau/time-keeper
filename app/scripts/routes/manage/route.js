'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP, addCourseView, addStudentView){
        $stateProvider
            .state('manageLayout', {
                abstract: true,
                templateUrl: ROUTESURL + 'manage/manage.tmpl.html',
                controllerAs: 'manage',
                controller: 'manageCtrl',
                resolve: {
                    weekResolve: function(
                        appResolve,
                        setStudentsCourse,
                        setStudentsSessions
                    ){
                        return appResolve
                            .then(setStudentsCourse)
                            .then(setStudentsSessions);
                    }
                }
            })
            .state('manage', {
                url: URLMAP.manage,
                parent: 'manageLayout',
                views: {
                    addCourse: angular.extend(addCourseView, {
                        templateUrl: ROUTESURL + 'manage/add-course.tmpl.html',
                    }),
                    addStudent: angular.extend(addStudentView, {
                        templateUrl: ROUTESURL + 'manage/add-student.tmpl.html',
                    }),
                }
            });
    })
    .controller('manageCtrl', function(CourseList, StudentList){
        var vm = this;
        vm.studentList = StudentList.get();
        vm.courseList = CourseList.get();
    })
;