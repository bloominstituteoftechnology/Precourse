// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  let numFactor = n;
  let argNum = n;
  if (argNum < 0) {
    return argNum;
  } else if (argNum === 0) {
    return 1;
  } else {
    while (argNum !== 1) {
      numFactor = numFactor * (argNum - 1);
      argNum -= 1;
    }
    return numFactor;
  }

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let First = 0;
  let Second = 1;
  let next = 1;
  for (let i = 2; i <= n + 1; i++) {
    next = First + Second;
    Second = next;
  };
  return next;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
