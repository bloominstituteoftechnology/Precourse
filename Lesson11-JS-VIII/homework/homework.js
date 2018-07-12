// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  return(n === 0? 0 : n === 1 ? 1 :n * )
  
  if(isNaN(n)){
    console.log("enter a number")
    return 0
   }
     if(n === 0) {
         return 1
     } else {
         return n * nFactorial(n - 1);
     }
     
 }


function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  n < 3 ? 1 :(nFibonacci(n - 1) + nFibonacci(n - 2)) ;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
