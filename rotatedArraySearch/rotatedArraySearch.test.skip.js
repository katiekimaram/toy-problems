const rotatedArraySearch = require('./rotatedArraySearch');

describe('rotatedArraySearch', () => {
  it ('should be a function', () => {
    expect(typeof rotatedArraySearch).toBe('function');
  });

  it('should return an index value if target exists', () => {
    expect(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)).toEqual(5);
  });

  it ('should return null if the target is nonexistent', () => {
    expect(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)).toEqual(null);
  });

});