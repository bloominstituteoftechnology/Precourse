function invokeCallback(cb) { // Do not change any of the function names
  // invoke cb
  cb();
}


function sumArray(numbers, cb) {
  // let number = [numbers];
  // numbers.reduce(function(accum, arrayItem){
  //   cb(accum + arrayItem);
  // });
  let result = 0;  
  for (let i = 0; i < numbers.length; i++) { 
    result += numbers[i];  // sum up all of the integers in the numbers array     
  }  // no return is necessary
  cb(result);// but pass the result to cb
}
  

function forEach(arr, cb) {    // hint: you will be invoking cb multiple times 
                              //(once for each value in the array)
  for (let i = 0; i < arr.length; i++) {  // iterate over arr 
    cb(arr[i]); // and pass its values to cb one by one
  }  
  return cb;
}


function map(arr, cb) {
  const mappedArray = [];  // create a new array
  for (let i = 0; i < arr.length; i++) {  // iterate over each value in arr, 
    let result = cb(arr[i]);  //pass each value to cb, 
    mappedArray[i] = result;   // then place the value returned from cb into the new arr 
  }
  return mappedArray;  // the new array should be the same length as the array argument
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
