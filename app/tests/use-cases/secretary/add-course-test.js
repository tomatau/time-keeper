describe('Add Course', function () {
    var def;

    beforeEach( module("useCases") );

    beforeEach(function(){
        inject(function(Courses, coursesGateway, $q){
            def = $q.defer();
            sinon.stub(Courses, "add")
            sinon.stub(Courses, "remove")
            sinon.stub(coursesGateway, "add").returns(def.promise);
        })
    });
    afterEach(function () {
        inject(function(Courses, coursesGateway){
            Courses.add.restore();
            Courses.remove.restore();
            coursesGateway.add.restore();
        })
    });

    it('should return a promise', inject(function (
        addCourse, $q
    ) {
        expect(addCourse()).toImplement($q.defer().promise)
    }));

    it('should save a new valid course', inject(function (
        addCourse , Courses , coursesGateway
    ) {
        var validCourse = { name: "ANG001" };

        addCourse(validCourse);

        expect(Courses.add) .toHaveBeenCalledWith(validCourse)
        expect(coursesGateway.add) .toHaveBeenCalledWith(validCourse)
    }));

    it('should remove the Course when rejected', inject(function (
        addCourse , Courses , coursesGateway, $rootScope
    ) {
        var validCourse = { name: "ANG001" };

        addCourse(validCourse);
        def.reject();
        $rootScope.$digest()
        
        expect(Courses.add) .toHaveBeenCalledWith(validCourse)
        expect(coursesGateway.add) .toHaveBeenCalledWith(validCourse)
        expect(Courses.remove) .toHaveBeenCalled()
    }));
});