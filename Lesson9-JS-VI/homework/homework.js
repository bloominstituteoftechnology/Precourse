// Do not change any of the function names

function invokeCallback(cb) {
  return cb();
  // invoke cb
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  const nums = [1,2,3,4,5,6,7];
  function sumFunc(currentSum, number){
    return currentSum + number
  }
  const sum = nums.reduce (function(accumaltor, item){
    return accumulator + item;
  }, 100);
}
 
function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  const cars = ['ford','chevorlet', 'Toyota','Tesla'];
  function printCar(car){
    (car + 'is a car Brand');
  }
  }
cars.forEach(printCar);

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
 
 const cars = ['ford', 'chevorlet','Toyota','Tesla'];
 function printCar(car){
   return car + 'is a car brand!';
 }
 }
const newArr = cars.map(function(car){
  return car + ' is a car!';});



// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
};
