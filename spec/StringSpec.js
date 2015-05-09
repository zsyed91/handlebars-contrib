define(["handlebars", "handlebars.strings"],
function(Handlebars, Strings){
 
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

        describe("#to_url_slug", function(){

            it("should convert string to url slug", function(){
                expect(Strings.to_url_slug("An interesting blog title")).toEqual("an-interesting-blog-title");
            });

            it("should convert string to url slug and remove any restricted characters", function(){
                expect(Strings.to_url_slug("An interesting blog's title!!")).toEqual("an-interesting-blogs-title");
                expect(Strings.to_url_slug("An interesting blog, whoa?")).toEqual("an-interesting-blog-whoa");
                expect(Strings.to_url_slug("2015/05/08, test topic")).toEqual("2015-05-08-test-topic");
            });

        });

        describe("#match", function(){
            var data, html;

            beforeEach(function(){
                this.data = {
                    str: null,
                    regex: null
                };
                this.html = "{{#match str regex}}true{{else}}false{{/match}}";
            });

            it("should match string to regex", function(){

                var template = Handlebars.compile(this.html);

                this.data.str = "Hello world";
                this.data.regex = /^Hello world$/;
                expect(template(this.data)).toEqual("true");

                this.data.regex = /^does not exist$/;
                expect(template(this.data)).toEqual("false");


                this.data.str = "Lorem, ipsum - dolor 123!";
                this.data.regex = /\d+/;
                expect(template(this.data)).toEqual("true");

                this.data.regex = /^\s\d+\s/;
                expect(template(this.data)).toEqual("false");

            });
        });

    });

});


