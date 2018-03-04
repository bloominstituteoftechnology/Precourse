// Do not change any of the function names

function invokeCallback(cb) {
  return cb();
}

function sumArray(numbers, cb) {
  var sum  = numbers.reduce(function(total, currValue) {
    return total + currValue;
  });
  cb(sum)
}

function forEach(arr, cb) {
  arr.forEach(cb);
}

function map(arr, cb) {
  return arr.map(cb);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
