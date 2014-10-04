'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('manage', {
                url: URLMAP.manage,
                templateUrl: ROUTESURL + 'manage/manage.tmpl.html',
                controller: 'manageCtrl',
                controllerAs: 'manage'
            });
    })
    .controller('manageCtrl', function(Courses){
        var vm = this;
        vm.courseList = Courses.get();
    })
    .controller('addCourseCtrl', function(addCourse, closeModal){
        var vm = this;
        // could use a Course model
        vm.course = {};
        vm.addModalId = 'create-course-modal';
        vm.modalAction = function modalAction(){
            // use case to make a copy?
            // gateways can make copies of things when creating id
            addCourse(angular.copy(vm.course))
                .then(function(){
                    closeModal(vm.addModalId);
                    // using Course can remove the vm and call reset
                    vm.course = {};
                });
        };
    });