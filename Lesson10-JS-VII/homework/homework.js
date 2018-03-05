// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  var newCounter = 0;
  return function counter(){
    return newCounter = newCounter + 1;
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
  // and return 25 directly and will not invoke cb again
  var cache = {};
  return (number) => {
    if (Object.prototype.hasOwnProperty.call(cache, number)) return cache[number];
    cache[number] = cb(number);
    return cache[number];
  }
}

//You'll be returning a function, declare an object outside of the return //function to store objects. It could also be an array, but object is //easier.

//define an object cache
//return a function that accepts a value
//  if the value is a key in our object cache
 //   return the value at object key
 // else
 //   set object key to equal cb passed in with value
 //   return the value at object key

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
