// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
  return cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
const answer = numbers.reduce(function(accum, item) {
  return accum + item;
});
cb(answer);
}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
arr.forEach(function(item) {
  return cb(item);
});
}

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
var newArray = [5,7,8,9,3];
newArray = arr.map(function(item){
  return cb(item);
});
return newArray;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
