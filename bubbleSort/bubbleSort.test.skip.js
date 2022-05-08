const bubbleSort = require('./bubbleSort')

describe('', () => {

  it('should sort an array numerically', () => {
    var numerically = [1, 2, 43, 100, 100, 21, 21];
    expect(JSON.stringify(bubbleSort(numerically))).toBe('[1,2,21,21,43,100,100]');
  });

  it('should sort arrays with decimal numbers', () => {
    decimal = [24.7, 24.3, 23, 9, 3, 3, 100, 25, 100];
    expect(JSON.stringify(bubbleSort(decimal))).toBe('[3,3,9,23,24.3,24.7,25,100,100]')
  });

  it('should sort reverse sorted arrays', () => {
    var reverse = [4, 3, 2, 1, 5];
    expect(JSON.stringify(bubbleSort(reverse))).toBe('[1,2,3,4,5]')
  });

  it('should sort arrays with negative numbers', () => {
    var negative = [20, -10, -10.1, 2, 4, 299];
    expect(JSON.stringify(bubbleSort(negative))).toBe('[-10.1,-10,2,4,20,299]')
  });

});