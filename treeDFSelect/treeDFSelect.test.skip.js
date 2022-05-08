const Tree = require('./TreeDFSelect.js');

describe('Tree DF Select', () => {

  var root1 = new Tree(1);
  var branch2 = root1.addChild(2);
  var branch3 = root1.addChild(3);
  var leaf4 = branch2.addChild(4);
  var leaf5 = branch2.addChild(5);
  var leaf6 = branch3.addChild(6);
  var leaf7 = branch3.addChild(7);

  it('Tree should exist', () => {
    expect(Tree).toBeDefined();
  });

  it('DFSelect should be a function', () => {
    expect(typeof root1.DFSelect).toBe('function');
  });

  it('DFSelect should return an array', () => {
    expect(Array.isArray(root1.DFSelect(()=>{}))).toBeTruthy();
  });

  it('DFSelect should return all nodes in the tree if filter always returns true', () => {
    var alwaysTrue = root1.DFSelect(function (value, depth) {
      return value;
    });
    expect(JSON.stringify(alwaysTrue)).toBe(JSON.stringify([1,2,4,5,3,6,7]));
  });

  it('DFSelect should return all nodes passing the filter', () => {
    var passing = root1.DFSelect(function (value, depth) {
      return value % 2;
    });
    expect(JSON.stringify(passing)).toBe(JSON.stringify([1, 5, 3, 7]));
  });

  it('DFSelect should allow filtering by depth', () => {
    var filterByDepth = root1.DFSelect(function (value, depth) {
      return depth === 1;
    });
    expect(JSON.stringify(filterByDepth)).toBe(JSON.stringify([2, 3]))
  });
});