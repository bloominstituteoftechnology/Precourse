const invokeCallback = (cb) => cb();

const sumArray = (numbers, cb) => cb(numbers.reduce((a, c) => a + c));

const forEach = (arr, cb) => arr.forEach(v => cb(v));

const map = (arr, cb) => arr.map(v => cb(v));

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
};
