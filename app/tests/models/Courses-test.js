describe('Course Model', function () {
    var courseList = [
        { id: 123, name: 'TEST001' },
        { id: 321, name: 'TSET001' },
        { id: 234, name: 'SETS001' },
    ];

    beforeEach( module("models") );

    it('should start empty', inject(function(Courses) {
        expect(Courses.get()).toBeEmptyArray()
    }));

    it('should add courses to the list', inject(function(Courses) {
        Courses.add(courseList[0])
        expect(Courses.get()).toEqual([courseList[0]])
    }));

    it('should set the full list of courses', inject(function(Courses) {
        Courses.set(courseList);
        expect(Courses.get()).toEqual(courseList)
    }));

    it('should find courses in the list', inject(function(Courses) {
        Courses.set(courseList);
        expect(
            Courses.find({ id: courseList[0].id })
        ).toEqual(courseList[0])
    }));

    it('should remove the course from the list', inject(function(Courses) {
        Courses.set(courseList);
        Courses.remove(courseList[1]);
        expect(
            Courses.get()
        ).toEqual([ courseList[0], courseList[2] ]);
    }));
});
