// Do not change any of the function names
 function invokeCallback(cb) {
  function greeting() {
    console.log("Hello There");
  };

  function higherOrderFn(callback) {
    console.log('Higher order function');
    callback();
  };
  // invoke cb

  higherOrderFn(greeting);

}

function sumArray(numbers, cb) {

  const array [1,2,3,4,5];

  const sum = function(arrayItems){
    for(i=0; i<arrayItems.length; i++){
      i+arrayItems[i];
    }
  }
  array.forEach(array, sum);
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
}

function forEach(arr, cb) {
  const array[1,2,3,4,5];

  const iterate = function(arrayItems, callback){
    const newArray = [];
    for(i=0; i<array.length; i++) {
      let result = callback(array[i]);
      newArray[i] = result;
    };

    return newArry;
  }

  brandNew(array, function(iterate) {
    return iterate;
  })
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
}

function map(arr, cb) {
    const array[1,2,3,4,5];

  const iterate = function(arrayItems, callback){
    const newArry = [];

    for(i=0; i<array.length; i++) {
      let result = callback(array[i]);
      newArry[i] = result;
    };

    return newArry;
  }

  brandNew(array, function(bland) {
    return bland;
  })
  // it
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
