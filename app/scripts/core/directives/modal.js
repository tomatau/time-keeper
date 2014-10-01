angular.module('core')
    .factory('openModel', function(){
        return function(ident){
            angular.element('.' + ident).modal();
        }
    })
    .directive('tmModal', function(COREURL){
        return {
            templateUrl: COREURL + "/directives/modal.tmpl.html",
            controllerAs: "modal",
            bindToController: true,
            transclude: true,
            scope: {
                id: "@ident",
                header: "@header",
                submitText: "@submitText",
                submitFn: "&submitFn",
            },
            // need this for controllerAs despite bindToController
            controller: function(){}
        }
    });