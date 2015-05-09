define(["handlebars"],
function(Handlebars){

    var MathHelpers = {
        calculate: function(x, operator, y){

            x = parseFloat(x);
            y = parseFloat(y);

            if (isNaN(x) || isNaN(y)) {
                return null;
            }

            if (operator == '/' && y === 0) {
                return null;
            }

            return {
                '+': x + y,
                '-': x - y,
                '/': x / y,
                '*': x * y,
                '%': x % y
            }[operator];
        }
    };


    Handlebars.registerHelper('calculate', MathHelpers.calculate);

    return MathHelpers;

});