describe('Dependency Map', function () {
    beforeEach( module("core") );

    it('should provide keys for each gateway', inject(function(dependencyMap) {
        var gatewayKeys = _.keys(dependencyMap.gateways);
        expect(gatewayKeys).toContain("coursesGateway");
    }));
});