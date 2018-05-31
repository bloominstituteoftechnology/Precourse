// Do not change any of the function names

function counter() {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
   var i =+ 1;
   return function(){
    return (i)++;
  };
  const newCounter = counter();
}

// function cacheFunction(cb) {
//   const storageCache={};
// return cb =function(number){
//     return number + number; }
//     if (storageCache[number]===undefined){    
//       const result = (number + number);
//       storageCache[number] = result;
//     }
    
//        return storageCache[number];
//   };
  
  function cacheFunction(cb) {
    let cache = {};
    return function(arg) { 
        cb(arg);
        if (arg in cache) {
          return cache[arg];
        } else{
         cache[arg] = cb(arg);
          return cache[arg];
        };

        }
      }

    



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



// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
