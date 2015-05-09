define(["handlebars.math"],
function(MathHelpers){

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

   }); 

});