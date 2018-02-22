// Do not change any of the function names

// solve these recursively
function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)

  // solution with for loop
  // if (n < 1) {
  //   return 1;
  // }
  // var factorial = 1;
  // for (let i = n; i > 0; i--) {
  //   factorial *= i;
  // }
  // return factorial; 

  if (n < 1) {
    return 1;
  }
  return n * nFactorial(n - 1); 
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  // solution with for loop;
  // if (n < 2) {
  //   return 1; 
  // }
  // var result = [1, 1];
  // for (let i = 2; i < n; i++) {
  //   result[i] = result[i - 1] + result[i - 2];
  // }
  // return result[n - 1];

  if (n === 0) {
    return 1;
  } else if (n === 1) {
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
