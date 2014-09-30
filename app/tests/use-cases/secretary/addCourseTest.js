describe('Add Course', function () {

    beforeEach(
        module("useCases")
    );

    beforeEach(
        module(function($provide){
            // $provide.factory('Courses', function(){ return CoursesStub; });
        })
    );

    it('should save a new valid course', inject(function (
        addCourse
        ,Courses
        // ,courseGateway
    ) {
        var course = { name: "ANG001" };
        sinon.stub(Courses)
        addCourse(course);
        // save through gateway
        // expect(courseGateway.add) .toHaveBeenCalledWith(course)

        // and add to the courses collection
        expect(Courses.add) .toHaveBeenCalledWith(course)
    }));
});