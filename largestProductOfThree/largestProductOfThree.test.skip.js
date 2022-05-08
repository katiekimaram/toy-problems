const largestProductOfThree = require('./largestProductOfThree');

describe ('Largest Product of Three', () => {
  it('should return a number', () => {
    expect(typeof largestProductOfThree([2, 3, 7])).toBe('number');
  });

  it('should handle an array length of 3 with all positive values', () => {
    expect(largestProductOfThree([2, 3, 7])).toBe(42);
    expect(largestProductOfThree([1, 2, 3])).toBe(6);
  });


  it('should handle an array length longer than 3 for all positive values', () => {
    expect(largestProductOfThree([2, 5, 3, 7])).toBe(105);
    expect(largestProductOfThree([11, 7, 5, 3, 2])).toBe(385);
    expect(largestProductOfThree([2, 13, 7, 3, 5, 11])).toBe(1001);
    expect(largestProductOfThree([2, 11, 13, 7, 13, 3, 11, 5])).toBe(1859);
  });

  it('should handle negative numbers', () => {
    expect(largestProductOfThree([2, 3, -11, 7, 5, -13])).toBe(1001);
    expect(largestProductOfThree([-1, -2, -3, -4, -5, -6])).toBe(-6);
    expect(largestProductOfThree([-31, 41, 34, -37, -17, 29])).toBe(47027);
  });
});