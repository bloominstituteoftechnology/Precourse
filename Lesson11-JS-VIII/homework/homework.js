// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  const recurseFactorial = ( n, accumulator ) => {
    if (n < 1) {return accumulator;}
    accumulator = accumulator || 1;
    accumulator *= n;
    return recurseFactorial( n - 1, accumulator );
  };
  return recurseFactorial(n);
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  const recurseFibonacci = (n, x, y, answer) => {
    // Variable setup
    x = x || 0;
    y = y || 1;
    // Central logic
    answer = x + y;
    // Break recursion @ n = 1
    if (n === 1) {return answer;}
    // Variable Reassignment
    x = y;
    y = answer;
    // Recurse
    return recurseFibonacci(n - 1, x, y, answer);
  };
  return recurseFibonacci(n);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
