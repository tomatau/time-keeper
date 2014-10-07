'use strict';
angular.module('forms')
    .directive('courseForm', function(FORMSURL, CourseList, formBuilder){
        return formBuilder({
            templateUrl: FORMSURL + 'course-form.tmpl.html',
            link: function(scope, iElem, iAttr, ctrl){
                scope.courseForm.name.$validators
                    .courseNameAvailable = function(modelValue){
                        var entityId = (ctrl.entity != null) && ctrl.entity.id,
                            courseWithName = CourseList.find( { name: modelValue } );
                        return ( ( courseWithName != null ) && 
                            ( entityId !== courseWithName.id ) )
                            ? false : true;
                    };
            }
        });
    });
            // nice DSL?
            // validators: function(entity){
            //     return {
            //         name: {
            //             courseNameAvailable: function(){
            //             }
            //         }
            //     };
            // }