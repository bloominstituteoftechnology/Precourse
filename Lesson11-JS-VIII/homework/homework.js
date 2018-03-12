// Do not change any of the function names

// solve these recursively
var f = [];

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
 //recursive

 if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = nFactorial(n-1) * n;
} 

  

    


function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

    
  
    if (num <= 1) return 1;



    return nFibonacci(num - 1) + nFibonacci(num - 2);
  
  }
  
   
// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial: nFactorial,
  nFibonacci: nFibonacci,
};
