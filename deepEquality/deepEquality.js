/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */


var deepEquals = function(apple, orange) {
  // not an object or array, then return true
  if (apple === orange) return true;

  // check if an object (can also be null or array as these are objects), make sure to check the length too.
  if (typeof apple === 'object' && typeof orange === 'object'
    && Object.keys(apple).length === Object.keys(orange).length) {

      // check more in depth if its an array
      if (Array.isArray(apple) === Array.isArray(orange)) {
        // check each value
        for (let key in apple) {
          // if the value is in orange
          if (key in orange) {
            // if those values do not equal each other, then return false
            if (!deepEquals(apple[key], orange[key])) {
              return false;
            }
          } else {
            return false;
          }
        }
        // if it passes, return true
        return true;
      }
  }

  // return false by default
  return false;
};

module.exports = deepEquals;
