// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if(n === 1){
    return 1;
  } else{
    return n*nFactorial(n-1);
  }
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let fibmynacc = [1, 1, 2];
  for(i = 2; fibmynacc.length < n + 1; i + fibmynacc[i++]){
    i = fibmynacc[fibmynacc.length - 1] + fibmynacc[fibmynacc.length - 2];
    fibmynacc.push(i);
  }
  return fibmynacc[n];
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
