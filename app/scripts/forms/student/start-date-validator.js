'use strict';
angular.module('forms')
    // .directive('validateStartDate', function() {
    //     require : 'ngModel',
    //     link : function(scope, element, attrs, ngModel) {
    //         ngModel.$validators.startDate = function() {
    //             console.log(arguments)
    //         }
    //     }
    // });
    // making a directive wouldn't react to changes for edit
    .factory('startDateValidator', function(){
        return function(entity, original){
            if ( entity == null || original == null )
                throw new Error('Must supply both original and updated entity');
            var valid = false;
        // first-session: date, when create/future, when edit (can only change to make future)
            console.log(arguments)

            if ( entity.id != null ) {

                // valid = true;
            }

            return valid;
        };
    });