// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  if (n != 1) {
    return n * nFactorial(n-1); 
  }
  else return 1;
}

var cache = {};
function nFibonacci(n) { 
  if (n <= 1) {
    return 1;
    }
  }
  if (n in cache) {
    return cache[n];
  }
  var value = nFibonacci(n - 1) + nFibonacci(n - 2);
  cache[n] = value;
  return value;
}
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
 
// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
