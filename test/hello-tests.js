// /test/tests/greet-tests.js
describe('Greeting', function(){
  var g;
  beforeEach(function(){
    g = new Greet();
  });

  it('When string argument is passed in', function(){
    chai.expect(g.hello('Tom')).to.equals('Hello, Tom!');
  });

  it('When an empty argument passed in', function(){
      chai.expect(g.hello()).to.equals('Hello, guest!');
  });
});
