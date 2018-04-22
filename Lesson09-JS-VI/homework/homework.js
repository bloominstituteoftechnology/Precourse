// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
    cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
    let result = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });
    cb(result);
}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
    for(let i=0; i<arr.length; i++){
        cb(arr[i]);
    }
}

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
    let newArr = [];
    for(let i=0; i<arr.length;i++) {
        newArr[i] = cb(arr[i]);
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
/* Lecture notes:
Higher Order Functions - have "callback" functions as parameters.

    ~ Use ~
array.forEach(callback) - higher order method/function has 1 parameter(function) and no return value. What do we want to do for each item?

    - Used for neater, elegant, readable code
    - Allows one logic in our codebase that uses different functions as parameters === Dry Programming
    - Helps the program run faster
    - Used for non-specific operations/variety of function combinations
    * Save functions to const if you're going to use it more than once; otherwise, pass an anonymus in Higer Order Functions.
    
We may write an anonymus function as a callback function.

.map() returns mapped version of an array and takes 1 parameter. We're getting a copy of amutated array.

While writing a Higher Order Function, it is our job to exicute it. We don't execute a function when we are calling it. 
Ex: array.forEach(callback), not array.forEach(callback()).

    ~ Under the Hood ~
.forEach breakdown:
    1. Takes in an array and callback parameters
    2. Loops through array items (array[i]) 
    3. Applies the function to every item
    4. No return
    
.map breakdown:
    1. Takes in an array and callback parameters
    2. Has an empty array in the setup
    3. Loops through array items (array[i])
    4. Applies the function to every item while updating the new 'mapped' array
    5. Returns a new array after loop execution
    
array.reduce(callbackFunction(accumulator, currentValue)) - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
    * takes a callback with 2 parameters

Callback function naming convention: callback or cb
*/