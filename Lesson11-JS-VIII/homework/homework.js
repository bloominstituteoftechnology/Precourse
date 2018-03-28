
const nFactorial = n => n < 0 ? -1 : n === 0 ? 1 : n * nFactorial(n - 1);
// const nFactorial = n => n < 1 ? 1 : n * nFactorial(n - 1);

// return the factorial for n
// example:
// the factorial of 3 is 6 (3 * 2 * 1)

// https://jsperf.com/fibonacci-methods-comparison
const nFibonacci = n => n < 3 ? 1 : (nFibonacci(n - 1) + nFibonacci(n - 2));
// fibonacci sequence: 1 1 2 3 5 8 13 ...
// return the nth number in the sequence

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial: nFactorial,
  nFibonacci: nFibonacci,
};
