'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('manageLayout', {
                abstract: true,
                templateUrl: ROUTESURL + 'manage/manage.tmpl.html',
                controller: 'manageCtrl',
                controllerAs: 'manage',
                resolve: {
                    cl: function(syncCourseList){
                        return syncCourseList();
                    }
                }
            })
            .state('manage', {
                url: URLMAP.manage,
                parent: 'manageLayout',
                views: {
                    addCourse: {
                        templateUrl: ROUTESURL + 'manage/add-course.tmpl.html',
                    },
                    addStudent: {
                        templateUrl: ROUTESURL + 'manage/add-student.tmpl.html',
                    }
                }
            });
    })
    .controller('manageCtrl', function(CourseList){
        var vm = this;
        vm.courseList = CourseList.get();
    })
    .controller('addCourseCtrl', function(Course, CourseList, addCourse, closeModal){
        var vm = this;
        vm.course = Course.get();
        vm.addModalId = 'create-course-modal';
        vm.modalAction = function modalAction(){
            return addCourse()
                .then(function(){
                    closeModal(vm.addModalId);
                });
        };
    })
    .controller('addStudentCtrl', function(Student){
        var vm = this;
        vm.student = Student.get();
        vm.addModalId = 'create-student-modal';
        vm.modelAction = function modelAction(){
            return;
        };
    });