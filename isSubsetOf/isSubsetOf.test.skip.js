const isSubsetOf = require('./isSubsetOf');

describe('isSubsetOf', () => {
  it('should be defined', () => {
    expect(['commit','push'].isSubsetOf(['commit','rebase','push','blame'])).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof isSubsetOf).toBe('function');
  });

  it('should return true if all of the elements in the first array are in the second', () => {
    expect(['commit','push'].isSubsetOf(['commit','rebase','push','blame'])).toBeTruthy();
  });

  it('should return false if not all of the elements in the first array are in the second', () => {
    expect(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox'])).toEqual(false);
  });


  it('should ignore duplicates', () => {
    expect(['merge','reset','reset'].isSubsetOf(['reset','merge','add','commit'])).toBeTruthy();
    expect(['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog'])).toEqual(true);
    expect(['cat', 'cat', 'dog'].isSubsetOf(['cat'])).toEqual(false);
  });

  it('should handle mixed array', () => {
    expect([1, 'cat', 3].isSubsetOf([4, 3, 'cat', 1])).toEqual(true);
    expect([1, 'cat', 3].isSubsetOf([4, 'cat', 1])).toEqual(false);
  });
});