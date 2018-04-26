// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)

  let counter = 1;
  innerRecursion(n);

  function innerRecursion(i) {
   if (i < 1) return;
   counter = counter * i;
   innerRecursion(i-1);
  }
  return counter;
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) {
    return n;
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
