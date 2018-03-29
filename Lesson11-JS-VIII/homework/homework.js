// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  return (n <= 1) ? n : (n * nFactorial(n - 1));

  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function nFibonacci(n) {
  if(n <= 1){
  	return 1;
  }
    return nFibonacci(n - 1) + nFibonacci(n - 2);
     
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
