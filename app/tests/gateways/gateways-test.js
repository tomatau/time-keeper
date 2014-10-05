describe('Gateway Config', function () {

    beforeEach( module("gateways") );

    beforeEach(module(function($provide){
        // the assertions call each gateway which each may call their root
        // so stub out the roots
        $provide.value('idbGateway', function(){});
        $provide.value('firebaseGateway', function(){});
    }));

    it('should add injectables from the gateways dependency map', 
        inject(function(dependencyMap, $injector) {
            angular.forEach(dependencyMap.gateways, function(source, target){
                expect($injector.get(target)).toEqual($injector.get(source))
            });
        })
    );
});