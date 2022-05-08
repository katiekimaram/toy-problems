const deepEquals = require('./deepEquality');

describe('Deeply Equals', () => {
  test('Should equal true when the objects match', () => {
    var result = deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}});
    expect(result).toEqual(true);
  });

  test('Should equal false when the objects do not match', () => {
    var result = deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}});
    expect(result).toEqual(false);
  });
});