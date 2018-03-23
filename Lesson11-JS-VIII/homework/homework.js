// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)

  function factorialOfN(start, productSoFar) {

    if (productSoFar === undefined) {
      productSoFar = 1;
    }

    if (start >= 0 && start <= 1) {
      return productSoFar;
    }
    else if (start < 0) {
      return 'Invalid Input';
    }

    productSoFar = productSoFar * start;
    return factorialOfN(start-1, productSoFar);
  }

  return factorialOfN(n);
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  function fib(cont1, cont2, cont3, position) {

    if (n <= 0 || typeof(n) != 'number') {
      return 'Invalid Input';
    }
    else if (position === n) {
      return cont1;
    }

    cont3 = cont1;
    cont1 = cont1 + cont2;
    position = position + 1;
    return fib(cont1, cont3, cont3, position);
  }

  return fib(1,1,1,1);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
