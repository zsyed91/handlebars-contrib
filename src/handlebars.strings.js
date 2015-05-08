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

        capitalize_all: function(value) {
            var words = value.split(/\s+/);

            var done = [];
            for (var i = 0; i<words.length; i++) {
                done.push(this.capitalize(words[i]));
            }
            return done.join(' ');
        }
    };



    return strings;

});