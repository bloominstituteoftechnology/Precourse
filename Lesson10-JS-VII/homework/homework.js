// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  var n = 1;
  return function newCounter() {
    return ++n;
  };
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
  const myObj = {};
  return function cache(cb) {
    if (!myObj.hasOwnProperty(cb)) {
      myObj[cb] = cb * cb;
      return myObj[cb];
    }
    else {
      return myObj[cb];
    }
  };
  //var check = cache(cb;)
  //cache(cb); 
  }

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
