// Do not change any of the function names

function invokeCallback(cb) {
  return cb();
  // invoke cb
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  const sum = numbers.reduce(function(accumulator, currentValue) {

    accumulator = accumulator + currentValue

    return accumulator;

  });

  cb(sum);

}


function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  return arr.forEach( function(value) { cb(value); }); 

}


function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
 
  return arr.map( function(value) { return cb(value); }); 

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
}
