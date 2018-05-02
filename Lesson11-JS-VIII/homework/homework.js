// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n === 1) {
    return 1;
  } else {
    return n * nFactorial(n - 1);
  }
}

function nFibonacci(n) {
  if (arguments[1] === undefined) {
    arguments[1] = 1;
    arguments[2] = 1;
  }
  const num1 = arguments[1];
  const num2 = arguments[2];

  if (n === 1) {
    return arguments[2];
  } else {
    return nFibonacci(n - 1, num2, num1 + num2);
  }
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};