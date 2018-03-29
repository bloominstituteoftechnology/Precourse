// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
  cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  let total = 0;
  for(let i=0; i<numbers.length; i++) {
    total += numbers[i];
  }
  cb(total);
}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
//  for( let i=0; i<arr.lenth; i++){
//    cb(arr[i]);
//  }
  let newArray = arr.map(function(item){
    return cb(item);
  });
  return newArray;
  
}
  

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  var newArray = [];
  for (let i=0; i<arr.length; i++){
   var top = cb(arr[i]);
    newArray.push(top);
  } return newArray;
  
  }


// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
