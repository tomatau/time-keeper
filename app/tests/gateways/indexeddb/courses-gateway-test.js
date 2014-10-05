describe('IndexedDB Courses Gateway', function () {
    beforeEach(module('config'));
    beforeEach(module('indexeddbGateways'));

    beforeEach(module(function($provide) {
        $provide.value('idbGateway', sinon.spy(function(){
            return {
                put: function(course, callback){
                    callback(1);
                }
            }
        }));
    }));

    it('should initialize the Courses store', inject(function(
        indexeddbCoursesGateway, idbGateway
    ) {
        expect(idbGateway).toHaveBeenCalledWith('Courses');
    }));

    it('should save the course and resolve with the new id', inject(function(
        indexeddbCoursesGateway, idbGateway
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
    }));

});