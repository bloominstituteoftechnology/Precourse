// //Feynman Writing Prompts -

// * Recursion - Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. Most loops can be rewritten in a recursive style, and in some functional languages this approach to looping is the default.

// Do not change any of the function names

// solve these recursively

function nFactorial(n, productSoFar) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n === 0) {
    return 1;
  } else {
    return n * nFactorial(n - 1);
  }
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) {
    return 1;
  } else {
    return nFibonacci(n - 2) + nFibonacci(n - 1);
  }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci
};
