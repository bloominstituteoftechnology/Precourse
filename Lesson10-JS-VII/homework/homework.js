// Do not change any of the function names

function counter() {
 let x = 0;
function newCounter() {
  x++;
  return x;
  }

return newCounter;

  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
}


function cacheFunction(cb) {
let cache = {};
function cacheFunction(x) {
if(x in cache) {
    return cacheFunction(x);
  }
  else {
     cache === cacheFunction(x);
    return cb(x);
   }
 }
 // use closure to create a cache for the cb function
 // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
