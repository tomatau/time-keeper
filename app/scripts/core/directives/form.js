'use strict';
angular.module('core')
    .directive('tmForm', function(COREURL){
        return {
            transclude: true,
            template: '<p>test</p>'
        };
    });