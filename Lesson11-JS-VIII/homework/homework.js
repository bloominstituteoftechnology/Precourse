// Do not change any of the function names

// solve these recursively

function nFactorial(n) {

  let sum = 1;

  function factorial(n){
    if(n < 1) {
      return sum;
    }
    sum = sum * n;
    return factorial(n - 1);
  }

  return factorial(n);

  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function nFibonacci(n) {

  function fibonacci(n){
    if (n <= 1){
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  return fibonacci(n);
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
