angular.module('core')
    .directive('tmModal', function(COREURL){
        return {
            templateUrl: COREURL + "/directives/modal.tmpl.html",
            scope: {
                
            }
        }
    })