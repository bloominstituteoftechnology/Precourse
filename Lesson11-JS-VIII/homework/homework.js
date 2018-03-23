// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  var fac = 1;
  while (n !== 0 ){
    fac = fac * n;
    n = n - 1;
  }
  return fac;
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function nFibonacci(n) {
  var a = 0, b = 1, c =1;
  for (var i = 1; i <= n; i++){
    c = a + b;
    a = b;
    b = c;
  }

  return c;
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
