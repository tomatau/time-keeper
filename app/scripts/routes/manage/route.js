'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('manage', {
                url: URLMAP.manage,
                templateUrl: ROUTESURL + 'manage/manage.tmpl.html',
                controller: 'manageCtrl',
                controllerAs: 'manage',
                resolve: {
                    cl: function(syncCourseList){
                        return syncCourseList();
                    }
                }
            });
    })
    .controller('manageCtrl', function(CourseList){
        var vm = this;
        vm.courseList = CourseList.get();
    })
    .controller('addCourseCtrl', function(Course, addCourse, closeModal){
        var vm = this;
        vm.course = Course.get();
        vm.addModalId = 'create-course-modal';
        vm.modalAction = function modalAction(){
            addCourse(vm.course)
                .then(function(){
                    closeModal(vm.addModalId);
                    Course.reset();
                });
        };
    });