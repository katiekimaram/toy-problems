/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */

/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {
  this.storage = {};
  this.i = 0;
  this.minimum = [];
};

// add an item to the top of the stack
Stack.prototype.push = function(value) {
  if (value <= this.minimum[0] || this.minimum[0] === undefined){
    this.minimum.unshift(value);
  }
  this.storage[this.i] = value;
  this.i++;
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  this.i--;
  this.i = this.i < 0 ? 0 : this.i;
  if (this.storage[this.i] === this.minimum[0]) {
   this.minimum.splice(0, 1);
  }
  return this.storage[this.i];
};

// return the number of items in the stack
Stack.prototype.size = function() {
  return this.i
};

// return the minimum value in the stack
Stack.prototype.min = function() {
  return this.minimum[0];
};


// var testStack = (message, actual, expected) => {
//   return actual === expected ? `${message}: Test passed.` : `${message}: Test failed. Expected ${expected}, but actually ${actual}.`;
// }

// PUSH & MIN
// var actual = new Stack();
// actual.push(4);
// actual.push(3);
// actual.min(); // === 3
// var expected = 3;
// testStack('Should return minimum value after pushing to stack twice', actual.min(), expected);
// actual.push(3);
// actual.push(2);
// actual.push(2);
// actual.min(); // === 2
// var expected2 = 2;
// testStack('Should return minimum value after pushing to stack five times', actual.min(), expected2);
// var expectedSize = 5;
// testStack('Should return size of stack', actual.size(), expectedSize);


