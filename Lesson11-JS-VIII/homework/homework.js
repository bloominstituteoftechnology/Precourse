// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if(n <= 1)
  { return 1; }

  return n * nFactorial(n-1);

}

// Please note that I believe the testing for this question is not in line
// with the true, fibonacci sequence which begins with 0 1 1 2 3 5 8 ......
// The following code satisfies the test parameter
function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1)
  { return 1; }

  return nFibonacci(n-1) + nFibonacci(n-2);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
