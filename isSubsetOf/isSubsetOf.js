/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*

I = An Array
O = Boolean - Whether or not the main array is in the input array of subset
C = Best: Linear (2n) - Likely will solve in logarithmic (2logn) or quadratic n^2 though
E = Empty array/size

 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  // iterate over the main array (this) check that every element is included in the subset array and return a boolean
  return this.every(el => arr.includes(el) ? true : false);
};

module.exports = Array.prototype.isSubsetOf;