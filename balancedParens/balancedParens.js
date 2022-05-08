/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

var balancedParens = function(input) {
  const open = { '{': '}', '[': ']', '(': ')' };
  const closed = { '}': true, ']': true, ')': true };

  var stack = [];

  for(var i = 0; i < input.length; i++) {
    var el = input[i];
    if (open[el]) {
      stack.push(el);
    }

    if (closed[el]) {
      var lastVal = stack.pop();
      // if closed bracket without open bracket, return false
      if (open[lastVal] !== el) {
        return false;
      }
    }
  };

  return stack.length === 0;
};

// module.exports = balancedParens;