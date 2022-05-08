const binarySearch = require('./binarySearchArray');

describe('binarySearchArray', () => {
  test('Should return 0 for 1 in [1, 2, 3, 4, 5]', () => {
    var result = binarySearch([1, 2, 3, 4, 5], 1);
    expect(result).toEqual(0);
  });

  test('Should return 1 for 2 in [1, 2, 3, 4, 5]', () => {
    var result = binarySearch([1, 2, 3, 4, 5], 2);
    expect(result).toEqual(1);
  });

  test('Should return 3 for 4 in [1, 2, 3, 4, 5]', () => {
    var result = binarySearch([1, 2, 3, 4, 5], 4);
    expect(result).toEqual(3);
  });

  test('Should return 4 for 5 in [1, 2, 3, 4, 5]', () => {
    var result = binarySearch([1, 2, 3, 4, 5], 5);
    expect(result).toEqual(4);
  });

  test('Should return 4 for 5 in [1, 2, 3, 4, 5]', () => {
    var result = binarySearch([1, 2, 3, 4, 5], 8);
    expect(result).toEqual(null);
  });
});
