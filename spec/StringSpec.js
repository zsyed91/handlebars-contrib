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

            it("should normalize each word in strict mode", function(){
                expect(Strings.capitalize_all("mULtIPLE WordS   123", true)).toEqual("Multiple Words 123");
            });

        });


        describe("#normalize_spaces", function(){
            it("should convert multiple spaces to a single space", function(){
                expect(Strings.normalize_spaces("This is   a sentence,    with words.")).toEqual("This is a sentence, with words.");
                expect(Strings.normalize_spaces("1    2   test 3")).toEqual("1 2 test 3");
            });
        });

    });

});


