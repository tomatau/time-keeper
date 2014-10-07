'use strict';
angular.module('forms')
    .directive('courseForm', function(FORMSURL, CourseList, formBuilder){
        return formBuilder({
            templateUrl: FORMSURL + 'course/course.tmpl.html',
            link: function(scope, iElem, iAttr, ctrl){
                scope.$watchCollection('form.entity',
                    function validateCourse(entity){
                        var valid = false,
                            nameExists = _.where(CourseList.get(), { name: entity.name });
                        // editing
                        if ( entity.id != null ){
                            // same as before
                            if ( _.isEqual(entity, ctrl.original) ) {
                                // version is the same
                                valid = true;
                            } else
                            // hasid, name:unique
                            if ( !nameExists.length ) {
                                valid = true;
                            } else
                            // hasid, name:not same but exists, version:unique
                            if ( !_.findWhere(nameExists, { version: entity.version }) ) {
                                valid = true;
                            }
                        }
                        // creating
                        else {
                            // name:unique
                            if ( !nameExists.length ) {
                                valid = true;
                            } else
                            // name:taken, version: unique
                            if (!_.findWhere(nameExists, { version: entity.version })) {
                                valid = true;
                            }
                        }
                        scope.courseForm.$setValidity('notUnique', valid);
                    });
            }
        });
    });