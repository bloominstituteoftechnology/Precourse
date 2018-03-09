// Do not change any of the function names

function invokeCallback(cb) {
  cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary

  /*let sumOfIntegers = numbers.reduce(function (accumulator, item) {
    return accumulator + item;
    }; */

  let sumOfIntegers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfIntegers += numbers[i];
  }

cb(sumOfIntegers);
  
}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument

  /*
  let newArr = arr.map(function(item) {
    return cb(item);
  });
  */

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }

  return newArr;
  
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
