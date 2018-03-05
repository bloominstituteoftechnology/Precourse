// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  if (n != 1) {
    return n * nFactorial(n-1); 
  }
  else return 1;
}

function nFibonacci(n) {
  let arr = [1, 1, 2];
 for (i = 2; arr.length < (n + 2); i + arr[i++]) {
  i = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(i);
 }
 return arr[n];
 }
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
 
// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
