describe('Course Form Test', function () {
    var currentScope,
        html,
        compiledDir,
        rootElement,
        $$compile,
        valid = false,
        courseUniqueValidatorSpy = sinon.spy(function(){
            return valid;
        });

    beforeEach( module("forms") );
    beforeEach( module("tmpls") );

    beforeEach(module(function ($provide) {
        $provide.value('courseUniqueValidator', courseUniqueValidatorSpy);
    }));

    afterEach(function () {
        courseUniqueValidatorSpy.reset();
    });

    beforeEach(inject( function($rootScope, $compile) {
        $$compile = $compile;
        currentScope = $rootScope.$new();
        html = angular.element("<course-form>");
        // console.log(compiledDir.data().$courseFormController)
        // console.log(compiledDir.data().$isolateScope)
    }));

    it('should require an entity attribute or throw', inject(function(){
        expect(compileDir).toThrow();
    }));

    describe('Rendering', function () {
        beforeEach(function () {
            currentScope.course = {};
            html.attr('entity', 'course');
        });

        describe('Submit Button', function () {
            var submitElem;

            it('should display a disable submit button', function () {
                compileDir();
                submitElem = compiledDir.find('[type=submit]');
                expect( submitElem.attr('disabled') ).toEqual('disabled');
            });
        });

        describe('ID', function () {
            var idElem;
            beforeEach(function () {
                currentScope.course.id = 1;
            });

            it('should populate a disabled id when available', function () {
                compileDir();
                idElem = compiledDir.find('[name=id]');

                expect( Number(idElem.val()) ).toBe( currentScope.course.id );
                expect( idElem.attr('disabled') ).toBe('disabled');
            });

            it('should be a number', function () {
                compileDir();
                idElem = compiledDir.find('[name=id]');

                expect( idElem.attr('type') ).toBe("number");
            });

            it('should not have an id input when not in entity', function () {
                currentScope.course.id = null;
                compileDir();
                idElem = compiledDir.find('[name=id]');

                expect( idElem.length ).toBe(0);
            });
        });

        describe('Name', function () {
            var nameElem;

            it('should be required with a pattern match', function () {
                compileDir();
                nameElem = compiledDir.find('[name=name]');
                expect( nameElem.attr('required') ).toBe('required');
                expect( nameElem.attr('ng-pattern') ).toBe("/[A-Z]{3,}-\\d{3,3}$/");
            });

            it('should populate the name field', function () {
                currentScope.course.name = "test";
                compileDir();
                nameElem = compiledDir.find('[name=name]');
                expect( nameElem.val() ).toBe( currentScope.course.name );
            });
        });

        describe('Version', function () {
            var versionElem;

            it('should be a required number', function () {
                compileDir();
                versionElem = compiledDir.find('[name=version]');
                expect( versionElem.attr('required') ).toBe('required');
                expect( versionElem.attr('type') ).toBe("number");
            });
            
            it('should populate the version field', function () {
                currentScope.course.version = 2;
                compileDir();
                versionElem = compiledDir.find('[name=version]');
                expect( Number(versionElem.val()) ).toBe( currentScope.course.version );
            });
        });
    });

    describe('Valid Entity', function () {
        var formCtrl,
            directiveScope,
            originalCourse = {
                id: 1,
                name: "test-name",
            };

        beforeEach(function () {
            currentScope.course = angular.copy(originalCourse);
            html.attr('entity', 'course');
            compileDir();
            directiveScope = compiledDir.data().$isolateScope;
            formCtrl = directiveScope.form;
        });

        it('should call courseUniqueValidator with both entities', function () {
            formCtrl.entity.name = "new";
            directiveScope.courseForm.$pristine = false;
            currentScope.$digest();

            expect(courseUniqueValidatorSpy)
                .toHaveBeenCalledWith(formCtrl.entity, originalCourse);
        });
    });

    function compileDir() {
        compiledDir = $$compile(html)(currentScope);
        currentScope.$digest();
    }
});