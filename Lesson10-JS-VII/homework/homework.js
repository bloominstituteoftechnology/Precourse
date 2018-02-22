// Do not change any of the function names

function counter() {
  let x = 0;
  return function() {
    x++;
    return x;
  };
}

function cacheFunction(cb) {
  var cache = [];
  return function(arg) {
    if (cache[0] === arg) {
      return cache[1];
    } else {
    var result = cb(arg);
    cache = [arg, result];
    return result;}
  };


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
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter: counter,
  cacheFunction: cacheFunction,
};
