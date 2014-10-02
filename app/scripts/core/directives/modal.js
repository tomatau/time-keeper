'use strict';
angular.module('core')
    .factory('openModal', function(){
        return function(ident){
            angular.element('#' + ident).modal('show');
        };
    })
    .factory('closeModal', function(){
        return function(ident){
            angular.element('#' + ident).modal('hide');
        };
    })
    .run(function($rootScope, openModal, closeModal){
        $rootScope.openModal = openModal;
        $rootScope.closeModal = closeModal;
    })
    .directive('tmModal', function(COREURL){
        return {
            transclude: true,
            templateUrl: COREURL + 'directives/modal.tmpl.html',
            scope: {
                id: '=ident',
                header: '@header',
                buttonText: '@buttonText',
                buttonFn: '&buttonFn'
            },
            bindToController: true,
            controllerAs: 'modal',
            controller: function(){
                if ( this.id == null ) // wtf...
                    throw new Error('modal requires and id');
            },
        };
    });