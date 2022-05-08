/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  // create a resizing function
  var resize = (newSize) => {
    // collect all pairs
    var pairs = [];
    // iterate over the storage
    storage.every(pairs => {
      // if the storage at the index is not undefined, then continue
      if (pairs === undefined) { return false; }
      // otherwise, iterate over the storage at the current index
      pairs.every(pair => {
        // if the storage index at the current index is not defined, then continue
        if (pair) { return false; }
        // otherwise, push the value to the pairs
        pairs.push(pair);
      });
    });
    // set the storageLimit to the new size
    storageLimit = newSize;
    // set the storage back to empty
    storage = [];
    // set the size to 0
    size = 0;
    // iterate over the pairs length
    pairs.forEach(pair => {
      // insert the pair values to the result object
      result.insert(pair[0], pair[1]);
    });
  };

  result.insert = function(key, value) {
    // set the index to getIndexBelowMaxForKey at the key and storageLimit
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // set the storage at the index to equal the storage at the index or if undefined set to an empty array
    storage[index] = storage[index] || [];
    // set a separate pair value
    var pair;
    // iterate over the pairs
    storage[index].forEach((pairs,i) => {
      // set the pair to the pairs index
      pair = storage[index][i];
      // if the first pair is equal to the key
      if (pairs[0] === key) {
        // then the pair next value is the value
        pairs[1] = value;
        // return
        return;
      }
    });

    // push the pairs to as the key and value
    storage[index].push([key, value]);
    // increment the size
    size++;

    // if the size is greater than or equal to the 3/4 of the storage limit
    if(size >= storageLimit * 0.75) {
      // then resize the storage limit to double
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key) {
    // set the index to getIndexBelowMaxForKey at the key and storageLimit
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // if pair is undefined, return nothing
    if (!storage[index]) { return; }
    // set a separate pair value
    var pairs;
    // iterate over the pairs
    storage[index].forEach(pair => {
      // set the current pair to pair variable
      pairs = pair;
      // if the pair first value is equal to the key
      if (pair && pair[0] === key) {
        // then return the pair value
        return pairs[1];
      }
    });
  };

  result.remove = function(key) {
    // set the index to getIndexBelowMaxForKey at the key and storageLimit
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // set a separate pair value
    var pair;
    // iterate over the storage index
    storage[index].forEach((pair, index) => {
      // have the pair equal to the current pairs
      pair = pair;
      // if the first pair value is equal to the key
      if (pair[0] === key) {
        // then set the value to the pair value
        var value = pair[1];
        // remove the pair at the index
        storage[index].splice(index, 1);
        // decrement the size
        size--;
        // if the size is less than or equal to the 1/4 storageLimit
        if (size <= storageLimit * 0.25) {
          // then resize the storage limit to half
          resize(storageLimit / 2);
        }
        // return the value
        return value;
      }
    });
  };

  return result;
};