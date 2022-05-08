/*

I = A function, the context, and the arguments to that function
O = The function results.
    - In example 1, an alert with the name.
    - In example 2, result is set to a string.
C = ?
E = Accepts context and save previous arguments (for example 2)

Notes:
- Functional
- the first parameter is a function that passes on the rest of the arguments
- the second parameter is the context

*/

var bind = function(func, context) {
  // get an array of the arguments after the first two arguments
  var args = [].slice.call(arguments, 2);

  // should return a function
  return () => {
    // get the current arguments
    var currArgs = [].slice.call(arguments);
    // concatenate the previous and current arguments
    var allArgs = [].concat(args, currentArgs);
    // return the function parameter and apply the context and arguments
    return func.apply(context, allArgs);
  }
};

/*

Notes:
- Psuedoclassical
- could just use this to call or apply all arguments using spread operator?

*/

Function.prototype.bind = function(context) {
    let func = this;
    // get an array of the arguments after the first two arguments
    var args = [].slice.call(arguments, 1);

    // should return a function
    return () => {
      // get the current arguments
      var currArgs = [].slice.call(arguments);
      // concatenate the previous and current arguments
      var allArgs = [].concat(args, currentArgs);
      // return the function parameter and apply the context and arguments
      return func.apply(context, allArgs);
};
