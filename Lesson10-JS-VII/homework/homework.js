// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let funcInvokeCounter = 0;

  return function counter() {
  return funcInvokeCounter += 1;
  }

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

// let cache = {};
//
// return function (arg) {
// let cache = {};
//
// return function (arg) {
//
//  if (cache.hasOwnProperty(cb(arg))) {
//    cache[arg] = cb(arg);
//    return cache[arg];
//  } else {
//    return cb(arg);
//  }
//  return cache;
// }

let cache = {}; // cache (object) creation

return function (arg) { // closure with single argument that invokes cb

 if (cache.hasOwnProperty(arg) === false) { // checking to see if value exsists within cache (object)
   cache[arg] = cb(arg); // if value doesn't already exsist within cache this statement invokes cb adds value to cache
 }
 return cache[arg]; // returns cache value (arg). if value (arg) already exists in cache cb is not invoked
}
}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
