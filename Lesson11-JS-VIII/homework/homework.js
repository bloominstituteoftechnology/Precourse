// Do not change any of the function names

// solve these recursively

let lookBack = false; 
// lookBack is a variable to reset initial conditions when excuting the 
// routine mutiple times with possibly different arguments

let product = 1; // set initial conditions for first execution

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)

  if (lookBack) {  // we have just run the routine with diferent arguments -> reset
    product = 1;
    lookBack = false;
  }

  if (n <= 1) {
    lookBack = true;
    return product;
  } else {
    product = product * n;
    return nFactorial(n-1);
   } 
  }

// set initial conditions for first execution
let fibNum = 0; // set final value to zero
lookBack = false; 
let n1=0; // position n-2 start value 
let n2=1; // position n-1 start value

function nFibonacci(n) {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  if (lookBack) {  // we have just run the routine with diferent arguments -> reset
    fibNum = 0;
    lookBack = false;
    n1 = 0;
    n2 = 1;
  }
  
  if (n <= 0) {
    lookBack = true;
    return fibNum;
  } else { 
    fibNum = n1 + n2;    
    n1 = n2;    
    n2 = fibNum;       
    return nFibonacci(n-1);    
  }    
}   

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
