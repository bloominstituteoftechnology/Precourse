// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)

  var factSum;
  
  if (n === undefined) {
    return factSum = 0;
  }

  if (n === 0) {
    return factSum = 0;
  }
  
  if (n < 1) {
    return factSum = 0;
  }
  
  if (n === 1) {
    return factSum = 1; 
  }
  
  factSum = n * nFactorial(n-1) ;

  return factSum; 
  
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  function find(nthNumber, current, previous) {
    if (n === 1) {
      return 1;
    }
    else if (n === 2) {
      return 2; 
    }
    else if (nthNumber === n) {
      return current;
    } else {
      return find(nthNumber+1, current + previous, current);
    }
  }
  return find(3,3,2);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
