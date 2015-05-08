define(["handlebars.strings"],
function(Strings){
 
    describe("String helpers", function(){

        describe("#capitalize", function(){

        
            it("should capitalize the first letter", function(){
                expect(Strings.capitalize("word")).toEqual("Word");
            });

            it ("should capitalize only the first letter", function(){
                expect(Strings.capitalize("wORD")).toEqual("WORD");
            });

            it ("should normalize the value in strict mode", function(){
                expect(Strings.capitalize("wORD", true)).toEqual("Word");
                expect(Strings.capitalize("MULtiple Words", true)).toEqual("Multiple words");
                 
            });

        });


        describe("#capitalize_all", function(){

            it("should capitalize each word in the string", function(){
                expect(Strings.capitalize_all("multiple   words 123")).toEqual("Multiple Words 123");
                expect(Strings.capitalize_all("1 2 3   456")).toEqual("1 2 3 456");
                 
            });

        });



    });

});


