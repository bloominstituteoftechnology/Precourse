// Do not change any of the function names

function invokeCallback(cb) {
  cb();
}


function sumArray(numbers, cb) {
  let result = numbers.reduce(function(acc, item) {
    return acc + item; 
 });
 cb(result);
}


function forEach(arr, cb) {
  arr.forEach(cb);
}

function map(arr, cb) {
  let mappedArray = arr.map(cb);
  return mappedArray;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
