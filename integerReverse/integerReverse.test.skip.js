const reverseInteger = require('./integerReverse');

describe('Reverse Integer', () => {
  // should return the reverse number
  it('should return the reverse number', () => {
    expect(reverseInteger(321)).toBe(123);
  });
  // should not use string in method
  it('should not use string in method', () => {

  });
  // should not use array in method
  it('should not use array in method', () => {

  });
  // should only use math and integers
  it('should only use math and integers', () => {

  });
  // should account for negative numbers
  it('should account for negative numbers', () => {
    expect(reverseInteger(-321)).toBe(-123);
  });
});