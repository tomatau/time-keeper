'use strict';
angular.module('forms')
    .directive('courseForm', function(FORMSURL, CourseList, formBuilder, courseUniqueValidator){
        return formBuilder({
            templateUrl: FORMSURL + 'course/course.tmpl.html',
            link: function(scope, iElem, iAttr, ctrl){
                scope.$watchCollection('form.entity',
                    function validateCourse(entity){
                        scope.courseForm.$setValidity('notUnique', 
                            courseUniqueValidator(entity, ctrl.original)
                        );
                    });
            }
        });
    });