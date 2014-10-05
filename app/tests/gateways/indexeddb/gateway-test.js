describe('IndexedDB Gateway', function () {
    var storeReturn = {};

    beforeEach(module('config'));
    beforeEach(module('indexeddbGateways'));

    beforeEach(module(function(){
        sinon.stub(window, 'IDBStore').returns(storeReturn);
    }));

    afterEach(function () {
        window.IDBStore.restore();
    });

    it('should should call the IDBStore and return store', inject(function(idbGateway) {
        var store = idbGateway();
        expect(IDBStore).toHaveBeenCalled();
        expect(store).toBe(storeReturn);
    }));

    it('should pass the storeName to IDBStore', inject(function(idbGateway) {
        var store = idbGateway('test'),
            storeOptions = IDBStore.firstCall.args[0];
        expect(storeOptions.storeName).toBe('test');
    }));
});