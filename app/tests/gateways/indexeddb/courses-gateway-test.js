describe('IndexedDB Courses Gateway', function () {
    var def;

    beforeEach(module('config'));
    beforeEach(module('indexeddbGateways'));

    beforeEach(module(function($provide) {
        $provide.factory('idbGateway', function($q){
            def = $q.defer();
            def.resolve({
                put: function(course, callback){
                    callback(1);
                }
            });
            return sinon.spy(function(storeName){
                return def.promise;
            });
        });
    }));

    it('should initialize the Courses store', inject(function(
        indexeddbCoursesGateway, idbGateway
    ) {
        expect(idbGateway).toHaveBeenCalledWith('Courses');
    }));

    it('should save the course and resolve with the new id', inject(function(
        indexeddbCoursesGateway, idbGateway, $rootScope
    ) {
        var course = {
            name: 'TEST'
        };
        indexeddbCoursesGateway.save(course)
            .then(function(savedCourse){
                expect(savedCourse).toEqual({
                    id: 1,
                    name: course.name
                });
            });
        $rootScope.$digest()
    }));

});