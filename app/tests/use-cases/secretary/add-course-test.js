describe('Add Course', function () {

    beforeEach(
        module("useCases")
    );
    beforeEach(function(){
        inject(function(Courses, coursesGateway){
            sinon.stub(Courses, "add")
            sinon.stub(coursesGateway, "add")
        })
    });
    afterEach(function () {
        inject(function(Courses, coursesGateway){
            Courses.add.restore();
            coursesGateway.add.restore();
        })
    });

    it('should save a new valid course', inject(function (
        addCourse , Courses , coursesGateway
    ) {
        var validCourse = { name: "ANG001" };
        addCourse(validCourse);
        // save through gateway
        expect(coursesGateway.add) .toHaveBeenCalledWith(validCourse)

        // and add to the courses collection
        expect(Courses.add) .toHaveBeenCalledWith(validCourse)
    }));
});