// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
  cb();
}

function sumArray(numbers, cb) {
  let sum = 0;  
  for (let i = 0; i < numbers.length; i++) { 
    sum += numbers[i];  // sum up all of the integers in the numbers array  
    
  }
  cb(sum);// pass the result to cb
  // no return is necessary
}
  
  


function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  for (let i = 0; i < arr.length; i++) {
    // hint: you will be invoking cb multiple times 
    //(once for each value in the array)
    cb(arr[i]); 

  }  
  return cb;
}

function map(arr, cb) {
  // create a new array
  const mappedArray = [];
  // iterate over each value in arr, 
  //pass it to cb, then place the value
  // returned from cb into the new arr
  // the new array should be the same length as the array argument
  for (let i = 0; i < arr.length; i++) {
    let result = cb(arr[i]);
    mappedArray[i] = result;    
  }
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
