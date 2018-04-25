// Do not change any of the function names

function invokeCallback(cb) {
  cb();
}

function sumArray(numbers, cb) {
  const sum = numbers.reduce(function(accumulator, item){
    return accumulator + item;
  });
  cb(sum);
}

function forEach(arr, cb) {
	arr.forEach(function(value) {
		cb(value);
	});
}

function map(arr, cb) {
  const newArr = [];
  arr.forEach(element => {
    newArr.push(cb(element));
  });
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
