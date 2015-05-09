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
        },

        compare: function(x, operator, y, options) {
            var result = {
                '<': x < y,
                '>': x > y,
                '<=': x <= y,
                '>=': x >= y,
                '!=': x != y,
                '==': x == y,
                '===': x === y
            }[operator];

            if (result) {
                return options.fn(this);
            }
            else {
                return options.inverse(this);
            }
        }
    };


    Handlebars.registerHelper('calculate', MathHelpers.calculate);
    Handlebars.registerHelper('compare', MathHelpers.compare);

    return MathHelpers;

});