'use strict';
angular.module('core')
    .factory('formBuilder', function(){
        return function(formDirective){
            return angular.extend({}, {
                scope: {
                    entity: '=entity',
                    submitFn: '&submitFn'
                },
                transclude: true,
                bindToController: true,
                controllerAs: 'form',
                /* jshint unused:false */
                controller: function($scope){
                    if (this.entity == null)
                        throw new Error('Form requires entity');

                    var original = angular.copy(this.entity);

                    this.submit = function(){
                        this.submitFn()()
                            .then(function(){
                                $scope[formDirective.formName].$setPristine();
                                $scope[formDirective.formName].$setUntouched();
                            });
                    };

                    $scope.$watchCollection('form.entity', function validateCourse(entity){
                        if ( $scope[formDirective.formName].$pristine ) return true;
                        angular.forEach(formDirective.validators, function(fn, name){
                            $scope[formDirective.formName].$setValidity( name,
                                fn(entity, original)
                            );
                        });
                    });

                    this.modelOptions = { updateOn: 'default blur', debounce: { 'default': 200, 'blur': 0 } };
                }
            }, formDirective);
        };
    });