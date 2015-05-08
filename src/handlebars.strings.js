define(["handlebars"],

function(Handlebars){

    var strings = {
        capitalize: function(value, strictMode){
            strictMode = strictMode || false;

            if (strictMode) {
                return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();    
            }
            return value.charAt(0).toUpperCase() + value.slice(1);
        },

        capitalize_all: function(value, strictMode) {
            var words = value.split(/\s+/);

            strictMode = strictMode || false;

            var done = [];
            for (var i = 0; i<words.length; i++) {
                done.push(this.capitalize(words[i], strictMode));
            }
            return done.join(' ');
        },

        normalize_spaces: function(words) {
            return words.split(/\s+/).join(' ');
        },




    };

    Handlebars.registerHelper('capitalize', strings.capitalize);
    Handlebars.registerHelper('capitalize-all', strings.capitalize_all);
    Handlebars.registerHelper('normalize-spaces', strings.normalize_spaces);



    return strings;

});