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


    // validation for required, pattern, number
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
                expect(
                    submitElem.attr('disabled')
                ).toEqual('disabled');
            });
        });

        describe('ID', function () {
            var idElem;

            it('should not have an id input when not in entity', function () {
                compileDir();
                idElem = compiledDir.find('[name=id]');

                expect( idElem.length ).toBe(0);
            });

            it('should populate a disabled id when available', function () {
                currentScope.course.id = 1;
                compileDir();
                idElem = compiledDir.find('[name=id]');

                expect( Number(idElem.val()) ).toBe( currentScope.course.id );
                expect( idElem.attr('disabled') ).toBe('disabled');
            });

            // validation
        });

        describe('Name', function () {
            var nameElem;

            it('should populate the name field', function () {
                currentScope.course.name = "test";
                compileDir();
                nameElem = compiledDir.find('[name=name]');
                expect( nameElem.val() ).toBe( currentScope.course.name );
            });

            // validation
        });

        describe('Version', function () {
            var versionElem;
            
            it('should populate the version field', function () {
                currentScope.course.version = 2;
                compileDir();
                versionElem = compiledDir.find('[name=version]');
                expect( Number(versionElem.val()) ).toBe( currentScope.course.version );
            });

            // validation
        });
    });

    describe('Valid Entity', function () {
        var formCtrl;

        beforeEach(function () {
            currentScope.course = {
                id: 1,
                name: "test-name",
            };
            html.attr('entity', 'course');
            compileDir();
            formCtrl = compiledDir.data().$isolateScope.form;
        });

        it('should call courseUniqueValidator with both entities', function () {
            expect(courseUniqueValidatorSpy)
                .toHaveBeenCalledWith(formCtrl.entity, formCtrl.original);
        });

        it('should call courseUniqueValidator on entity changes', function () {
            courseUniqueValidatorSpy.reset();

            formCtrl.entity.name = "new";
            currentScope.$digest();

            expect(courseUniqueValidatorSpy).toHaveBeenCalled();
        });
    });

    function compileDir() {
        compiledDir = $$compile(html)(currentScope);
        currentScope.$digest();
    }
});