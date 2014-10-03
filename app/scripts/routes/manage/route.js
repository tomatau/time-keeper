'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL){
        $stateProvider
            .state('manage', {
                url: "/manage",
                templateUrl: ROUTESURL + "manage/manage.tmpl.html",
                controller: 'manage',
                controllerAs: 'manage'
            });
    })
    .controller('manage', function(addCourse, closeModal, Courses){
        var m = this;
        m.addModalId = 'create-course-modal';
        m.courseList = Courses.get();
        m.course = {};
        m.modalAction = function modalAction(){
            addCourse(angular.copy(m.course))
                .then(function(){
                    closeModal(m.addModalId);
                    m.course = {};
                });
        };
    })
    .controller('addCourseModal', function(){

    })
;