// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  let factorial = 1;
  product(n);
  function product(i) {
    if (i < 2) {
      return;
    }
    factorial *= i;
    product(i - 1);
  }
  return factorial;
}
/** Alternate
 *  function nFactorial(n) {
      if (n <= 1) {
        return 1;
      }
      return (n * nFactorial(n-1));
    }
 */

function nFibonacci(n) {
  if (n <= 2) {
    return n;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}
/** Correct Fibonacci numbers
 *  function nFibonacci(n) {
      if (n < 2) {
        return n;
      }
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
 */

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
