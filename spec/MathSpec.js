define(["handlebars", "handlebars.math"],
function(Handlebars, MathHelpers){

   describe("Math helpers", function(){

        describe("#calculate", function(){

            it("should add two numbers", function(){
                expect(MathHelpers.calculate(1, '+', 2)).toEqual(3);
                expect(MathHelpers.calculate(-1, '+', 2)).toEqual(1);
                expect(MathHelpers.calculate(-1, '+', -2)).toEqual(-3);
            });

            it("should subtract two numbers", function(){
                expect(MathHelpers.calculate(1, '-', 1)).toEqual(0);
                expect(MathHelpers.calculate(1, '-', 2)).toEqual(-1);
                expect(MathHelpers.calculate(-1, '-', -1)).toEqual(0);
            });

            it("should divide two numbers", function(){
                expect(MathHelpers.calculate(10, '/', 2)).toEqual(5);
                expect(MathHelpers.calculate(-5, '/', 5)).toEqual(-1);
                expect(MathHelpers.calculate(-10, '/', -10)).toEqual(1);
            });

            it("should multiple two numbers", function(){
                expect(MathHelpers.calculate(10, '*', 2)).toEqual(20);
                expect(MathHelpers.calculate(-10, '*', 2)).toEqual(-20);
                expect(MathHelpers.calculate(-10, '*', -2)).toEqual(20);
                 
            });

            it("should provide the modulus between two numbers", function(){
                expect(MathHelpers.calculate(4, '%', 3)).toEqual(1);
                expect(MathHelpers.calculate(-20, '%', 17)).toEqual(-3);
                expect(MathHelpers.calculate(10, '%', -7)).toEqual(3);
            });

            it("should reject non-numbers", function(){
                expect(MathHelpers.calculate('inv', 'a', 'lid')).toBeNull();
            });

            it("should reject division by 0", function(){
                expect(MathHelpers.calculate(100, '/', 0)).toBeNull();
            });

            it("should return undefined on invalid operator", function(){
                expect(MathHelpers.calculate(100, '?', '3')).not.toBeDefined();
            });

        });


        describe("#compare", function(){

            var data, html;


            beforeEach(function(){
                this.data = {
                    x: null,
                    y: null,
                    operator: null
                };

                this.html = "{{#compare x operator y}}true{{else}}false{{/compare}}";
            });

            it("should determine x < y", function(){
                
                var template = Handlebars.compile(this.html);

                this.data.operator = '<';

                this.data.x = 1;
                this.data.y = 3;
                expect(template(this.data)).toEqual("true");

                this.data.x = 2;
                this.data.y = 1;
                expect(template(this.data)).toEqual("false");

                this.data.x = 5;
                this.data.y = 5;

                expect(template(this.data)).toEqual("false");
            });

            it("should determine x > y", function(){

                var template = Handlebars.compile(this.html);

                this.data.operator = '>';

                this.data.x = 10;
                this.data.y = 5;
                expect(template(this.data)).toEqual("true");

                this.data.x = 0;
                this.data.y = 100;
                expect(template(this.data)).toEqual("false");

                this.data.x = -5;
                this.data.y = -5;
                expect(template(this.data)).toEqual("false");
            });

            it("should determine x <= y", function(){
                var template = Handlebars.compile(this.html);

                this.data.operator = '<=';

                this.data.x = 1;
                this.data.y = 3;
                expect(template(this.data)).toEqual("true");

                this.data.x = 2;
                this.data.y = -1;
                expect(template(this.data)).toEqual("false");

                this.data.x = 5;
                this.data.y = 5;

                expect(template(this.data)).toEqual("true");
            });

            it("should determine x >= y", function(){
                var template = Handlebars.compile(this.html);

                this.data.operator = '>=';

                this.data.x = 10;
                this.data.y = -5;
                expect(template(this.data)).toEqual("true");

                this.data.x = -10;
                this.data.y = 100;
                expect(template(this.data)).toEqual("false");

                this.data.x = 500.0;
                this.data.y = 500;
                expect(template(this.data)).toEqual("true");
            });

            it("should determine x != y", function(){
                var template = Handlebars.compile(this.html);

                this.data.operator = '!=';

                this.data.x = 10;
                this.data.y = 5;
                expect(template(this.data)).toEqual("true");

                this.data.x = 0;
                this.data.y = 100;
                expect(template(this.data)).toEqual("true");

                this.data.x = -5;
                this.data.y = -5;
                expect(template(this.data)).toEqual("false");
            });

            it("should determine x == y", function(){
                var template = Handlebars.compile(this.html);

                this.data.operator = '==';

                this.data.x = 100;
                this.data.y = 55.5;
                expect(template(this.data)).toEqual("false");

                this.data.x = 0.0;
                this.data.y = -100.0;
                expect(template(this.data)).toEqual("false");

                this.data.x = -5;
                this.data.y = -5;
                expect(template(this.data)).toEqual("true");

                this.data.x = 45.0;
                this.data.y = 45.0;
                expect(template(this.data)).toEqual("true");
            
                this.data.x = "apples";
                this.data.y = "apples";
                expect(template(this.data)).toEqual("true");

                this.data.x = "apples";
                this.data.y = "oranges";
                expect(template(this.data)).toEqual("false");
            });

            it("should determine x === y", function(){
                var template = Handlebars.compile(this.html);

                this.data.operator = '===';

                this.data.x = 1000;
                this.data.y = -88.5;
                expect(template(this.data)).toEqual("false");

                this.data.x = 0.0;
                this.data.y = -170.0;
                expect(template(this.data)).toEqual("false");

                this.data.x = -5;
                this.data.y = -5;
                expect(template(this.data)).toEqual("true");

                this.data.x = 45.0;
                this.data.y = "45.0";
                expect(template(this.data)).toEqual("false");
            
                this.data.x = "apples";
                this.data.y = "apples";
                expect(template(this.data)).toEqual("true");

                this.data.x = "apples";
                this.data.y = "Apples";
                expect(template(this.data)).toEqual("false");


                this.data.x = "apples";
                this.data.y = "oranges";
                expect(template(this.data)).toEqual("false");
            });


        });

   }); 

});