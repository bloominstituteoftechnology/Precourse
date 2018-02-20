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
  return arr;
}

function map(arr, cb) {
  const newArr = arr.map(cb);
  return newArr;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
};
