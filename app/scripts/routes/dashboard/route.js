'use strict';
angular.module('routes')
    .controller('dashboard', function($scope, addCourse){
        this.modal = {
            id: 'create-course-modal',
            header: 'Create Course', // Edit Course
            submitText: 'Create',
            action: addCourse
        };
        this.course = { // fetched from resolve
            id: 123
        };
    })
;