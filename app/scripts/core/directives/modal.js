'use strict';
angular.module('core')
    .factory('openModel', function(){
        return function(ident){ angular.element('#' + ident).modal(); };
    })
    .run(function($rootScope, openModel){
        $rootScope.openModel = openModel;
    })
    .directive('tmModal', function(COREURL){
        return {
            transclude: true,
            templateUrl: COREURL + '/directives/modal.tmpl.html',
            scope: {
                id: '@ident',
                header: '@header',
                buttonText: '@buttonText',
                buttonFn: '&buttonFn'
            },
            bindToController: true,
            controllerAs: 'modal',
            controller: function(){},
        };
    });