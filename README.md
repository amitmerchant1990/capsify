# jQuery Capsify

A jQuery plugin to make text upper and lower case on-the-go.

Usage
=====
```javascript
$(document).ready(function() {
   $("textarea").capsify();
});
```

Install
=======
```
$ npm install capsify
```

License
=======
MIT License

Options
=======
For making text in upper case while typing.
```javascript
$("textarea").capsify({isCapsON : "Yes"});
```

For making text in lower case while typing.
```javascript
$("textarea").capsify({isCapsON : "No"});
```