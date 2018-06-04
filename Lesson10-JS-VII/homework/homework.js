// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count=0;
  return (function() { return (count = count + 1);} );
}

function cacheFunction(cb) {
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
  
  // need a lookback structure of some sort - keying input with output and function.
  
  // create object
  const lookBackObj = {
    inputVar : -99,
    inputFunct : function (){},
    output : 123,
    countCb : 0  };

  return function(arg) {
    if ((arg === lookBackObj.inputVar) && (cb === lookBackObj.inputFunct)) {
      return lookBackObj.output;
    } else {
      lookBackObj.output = cb(arg);
      lookBackObj.inputVar = arg;
      lookBackObj.inputFunct = cb;
      lookBackObj.countCb = lookBackObj.countCb + 1;
      return lookBackObj.output;
    }
  };
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
