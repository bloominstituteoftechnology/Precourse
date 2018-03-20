// Do not change any of the function names

  // invoke cb
  function invokeCallback(cb) {
    cb();
}

  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  function sumArray(numbers, cb) {
    const finalResult = numbers.reduce(function(accum, item) {
       return accum + item;
    });     cb(finalResult);
}

  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  function forEach(arr, cb) {
    arr.forEach(cb);
}

  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  function map(arr, cb) {
  let newarr = [];
  newarr = arr.map(cb);
  return newarr;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
