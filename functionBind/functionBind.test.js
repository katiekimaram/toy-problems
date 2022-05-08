var alice = {
  name: 'alice',
  shout: function(){
  alert(this.name);
  }
};

describe('',() => {
  test('', () => {
    var boundShout = bind(alice.shout, alice);
    boundShout(); // alerts 'alice'
    boundShout = bind(alice.shout, {name: 'bob'});
    boundShout(); // alerts 'bob'

  });
  
  test('', () => {
    var func = function(a, b){ return a + b };
    var boundFunc = bind(func, null, 'foo');
    var result = boundFunc('bar');
    result === 'foobar'; // true
  
  });
});

describe('',() => {
  test('', () => {
    * var boundShout = alice.shout.bind(alice);
    * boundShout(); // alerts 'alice'
    * boundShout = alice.shout.bind({name: 'bob'});
    * boundShout(); // alerts 'bob'

  });
  test('', () => {
    * var func = function(a, b){ return a + b };
    * var boundFunc = func.bind(null, 'foo');
    * var result = boundFunc('bar');
    * result === 'foobar'; // true

  });
});