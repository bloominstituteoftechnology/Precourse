// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let c = 1;

  return () => {
    return (() => c++)();
  };
}

const cache = {};

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

  let addToCache = obj => Object.assign(cache, obj);

  // property names cannot be numbers
  let isInCache = key => Object.keys(cache).includes(key.toString());

  let handleAddToCache = k => {
    let obj = {};
    obj[k] = cb(k);
    addToCache(obj);
    return obj[k];
  };

  return k => (isInCache(k) ? cache[k] : handleAddToCache(k));
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter: counter,
  cacheFunction: cacheFunction
};
