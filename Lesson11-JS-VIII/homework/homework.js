// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
     if (n < 0) {
          return -1;
    }  
    else if (n === 0) { 
        return 1;
    }
      else {
          return (n * nFactorial(n - 1));
      }
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function nFibonacci(n) {
  let fib = [1,2];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib [i - 2];
  }
  return fib [n - 1]
  }
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence


// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
