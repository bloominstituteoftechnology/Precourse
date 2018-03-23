 // Do not change any of the function names

function invokeCallback(cb) {
  return cb();
  // invoke cb
}

function sumArray(numbers, cb) {
  cb(numbers.reduce(function(a,b){
    return a + b;
  }));
  
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
}

function forEach(arr, cb) {
  arr.forEach(function(item){
    return cb(item);
  });

  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
}

function map(arr, cb) {
  const narr = [];
  arr.forEach(function(item){
    narr.push(cb(item));
  });

  return narr;


  
  
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
