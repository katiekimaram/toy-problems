/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'

I = String - A bunch of letters
O = String - Just one letter that does not repeat
C = Best: Linear? - Should use at least one iteration. Current is Quadratic, but could be refactored to use Linear time complexity, possibly involving hash map or set.
E = There are multiple unique characters, non alpha-numeric characters, all the same characters, an empty string

 */

var firstNonRepeatedCharacter = function(string) {
  // turn the string into an array
  var arr = string.split('');
  // create an array for just unique values
  var uniq = [];

  // iterate over the string array
  arr.forEach(letter => {
    // if the current index of the letter equals the last index of the letter
    if(arr.indexOf(letter) === arr.lastIndexOf(letter)) {
      // then return that letter
      uniq.push(letter);
    }
  });

  // return first value of unique array if it has a value or null if its empty
  return uniq.length !== 0 ? uniq[0] : null;
};

// module.exports = firstNonRepeatedCharacter;
