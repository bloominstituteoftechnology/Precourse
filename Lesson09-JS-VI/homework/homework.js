// Do not change any of the function names


// invoke cb
function invokeCallback(cb) {

  cb();
}


// sum up all of the integers in the numbers array
// pass the result to cb
// no return is necessary

function sumArray(numbers, cb) {
  cb(numbers.reduce(function(a, b) {
    return a + b;
  }, 0));
}



// iterate over arr and pass its values to cb one by one
// hint: you will be invoking cb multiple times (once for each value in the array)

function forEach(arr, cb) {
  for (var i = 0; i <= arr.length - 1; i++) {
    cb(arr[i]);
  }
}

function map(arr, cb) {
  // create a new array
  let newArray = [];
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  for (var i = 0; i <= (arr.length - 1); i++) {
    newArray.push(cb(arr[i]));
  }
  return newArray;
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
