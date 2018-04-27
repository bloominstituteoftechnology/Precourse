// Do not change any of the function names

function counter() {
    let counter = 1;
    return function() {
    return counter++;
  }
}
 
  


function cacheFunction(cb) {
 let cache = {};
  return function(arg) {
   if(arg in cache) {
     return cache[arg];
    } else {
     cache[arg] = cb(arg);
     return cache[arg];
   }
  }
}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
