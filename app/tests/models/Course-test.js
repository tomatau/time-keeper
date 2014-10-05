describe('Course', function () {
    var course = { id: 123, name: 'TEST001' };

    beforeEach( module("models") );

    it('should start empty', inject(function(Course) {
        expect(Course.get()).toEqual({});
    }));

    it('should get the updated object', inject(function(Course) {
        var c = Course.get();
        c.id = course.id;
        expect(Course.get()).toBe(c);
    }));

    it('should provide a set method', inject(function (Course) {
        Course.set(course);
        expect(Course.get()).toEqual(course);
    }));

    describe('Course Populated', function () {
        beforeEach(inject(function (Course) {
            Course.set(course);
        }));

        it('should get specific properties', inject(function(Course) {
            expect(Course.get('name')).toBe(course.name);
        }));

        it('should reset the object keeping reference', inject(function(Course) {
            var c = Course.get();
            Course.reset();
            expect(Course.get()).toEqual({});
            expect(c).toEqual({});
        }));
    });
});
