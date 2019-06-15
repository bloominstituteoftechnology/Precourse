// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0; //The cache is defined outside the function that modifies it to prevent it from being cleared once the function exists.
  return function(){
    count++;
    return count;
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
  
  let result = {}; //It's best to define the result object outside the function so it's not reset once the function exits i.e. always make the cache as global as you can afford to make it.

  return function(x){    
    /*if x is already a key in the result object, return the value of that key*/
    if (result.hasOwnProperty(x)){
    return result.x;
    }
    /*else compute call the function with x, then save the output into the result object using x as the key*/
    else{
      let cbOutput = cb(x);
      result[x] = cbOutput;
      return cbOutput;}
};
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
