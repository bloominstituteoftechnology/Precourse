// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n === 1) {
    return n * 1;
  }
  let f = n * nFactorial(n-1) ;
  return f;
}

let fib= [];
function nFibonacci(n) {
  if (n === 0) {
    return 1;
  }
  else if (n === 1) {
    return 1;
  }
  let f = nFibonacci(n-2) + nFibonacci(n-1) ;
  return f;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
