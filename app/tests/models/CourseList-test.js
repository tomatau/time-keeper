describe('CourseList Model', function () {
    var courseList = [
        { id: 123, name: 'TEST001' },
        { id: 321, name: 'TSET001' },
        { id: 234, name: 'SETS001' },
    ];

    beforeEach( module("models") );

    it('should start empty', inject(function(CourseList) {
        expect(CourseList.get()).toBeEmptyArray()
    }));

    it('should add course list to the list', inject(function(CourseList) {
        CourseList.add(courseList[0])
        expect(CourseList.get()).toEqual([courseList[0]])
    }));

    it('should set the full list of course list', inject(function(CourseList) {
        CourseList.set(courseList);
        expect(CourseList.get()).toEqual(courseList)
    }));

    it('should find course list in the list', inject(function(CourseList) {
        CourseList.set(courseList);
        expect(
            CourseList.find({ id: courseList[0].id })
        ).toEqual(courseList[0])
    }));

    it('should remove the course from the list', inject(function(CourseList) {
        CourseList.set(courseList);
        CourseList.remove(courseList[1]);
        expect(
            CourseList.get()
        ).toEqual([ courseList[0], courseList[2] ]);
    }));
});
