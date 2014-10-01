describe('Gateway Config', function () {

    beforeEach( module("gateways") );

    it('should add providers for the gateways dependency map', 
        inject(function(dependencyMap, $injector) {
            angular.forEach(dependencyMap.gateways, function(source, target){
                expect($injector.get(target)).toEqual($injector.get(source))
            });
        })
    );
});