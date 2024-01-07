  function receivesAFunction(callback) {
    callback();
  }
  
  function callbackFunction() {
    console.log("Callback function called!");
  }
  
  receivesAFunction(callbackFunction);

  function returnsANamedFunction() {
    function namedFunction() {
      }
      return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {
    }
  }