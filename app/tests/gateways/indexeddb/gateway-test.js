describe('IndexedDB Gateway', function () {
    var storeReturn = {};
    beforeEach(module('config'));
    beforeEach(module('indexeddbGateways'));

    beforeEach(inject(function ($rootScope, $timeout) {
        sinon.stub(window, 'IDBStore', function Stub(opts){
            setTimeout(function(){
                opts.onStoreReady()
                $rootScope.$digest();
            }, 0);
            this.constructorReturn = {};
        });
    }));

    afterEach(function () {
        window.IDBStore.restore();
    });

    it('should should call the IDBStore and return store', inject(function(
        idbGateway, $rootScope
    ) {
        var storePromise = idbGateway();
        var store = {};
        expect(IDBStore).toHaveBeenCalled();
        storePromise.then(function(returnedStore){
            store = returnedStore;
        });
        // evil async hack
        waitsFor(function(){
            return _.isEqual(store.constructorReturn, storeReturn);
        }, "return equals store Return", 20);
    }));

    xit('should pass the storeName to IDBStore', inject(function(idbGateway) {
        var store = idbGateway('test'),
            storeOptions = IDBStore.firstCall.args[0];
        expect(storeOptions.storeName).toBe('test');
    }));
});