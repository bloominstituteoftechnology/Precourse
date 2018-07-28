// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
  cb();
}
//invokeCallback(callingBack);

/*function callingBack(cbNum) {
  return cbNum*2;
}
let testArray = [1,2,3,4,6];*/

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  cb(numbers.reduce(function (accumulator,currentValue) {
                      return accumulator + currentValue; }
                    ) 
    );
}
//sumArray(testArray,callingBack);

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  for (let i=0;i<arr.length;i++) {
    cb(arr[i]);
  }
}
//forEach(testArray,callingBack);

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  let newArray =[];
  for (let i=0;i<arr.length;i++) {
    newArray[i] = cb(arr[i]);
  }
  return newArray;
}
//map(testArray,callingBack)


// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
