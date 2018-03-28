// Do not change any of the function names

// solve these recursively

function nFactorial(n, factorial) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if(factorial === undefined){
    factorial = 1;
  }
  if(n<1) {
    return factorial;
  }
  factorial = factorial * n;
  return nFactorial(n-1, factorial);
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if(n<=1) {
    return 1; 
  }
  return nFibonacci(n-1) + nFibonacci(n-2);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
