// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  function detectType(input) {
    return Object.prototype.toString.apply(input);
  }

  var type = detectType(obj);
  var collection = [];

  switch (type) {
    case "[object Number]":
      return String(obj);

    case "[object Null]":
      return String(obj);

    case "[object Boolean]":
      return String(obj);

    case "[object String]":
      return '"' + obj + '"';

    case "[object Array]":
      obj.forEach(function(item) {
        collection.push(stringifyJSON(item));
      });

      return String("[" + collection.join(",") + "]");

    case "[object Object]":
      for (var key in obj) {
        if (detectType(obj[key]) === "[object Function]" || detectType(obj[key]) === "[object Undefined]") {
          return "{}";
        } else {
            collection.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }

      return String("{" + collection.join(",") + "}");
  }
};
