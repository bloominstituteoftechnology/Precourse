// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)

  const yum = function(accumulator, iterator) {
      if (iterator === 1) {
          return accumulator;
      } else {
          return yum((accumulator * iterator), (iterator - 1))
      }
  }
  return yum(1, n)
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  const yum = function(foo, bar, iterator) {
      if (iterator === 1) {return bar;}
      else {
          return yum((foo + bar), foo, (iterator - 1));
      }
  };
  return yum(2, 1, n)
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
