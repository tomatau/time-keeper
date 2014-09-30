describe('Add Course', function () {

    beforeEach(
        module("useCases")
    );

    // stub deps
    beforeEach(function(){
        inject(function(Courses, coursesGateway){
            sinon.stub(Courses, "add")
            sinon.stub(coursesGateway, "add")
        })
    });

    // restore deps
    afterEach(function () {
        inject(function(Courses, coursesGateway){
            Courses.add.restore();
            coursesGateway.add.restore();
        })
    });

    it('should save a new valid course', inject(function (
        addCourse
        ,Courses
        ,coursesGateway
    ) {
        var course = { name: "ANG001" };
        addCourse(course);
        // save through gateway
        expect(coursesGateway.add) .toHaveBeenCalledWith(course)

        // and add to the courses collection
        expect(Courses.add) .toHaveBeenCalledWith(course)
    }));
});