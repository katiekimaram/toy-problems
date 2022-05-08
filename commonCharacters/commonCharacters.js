/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

/*

I = two strings (possibly more)
O = a string that only contains the common characters
C = Best: Linear? Though might be different if it can handle more than two strings.
E = duplicate/same characters, non alphanumeric, empty string

*/

var commonCharacters = function(string1, string2) {
  // retrieve array of arguments
  var strings = [...arguments];
  var common = '';

  // if any strings are empty, then return an empty string
  if (strings.some(string => string === '')) {
    return '';
  }

  var compare = (arr, string) => {
    // get rid of the first string on the array
    arr = arr.slice(1);

    if (arr.length === 0) {
      return;
    }

    common = '';

    for(var i = 0; i < string.length; i++){
      var ch = string[i] === ' ' ? '' : string[i];
      if (arr[0].indexOf(ch) !== -1 && common.indexOf(ch) === -1) {
        common += ch;
      }
        common.replace(ch, '');
    }

    compare(arr, common);
  };

  compare(strings, strings[0]);

  return common;
};

// module.exports = commonCharacters;
