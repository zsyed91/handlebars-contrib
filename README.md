# handlebars-contrib


## Build Status

[![Build Status](https://travis-ci.org/zsyed91/handlebars-contrib.svg)](https://travis-ci.org/zsyed91/handlebars-contrib)

## About

Underscore contrib style handlebars helper functions. Adds helper functions to your handlebars templates as well as in your javascript.



## String Helpers

### Capitalize

Capitalize the first character of the first word in the string.

```js
var strings = require("handlebars.strings");

strings.capitalize("this is a sentence.");
// This is a sentence.
```

```html
{{capitalize this.firstName}}
```

### Capitalize All
```js
var strings = require("handlebars.strings");

strings.capitalize_all("john smith");
// John Smith
```

```html
{{capitalize-all this.name}}
```

### Normalize Spaces

```js
var strings = require("handlebars.strings");

strings.normalize_spaces("This   is a    sentence.");
// This is a sentence.
```

```html
{{normalize-spaces this.summary}}
```

### To URL Slug

```js
var strings = require("handlebars.strings");

strings.to_url_slug("Blog Post title!");
// blog-post-title
```

```html
<a href="localhost/blog/{{to-url-slug this.postTitle}}">post</a>
```



## Math Helpers

While you can use these in javascript, they are really designed for use within the templates. The calculate method in javascript would be easier to do it directly.

### Calculate

The supported operators are `[+, -, /, *, %]`

```html
{{calculate this.costOfCookies '+' this.costOfMilk}}
```

```html
{{calculate this.totalPrice '*' this.taxRate}}
```

### Compare

This helper is a conditional and fully supports the `else` clause. The supported operators are `[<, <=, >, >=, ==, !=, ===, !==]`.

```html
{{#compare this.price '<=' this.budget}}
    <p>Affordable</p>
{{else}}
    <p>Too expensive :(</p>
{{/compare}}
```