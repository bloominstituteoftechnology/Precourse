// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return function() {
    count += 1;
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
  
    //function to check if an argument has already been entered as an argument to callback function, and returns output if so, otherwise returns false
    function checkCache (historicArr, test) {
      let result = false;
      historicArr.forEach(function(recordArr) {
        if (recordArr[0] === test) {
          result = recordArr[1];
        }
      });
      return result;
    }

  //cache holds an array of prior calls of the cb function, which holds arrays of the argument and return output for each call respectively 
  let cache = [];
  
  //function to be returned, that will contain cache closure
  let cacherFunc = function (callbackInput) {
    
    //uses checkCache to search cache array for the cb's input, saves the result
    let cacheSearchResult = checkCache(cache, callbackInput);

    //if cache search found a prior cb call with the same argument, returns that cb output
    if (cacheSearchResult !== false) {
      return cacheSearchResult;
    }

    //If no prior matching cache search, calls callback function with input, and then adds the input and output to cache before returning the output
    let callbackOutput = cb (callbackInput);

    cache.push([callbackInput, callbackOutput]);
    return callbackOutput;
  };
  return cacherFunc;
}




// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
