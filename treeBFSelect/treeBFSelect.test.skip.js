const Tree = require('./treeBFSelect');

describe('treeBFSelect', () => {
  var root1 = new Tree(1);
  var branch2 = root1.addChild(2);
  var branch3 = root1.addChild(3);
  var leaf4 = branch2.addChild(4);
  var leaf5 = branch2.addChild(5);
  var leaf6 = branch3.addChild(6);
  var leaf7 = branch3.addChild(7);

  it('should return a filtered array', () => {
    var result = root1.BFSelect(function (value, depth) {
      return value % 2;
    });

    expect(result).toEqual(expect.arrayContaining([1]));
    expect(result).toEqual(expect.arrayContaining([3]));
    expect(result).toEqual(expect.arrayContaining([5]));
    expect(result).toEqual(expect.arrayContaining([7]));
  });

  it ('should be able to limit and check depth', () => {
    var result = root1.BFSelect(function (value, depth) {
      return depth === 1;
    })

    expect(JSON.stringify(result)).toBe(JSON.stringify([2,3]));
  });

});