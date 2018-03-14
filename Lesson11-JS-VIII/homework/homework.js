// Do not change any of the function names

// solve these recursively


function nFactorial(n) {
  if (n === 0) 
    return 1;
    return n * nFactorial(n - 1);
 }
 
 function nFibonacci(n) {
  if(n===0 || n===1) return 1;
    return nFibonacci(n-2) + nFibonacci(n-1);
 }
 
 
 module.exports = {
  nFactorial,
  nFibonacci,
 };