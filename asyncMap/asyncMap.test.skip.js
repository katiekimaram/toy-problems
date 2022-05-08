const asyncMap = require('./asyncMap.js');

describe('asyncMap', () => {
  it ('should exist', () => {
    expect(asyncMap).toBeDefined();
  });

  it ('should be a function', () => {
    expect(typeof asyncMap).toBe('function');
  });

  it ('should pass the completed tasks to its callback in the correct order', (done) => {
      var wait2For2 = function wait2For2(callback) {
        setTimeout(function () {
          callback(2);
        }, 200);
      };

      var wait3For1 = function wait3For1(callback) {
        setTimeout(function () {
          callback(1);
        }, 300);
      };

      asyncMap([wait2For2, wait3For1], function (results) {
        /* This should work regardless of order because of
         * the time it takes to execute these 2 functions
         */
        expect(results).toEqual([2, 1]);
        expect(results.length).toEqual(2);
        done();
      });
  });

  it ('should handle more than two async functions in the correct order', () => {

  });

});