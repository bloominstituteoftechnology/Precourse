// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  let mul = 1;
  multi(n);
  
  function multi(i){
  if (i < 1){
    return;
  }
  mul *= i;
  multi(i-1);
}
return mul;
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  var fib = []; 

fib[0] = 1;
fib[1] = 2;
for(let i=2; i<=30; i++){
    fib[i] = fib[i-2] + fib[i-1];
}

function retur(fib){
if (n < 1){
  return;
}
fib.forEach(retur);
}
return fib[n-1];
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
