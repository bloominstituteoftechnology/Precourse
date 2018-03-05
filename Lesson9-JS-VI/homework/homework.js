// Do not change any of the function names

function invokeCallback(cb) {
  cb();
}

function sumArray(numbers, cb) {

  const total = numbers.reduce(function(accumulator, item) {
    return accumulator + item;}
  );
  cb(total);
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
}

function forEach(arr, cb) {
  function itterate(val){
    cb(val);
  }
  arr.forEach(itterate);
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
}
//function map(arr, cb) {
  //newArr = cb(each item in the array)
//return newArr
//}

function map(arr, cb) {
  newArr = [];
  for (i=0; i< arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

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
