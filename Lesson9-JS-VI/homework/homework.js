// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb


cb();
}

function sumArray(numbers, cb) {

    var result=numbers.reduce(function(sum, currentValue) {
       return sum + currentValue;
    });
   
    cb(result);
   
   };
 

 
 
 

  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary


  function forEach(arr, cb) {
    var i;
    for (i = 0; i < arr.length; i++){
      cb(arr[i]);
    }
  }


  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)

function map(arr, cb) {
  let newArr = [];
 for(let i = 0; i < arr.length; i++) {
   let item = cb(arr[i]);
   newArr.push(item);
   }
 return newArr;
}

  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument


// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
};