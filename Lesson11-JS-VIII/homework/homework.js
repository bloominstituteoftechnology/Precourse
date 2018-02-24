// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  
  let product = 1;
    
  (function factorial() {
    // Decrement n after product is calculated
    product *= n--;
    // Tirnary operator in place of if else statement
    return n < 2 ? product : factorial();
  })(); // IIFE
  
  return product;
  
  //***  There are other ways to do this but
  //***  I wanted to play around with tirnary
  //***  operators, self executing functions,
  //***  and incrementing tweaks while still
  //***  utilizing the caching technique and
  //***  recursion that were taught in this
  //***  mini bootcamp.

  // Awesome course by the way!

}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  // Initialize fib sequence
  let fibonacci = [1, 2];

  // Populate fib sequence recursively
  (function fibonacciFn() {
    if (n > fibonacci.length) {
      fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
      fibonacciFn();
    }
  })();

  // return nth fibonacci
  return fibonacci[n - 1];
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
