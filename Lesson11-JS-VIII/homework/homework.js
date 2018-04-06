// Do not change any of the function names
// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
   if (n < 2) {
     return n;
   }
   return n* nFactorial(n - 1);
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 3){
    return n;
  }
  let num = nFibonacci(n-2) + nFibonacci(n-1);
  return num;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
