// Do not change any of the function names

function invokeCallback(cb) {
  return cb();
  // invoke cb
}

function sumArray(numbers, cb) {
  var sum = 0;
  for(var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  cb(sum);


  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
}

function forEach(arr, cb) {
    var i;
    for (i = 0; i < arr.length; i++){
      cb(arr[i]);
    }
  }
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)



function map(arr, cb) {
  const newArray = [];
  for (var i = 0; i < arr.length; i++) {
      newArray.push(cb(arr[i]));
  }
  return newArray;
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
