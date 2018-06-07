CALLBACK FUNCTION- A FUNCTION PASSED TO ANOTHER FUNCTION AS AN ARGUMENT.

// Do not change any of the function names

function invokeCallback(cb) {
cb();
  // invoke cb
}

function sumArray(numbers, cb) {
 let result = 0;
for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}
cb(result);
 // sum up all of the integers in the numbers array
// pass the result to cb
 // no return is necessary
 }

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
   cb(arr[i]);
}
 // iterate over arr and pass its values to cb one by one
// hint: you will be invoking cb multiple times (once for each value in the array)
}

function map(arr, cb) {
 let newArray = [];
for (let i = 0; i < arr.length; i++) {
 let r = cb(arr[i]);
 newArray.push(r);
}
return newArray;

// create a new array
// iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
// the new array should be the same length as the array argument

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
