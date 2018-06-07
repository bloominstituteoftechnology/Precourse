//Feynman Writing Prompts

//Closures - A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

// Do not change any of the function names

function counter(count = 0) {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  return function() {
    return ++count;
  };
}

function cacheFunction(cb, cache = {}) {
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
  return function(arg) {
    if (arg in cache) {
      return cache[arg];
    } else {
      cache[arg] = cb(arg);
      return cache[arg];
    }
  };
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction
};
