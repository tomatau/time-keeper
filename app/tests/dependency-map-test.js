describe('Dependency Map', function () {
    beforeEach( module("config") );

    it('should provide keys for each gateway', inject(function(dependencyMap) {
        var gatewayKeys = _.keys(dependencyMap.gateways);
        expect(gatewayKeys).toContain("coursesGateway");
    }));

    it('should add injectables from the gateways dependency map', 
        inject(function(dependencyMap, $injector) {
            angular.forEach(dependencyMap.gateways, function(source, target){
                expect($injector.get(target)).toEqual($injector.get(source))
            });
        })
    );
});