// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n === 0 || n === 1) {
    return 1;
  }

  var factorial = n;

  while (n > 1) {
    n--;
    factorial = factorial * n;
  }

  return factorial;
}


function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
 var x = 0;
  var y = 1;

  for (var i = 0; i < n; i++) {
    var tmp = y; 
    y = tmp + x; 
    x = tmp;
  }

  return y;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
