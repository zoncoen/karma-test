// /src/greet.js
var Greet = (function() {
  function Greet() {}
  Greet.prototype.hello = function(v) {
    if (v) {
      return 'Hello, ' + v + '!';
    }
    else {
      return 'Hello, guest!';
    }
  };
  return Greet;
})();
