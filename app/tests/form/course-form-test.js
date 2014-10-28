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

    it('should disable the submit button', function () {
        currentScope.entity = {};
        html.attr('entity', 'entity');
        compileDir();
        rootElement = compiledDir.find('form');

        expect(
            rootElement.find('[type=submit]').attr('disabled')
        ).toEqual('disabled');
    });

    it('should not have an id input when not in entity', function () {
        currentScope.entity = {};
        html.attr('entity', 'entity');
        compileDir();
        rootElement = compiledDir.find('form');

        expect(
            rootElement.find('[name=id]').length
        ).toBe(0);
    });

    it('should populate name and id into inputs', function () {
        currentScope.entity = {
            id: 1,
            name: "test-name",
        };
        html.attr('entity', 'entity');
        compileDir();
        rootElement = compiledDir.find('form');
        
        expect(
            Number(rootElement.find('input[name=id]').val())
        ).toBe( currentScope.entity.id );
        expect(
            rootElement.find('input[name=id]').attr('disabled')
        ).toBe('disabled');
        expect(
            rootElement.find('input[name=name]').val()
        ).toBe( currentScope.entity.name );
        // Version field check
    });

    describe('Valid Entity', function () {
        var formCtrl;

        beforeEach(function () {
            currentScope.entity = {
                id: 1,
                name: "test-name",
            };
            html.attr('entity', 'entity');
        });

        it('should call courseUniqueValidator with both entities', function () {
            compileDir();
            formCtrl = compiledDir.data().$isolateScope.form;
            // rootElement = compiledDir.find('form');
            
            expect(courseUniqueValidatorSpy)
                .toHaveBeenCalledWith(formCtrl.entity, formCtrl.original);
        });

        it('should call courseUniqueValidator on entity changes', function () {
            compileDir();
            formCtrl = compiledDir.data().$isolateScope.form;
            courseUniqueValidatorSpy.reset();

            formCtrl.entity.name = "new";
            currentScope.$digest();

            expect(courseUniqueValidatorSpy).toHaveBeenCalled();
        });

        // validation for required, pattern, number
    });

    function compileDir() {
        compiledDir = $$compile(html)(currentScope);
        currentScope.$digest();
    }
});