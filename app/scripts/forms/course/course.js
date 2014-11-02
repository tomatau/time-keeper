'use strict';
angular.module('forms')
    .directive('courseForm', function(
        formBuilder, 
        FORMSURL, 
        CourseList, 
        courseUniqueValidator
    ){
        return formBuilder({
            templateUrl: FORMSURL + 'course/course.tmpl.html',
            formName: 'courseForm',
            validators: {
                'notUnique': courseUniqueValidator
            }
        });
    });