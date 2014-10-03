describe('Core Modal Test', function () {
    beforeEach( module("core") );

    describe('Modal Factory Functions', function(){
        var modalSpy;
        beforeEach(function () {
            modalSpy = sinon.spy();
            sinon.stub(angular, "element").returns({ modal: modalSpy });
        });

        afterEach(function () {
            modalSpy.reset();
            angular.element.restore();
        });

        describe('Open Modal', function(){
            it('call modal show on the given selector as an id', inject(function(openModal) {
                var idSelector = "testIdSelector"
                openModal(idSelector);
                expect(angular.element).toHaveBeenCalledWith("#" + idSelector);
                expect(modalSpy).toHaveBeenCalledWith("show");
            }));
        });

        describe('Close Modal', function(){
            it('call modal show on the given selector as an id', inject(function(closeModal) {
                var idSelector = "testIdSelector"
                closeModal(idSelector);
                expect(angular.element).toHaveBeenCalledWith("#" + idSelector);
                expect(modalSpy).toHaveBeenCalledWith("hide");
            }));
        });
    });

    describe('tmModal Directive', function () {
        var currentScope,
            html,
            transcludeElem,
            compiledDir,
            rootElement,
            $$compile;

        beforeEach( module("tmpls") );

        beforeEach(inject( function($rootScope, $compile) {
            $$compile = $compile;
            currentScope = $rootScope.$new();
            transcludeElem = "<p>Transclude Content</p>";
            html = angular.element("<tm-modal>").append(transcludeElem);
            // console.log(compiledDir.data().$tmModalController)
            // console.log(compiledDir.data().$isolateScope)
        }));

        it('should require an id attribute or throw', inject(function(){
            expect(compileDir).toThrow();
        }));

        describe('Minimum Attribute Requirements', function () {
            beforeEach(function () {
                currentScope.testId = "test-id";
                html.attr('ident', '{{ testId }}');
            });
            it('should add id-attr to the root element of view', inject(function(){
                compileDir();
                rootElement = compiledDir.find('.modal');
                expect(rootElement.attr('id')).toEqual('test-id')
            }));

            describe('Header Attribute', function () {
                beforeEach(function () {
                    html.attr('header', 'Test Header');
                });
                it('should add a header if one is supplied in attr', inject(function(){
                    compileDir();
                    rootElement = compiledDir.find('.modal');
                    expect(
                        rootElement.find('.modal-title').text()
                    ).toEqual("Test Header")
                }));
            });

            describe('Button Attributes', function () {
                beforeEach(function () {
                    html.attr('button-text', 'Test Button');
                });
                it('should add footer when buttonText and do buttonFn', inject(function(){
                    html.attr('button-fn', 'testId = "expression result"');
                    compileDir();
                    rootElement = compiledDir.find('.modal');
                    rootElement.find('button:contains("Test Button")').click();
                    expect(currentScope.testId).toEqual("expression result");
                }));
            });
        });

        // also test it's a modal
        // test transclusion position
        // 


        function compileDir() {
            compiledDir = $$compile(html)(currentScope);
            currentScope.$digest();
        }
    });
});