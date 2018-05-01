// Do not change any of the function names

function invokeCallback(cb) {
  cb();
}

function sumArray(numbers, cb) {
  cb(numbers.reduce(function(acc, val) {
    return acc + val;
  }));
}

function forEach(arr, cb) {
  arr.map(cb);
  // Alternate
  // arr.forEach(function(val) {
  //   cb(val);
  // });
}

function map(arr, cb) {
  let newArr = [];
  arr.map(function(val) {
    newArr.push(cb(val));
  });
  // Alternate
  // arr.forEach(function(val) {
  //   newArr.push(cb(val));
  // });
  return newArr;
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
