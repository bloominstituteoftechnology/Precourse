// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n > 1)
    n = n * nFactorial(n - 1);
  return n;
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let num1 = 1;
  let num2 = 2;
  let sum = 3;
  if (n == 0)
    return 0;
  if (n == 1)
    return 1;
  if (n == 2)
    return 1;
  if (n == 3)
    return 2;
  //n -= 1;


  function fibFunction(n) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    if (n > 4)
      fibFunction(n - 1);
    return sum;
  }
  return fibFunction(n);
}

for (let i = 0; i < 15; i++) {
  console.log(i, nFibonacci(i));
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial: nFactorial,
  nFibonacci: nFibonacci,
};
