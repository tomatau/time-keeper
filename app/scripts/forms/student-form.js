'use strict';
angular.module('forms')
    .directive('studentForm', function(FORMSURL, CourseList){
        return {
            templateUrl: FORMSURL + 'student-form.tmpl.html',
            scope: {
                entity: '=entity',
                submitFn: '&submitFn'
            },
            bindToController: true,
            controllerAs: 'form',
            /* jshint unused:false */
            controller: function($scope){ },
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
        };
    })
;