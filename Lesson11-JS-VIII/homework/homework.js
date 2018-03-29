// Do not change any of the function names

// solve these recursively
// Recursion needs to use the same three parts but it is written differently.

//     function looper(n) {
//         if (n > 5) return;
//         console.log(n);
//         looper(n + 1);
//     }
//     looper(1);
//     // prints 1, 2, 3, 4, 5
// The code above will have the same result as the for loop used up above. It also has the same three pieces of the for loop as shown above.

// n is the variable we are using to keep track of our iteration.
// Instead of a truth condition that must be true to keep going like in our for loop we have a base case. The base case says "stop when false".
// We move towards satisfying the base case by modifying n.

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n < 0) 
    return -1;
      else if (n === 0) 
        return 1;
        else {
          return (n * nFactorial(n - 1));
    }
  }



function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial: nFactorial,
  nFibonacci: nFibonacci,
};