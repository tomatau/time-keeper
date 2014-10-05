describe('Add Course', function () {
    var def;

    beforeEach( module('useCases') );

    beforeEach(function(){
        inject(function(CourseList, coursesGateway, $q){
            def = $q.defer();
            sinon.stub(CourseList, 'add')
            // sinon.stub(CourseList, 'remove')
            sinon.stub(coursesGateway, 'save').returns(def.promise);
        });
    });
    afterEach(function () {
        inject(function(CourseList, coursesGateway){
            CourseList.add.restore();
            // CourseList.remove.restore();
            coursesGateway.save.restore();
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

        addCourse(validCourse);
        def.resolve(validCourse);
        $rootScope.$digest();

        expect(coursesGateway.save) .toHaveBeenCalledWith(validCourse);
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