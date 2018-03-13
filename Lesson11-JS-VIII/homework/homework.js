// Do not change any of the function names

// solve these recursively


function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
 //recursive
   if (n === 0) {
    return 1;
  }
  
  
  return n * factorial(n - 1);
}

 factorial();

  

    


function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  var a = 1;
  var b = 0;
  var c = null;
  while (n > 1) {
    c = a;
    a = b + a;
    b = c;
    n--;
  }
  return b;
}

  
   
// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial: nFactorial,
  nFibonacci: nFibonacci,
};
