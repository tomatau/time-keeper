describe('Add Course', function () {

    beforeEach(
        module("useCases")
    );

    // stub deps
    beforeEach(function(){
        inject(function(Courses){
            sinon.stub(Courses, "add")
        })
    });

    // restore deps
    afterEach(function () {
        inject(function(Courses){
            Courses.add.restore();
        })
    });

    it('should save a new valid course', inject(function (
        addCourse
        ,Courses
        // ,courseGateway
    ) {
        var course = { name: "ANG001" };
        addCourse(course);
        // save through gateway
        // expect(courseGateway.add) .toHaveBeenCalledWith(course)

        // and add to the courses collection
        expect(Courses.add) .toHaveBeenCalledWith(course)
    }));
});