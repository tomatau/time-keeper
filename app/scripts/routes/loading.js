'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL){
        $stateProvider.state('loading', {
            templateUrl: ROUTESURL + 'loading-circle.tmpl.html'
        });
    })
    .run(function ($rootScope, $state, $timeout) {
        function hasResolve(toState){
            do {
                if (toState.resolve) return true;
                toState = ( toState.parent )
                    ? $state.get(toState.parent)
                    : false;
            } while ( toState );
            return false;
        }

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
            // start a loading dialog before attempting any resolves
            if ( fromState.name !== 'loading' && hasResolve(toState) ) {
                event.preventDefault();
                $state.go('loading', { 'notify': false });
                $timeout(function(){
                    $state.go(toState.name);
                }, 250);
            }
        });
    });