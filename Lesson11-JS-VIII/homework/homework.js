// Do not change any of the function names

// solve these recursively

  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  function nFactorial(n) {
      if (n === 1) {
        return 1;
      }
        return n * nFactorial(n-1);
      }

  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  function nFibonacci(n) {
    if (n === 1) {
      return 1;
    }  else if (n === 2) {
        return 2;
    } else {
      return nFibonacci(n-1) + nFibonacci(n-2);
    }
  }
// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
