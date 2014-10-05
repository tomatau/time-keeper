describe('Config', function () {
    beforeEach( module("config") );
    
    describe('Dependency Map', function () {

        it('should provide keys for each gateway', inject(function(dependencyMap) {
            var gatewayKeys = _.keys(dependencyMap.gateways);
            expect(gatewayKeys).toContain("coursesGateway");
        }));
    });
});