describe('Add Course', function () {
    beforeEach(module("useCases"));

    it('should save a new valid course', inject(function (
        addCourse
        // ,Courses
        // ,courseGateway
    ) {
        var course = { name: "ANG001" };
        addCourse(course);
        // save through gateway
        // expect(courseGateway.add) .toHaveBeenCalledWith(course)

        // and add to the courses collection
        // expect(Courses.add) .toHaveBeenCalledWith(course)
    }));
});