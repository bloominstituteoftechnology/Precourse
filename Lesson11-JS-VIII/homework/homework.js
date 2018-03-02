// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  if (n < 2) {
     return 1;
  }
  return n * nFactorial(n - 1);
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

var previousFact = 1;
var fact = 1;
var placeHolder = 1;
var answer = 1;
function nFibonacci(n) {
  if (n<2) {
    answer = fact;
   previousFact = fact = placeHolder = 1;
    return answer;
  }
  placeHolder = fact;
  fact += previousFact;
 previousFact = placeHolder;
  return nFibonacci(n-1);
  // I solved the problem, but I also searched online as my solution wasn't very elegant,
  // I found a solution with very few lines, however I didn't quite like it as the solution was exponential.
  // I ended up sticking to my original linear solution, but really I need to learn memoization.
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
