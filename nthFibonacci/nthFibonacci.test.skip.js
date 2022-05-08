const nthFibonacci = require('./nthFibonacci');

describe('', () => {
  it('should be defined', () => {
    expect(nthFibonacci(1)).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof nthFibonacci).toBe('function');
  });

  it('should return integers', () => {
    expect(nthFibonacci(3)).toEqual(2);
  });

  it('should handle the base cases with ease', () => {
    expect(nthFibonacci(0)).toBe(0);
    expect(nthFibonacci(1)).toBe(1);
  });

  it('should return the nth Fibonacci number for a given n', () => {
    expect(nthFibonacci(4)).toBe(3);
  });

  it('should produce values in linear time', () => {
        // all this crazyness does it check if your solution is better than
    // the naive, exponential solution.
    var diffs = [];
    var start = 0;
    var end = 0;
    var i = 0;
    var maxDiff = 100;
    var maxDur = 1000;
    var init = new Date();

    while (end - start < maxDiff && end - init < maxDur) {
      start = new Date();
      nthFibonacci(i++);
      end = new Date();
      diffs.push(end - start);
    }

    var avg = function avg(array) {
      var n = 0;
      var sum = 0;

      for (var i = 0; i < array.length; i++) {
        sum += array[i];
      }

      return sum / array.length;
    };

    var expectedDurRatio = i / (end - init);
    var actualDurRatio = diffs[diffs.length - 1] / (end - init); // if the computational duration is increasing linearly, the last computation
    // should make up less than 10% of the total computation.

    expect(actualDurRatio).toBeLessThan(0.1);
  });
});

