// Writing Prompts:
//
// Recursion: When a function calls itself (from within itself). You can get similar use out of recursion as you would with a for or while loop. Recursion is espectially useful if you want to process branches of data or branches of a file system because it is more efficient.

// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)

  if(Number(n) < 0) {
    return;
  }
  if(Number(n) === 0 || Number(n) === 1) {
    return 1;
  }
  return Number(n) * nFactorial(Number(n) - 1);
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if(n <= 1) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
