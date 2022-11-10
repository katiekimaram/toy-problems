/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(S) {
  // empty array
  let stack = []
  
  // iterate over S
  for (let char of S) {
    
    // check if the last element of the stack is equal to the current element of S
    if(stack[stack.length - 1] === char){
    
      // true, remove the last element of the stack.
      stack.pop()
    } else {
    
      // false, add the current element of S to the end of the stack.
      stack.push(char)
    }
  }
  
  // return stack as a string
  return stack.join('');
};