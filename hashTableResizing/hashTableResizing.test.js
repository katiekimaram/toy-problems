// // TESTING
// var testMakeHashTable = (testingMessage, actual, expected) => {
//   return actual === expected ? `${testingMessage}: Test passed.` : `${testingMessage}: Test failed. Expected ${expected}, but actually ${actual}`;
// }

// // REMOVE
// var removeActual = makeHashTable();
// removeActual.remove();
// var removeExpected = 1; // length
// testMakeHashTable('Should only take one argument when removed', removeActual.length, removeExpected);

// // INSERT
// var insertTable = makeHashTable();
// insertTable.insert('Tarantino\'s best movie', 'Jackie Brown');
// insertTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
// var insertActual = hashTable.retrieve('Tarantino\'s best movie');
// var insertExpected = 'Pulp Fiction';
// testMakeHashTable('Should allow values to be updated', insertActual, insertExpected)

// // test 2 for length
// var insertActual2 = makeHashTable();
// insertActual2.insert('a');
// var insertExpected2 = 2;
// testMakeHashTable('Should take exactly two arguments a key and value', insertActual2.length, insertExpected2);

// //RETRIEVE
// var retrieveTable = makeHashTable();
// retrieveTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
// var retrieveActual = hashTable.retrieve('William Shatner\'s most well known role');
// var retrieveExpected = 'Captain Kirk';
// testMakeHashTable('Should return values previously inserted', retrieveActual, retrieveExpected);

// // test 2 for length
// var retrieveActual2 = makeHashTable(); // the retrieve function should only take a single `key` argument
// var retrieveExpected2 = 1;
// testMakeHashTable('Should take exactly one arguement', retrieveActual2, retrieveExpected2);

// // RESIZING
// var actual, expected;
// var resizeTable = () => {
//   var resizingTable = makeHashTable();
//   var n = 10;
//   var id = 0;
//   var diffs = [];
//   var endTime;
//   var startTime;

//   for (var i = 0; i <= n; i++) {
//     startTime = new Date();
//     for (var j = 0; j < 1000; j++) {
//       hashTable.insert('userid:' + id++, 'Syd Mead');
//     }
//     for (j = 0; j < 100; j++) {
//       hashTable.retrieve('userid:' + Math.floor(Math.random() * i));
//     }
//     endTime = new Date();
//     diffs.push(endTime - startTime);
//   }

//   var sum = function sum(arr) {
//     var total = 0;
//     for (var i = 0; i < arr.length; i++) {
//       total += arr[i];
//     }

//     return total;
//   };

//   actual = diffs[0] / sum(diffs);
//   expected = 1 / (n * 2);
// };
// testMakeHashTable('Should be able to resize', actual, expected);
