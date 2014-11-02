describe('Add Course', function () {
    var def,
        course = {
            course: "test"
        };

    beforeEach( module('useCases') );

    beforeEach(function(){
        module(function($provide){
            $provide.value('coursesGateway', {
                save: sinon.spy(function(){
                    return def.promise;
                })
            });
            $provide.value('CourseList', { add: sinon.spy() });
            $provide.value('Course', {
                get: function() { return course; },
                reset: sinon.spy()
            });
        });
        inject(function(CourseList, coursesGateway, $q){
            def = $q.defer();
        });
    });

    it('should return a promise', inject(function (
        addCourse, $q
    ) {
        expect(addCourse()).toImplement($q.defer().promise)
    }));

    it('should save a new valid course', inject(function (
        addCourse , CourseList , coursesGateway, $rootScope
    ) {
        var validCourse = { name: 'ANG001' };

        addCourse();
        def.resolve(validCourse);
        $rootScope.$digest();

        expect(coursesGateway.save) .toHaveBeenCalledWith(course);
        expect(CourseList.add) .toHaveBeenCalledWith(validCourse);
    }));

    // xit('should remove the Course when rejected', inject(function (
    //     addCourse , CourseList , coursesGateway, $rootScope
    // ) {
    //     var validCourse = { name: 'ANG001' };

    //     addCourse(validCourse);
    //     def.reject();
    //     $rootScope.$digest()
        
    //     expect(CourseList.add) .toHaveBeenCalledWith(validCourse)
    //     expect(coursesGateway.save) .toHaveBeenCalledWith(validCourse)
    //     expect(CourseList.remove) .toHaveBeenCalled()
    // }));
});