describe('Course Unique Validator Test', function () {
    var courseList = [],
        validator,
        entity = {},
        original = {};

    beforeEach( module("forms") );

    beforeEach( module(function($provide) {
        $provide.value('CourseList', { get: function() { return courseList; }, });
    }) );

    beforeEach(inject(function (courseUniqueValidator) {
        validator = courseUniqueValidator;
    }));

    it('should throw with no entities default invalid', function () {
        expect(validator).toThrow();
    });

    it('should default to true when no courses', function () {
        expect(validator(entity, original)).toBeTrue();
    });

    describe('Creating a New Course', function () {
        beforeEach(function () {
            courseList = [{
                id: 1,
                version: 1,
                name: "first"
            }];
        });

        it('should be invalid when the name and version is not unique', function () {
            entity.name = "first";
            entity.version = 1;
            expect(validator(entity, original)).toBeFalse();
        });
    });

    ddescribe('Editing a Course', function () {
        beforeEach(function () {
            original = {
                id: 2,
                name: "second",
                version: 1,
            };
            entity = angular.copy(original);

            courseList = [{
                    id: 1,
                    name: "first",
                    version: 1,
                },
                original,
                {
                    id: 3,
                    name: "second",
                    version: 2,
                }];
        });

        it('should be valid when everything is the same', function () {
            expect(validator(entity, original)).toBeTrue();
        });

        it('should be invalid when the name and version is not unique', function () {
            entity.name = "first";
            entity.version = 1;
            expect(validator(entity, original)).toBeFalse();
        });

        it('should be valid when the name not unique but version is', function () {
            entity.name = "first";
            entity.version = 2;
            expect(validator(entity, original)).toBeTrue();
        });
    });

});