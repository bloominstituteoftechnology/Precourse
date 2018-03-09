// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
 
  if ( n === 1 ){ return 1; } 



  return n * nFactorial( n - 1 );

  } 
 


function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  var array = [0, 1];

  for (var i = 2; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2]);

  }
  return array[n];
}
var n = 9;
var ans = fibonacci(n);

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial: nFactorial,
  nFibonacci: nFibonacci,
};
