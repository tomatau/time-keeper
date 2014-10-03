describe('Course Form Test', function () {
    var currentScope,
        html,
        compiledDir,
        rootElement,
        $$compile;

    beforeEach( module("forms") );
    beforeEach( module("tmpls") );

    beforeEach(inject( function($rootScope, $compile) {
        $$compile = $compile;
        currentScope = $rootScope.$new();
        html = angular.element("<course-form>");
        // console.log(compiledDir.data().$courseFormController)
        // console.log(compiledDir.data().$isolateScope)
    }));

    it('should disable the submit button', function () {
        compileDir();
        rootElement = compiledDir.find('form');
        expect(
            rootElement.find('[type=submit]').attr('disabled')
        ).toEqual('disabled');
    });

    it('should not have an id input when not in entity', function () {
        compileDir();
        rootElement = compiledDir.find('form');
        expect(
            rootElement.find('[name=id]').length
        ).toBe(0);
    });

    it('should populate name and id into inputs', function () {
        currentScope.entity = {
            id: "test-id",
            name: "test-name",
        };
        html.attr('entity', 'entity');

        compileDir();
        rootElement = compiledDir.find('form');
        
        expect(
            rootElement.find('input[name=id]').val()
        ).toBe( currentScope.entity.id );
        expect(
            rootElement.find('input[name=id]').attr('disabled')
        ).toBe('disabled');
        expect(
            rootElement.find('input[name=name]').val()
        ).toBe( currentScope.entity.name );
    });

    describe('Validation - invalid', function () {
        var formCtrl;

        beforeEach(function () {
            currentScope.entity = {
                id: "test-id",
                name: "333",
            };
            html.attr('entity', 'entity');
        });

        it('should be invalid when name is less than 4 chars', function () {
            compileDir();
            formCtrl = compiledDir.data().$isolateScope.courseForm;

            expect(
                formCtrl.name.$error.minlength
            ).toEqual(true);

            currentScope.entity.name = "4444";
            currentScope.$digest();
            expect(
                formCtrl.name.$error.minlength
            ).toBeUndefined();
        });

        describe('Name with more than 4 characters', function () {
            var courseNameAvailable,
                findReturn;

            beforeEach(function () {
                currentScope.entity = {
                    id: "entity-id",
                    name: "valid-name",
                };
                findReturn = {
                    id: 'different-id',
                    name: "valid-name"
                };
            });

            it('should be invalid when name already exists', inject(function (Courses) {
                compileDir();
                sinon.stub(Courses, "find").returns(findReturn);
                formCtrl = compiledDir.data().$isolateScope.courseForm;
                courseNameAvailable = formCtrl.name.$validators.courseNameAvailable;

                expect(
                    courseNameAvailable(currentScope.entity.name)
                ).toBe(false);
                expect(Courses.find).toHaveBeenCalledWith({
                    name: currentScope.entity.name
                });
            }));

            it('should be valid when a unique name', inject(function (Courses) {
                findReturn = undefined;
                sinon.stub(Courses, "find").returns(findReturn);
                compileDir();
                formCtrl = compiledDir.data().$isolateScope.courseForm;
                courseNameAvailable = formCtrl.name.$validators.courseNameAvailable;

                expect(
                    courseNameAvailable(currentScope.entity.name)
                ).toBe(true);
                expect(Courses.find).toHaveBeenCalledWith({
                    name: currentScope.entity.name
                });
            }));

            it('should be valid when name exists on entity id', inject(function (Courses) {
                findReturn.id = 'entity-id';
                compileDir();
                sinon.stub(Courses, "find").returns(findReturn);
                formCtrl = compiledDir.data().$isolateScope.courseForm;
                courseNameAvailable = formCtrl.name.$validators.courseNameAvailable;

                expect(
                    courseNameAvailable(currentScope.entity.name)
                ).toBe(true);
                expect(Courses.find).toHaveBeenCalledWith({
                    name: currentScope.entity.name
                });
            }));

            describe('Valid Name', function () {
                it('should perform submitFn when submitted', inject(function (Courses) {
                    html.attr('submit-fn', 'entity.id = "result"');
                    expect( currentScope.entity.id ).not.toEqual('result');
                    compileDir();

                    compiledDir.find('[type=submit]').click();
                    
                    expect( currentScope.entity.id ).toEqual('result');
                }));
            });
        });
    });

    function compileDir() {
        compiledDir = $$compile(html)(currentScope);
        currentScope.$digest();
    }
});