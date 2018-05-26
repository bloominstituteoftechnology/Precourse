// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  let counter = 1;
  innerFn(n)
  function innerFn(i){
      if (i < 1) {
        return;
      }
      counter = counter * i;
      innerFn (i-1);
    };

    return counter;
 };




function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

let fiboSeq = [1,2,3,5,8,13];
var i;
n = fiboSeq.length;
let counter = 0
logFibo(n)
function logFibo(i) {
  for (let i = 5; i < fiboSeq.length ; i++){
 counter = fiboSeq[i-1] + fiboSeq[i-2];
 fiboSeq[i] = counter;
    logFibo([i+1]);
  };
return fiboSeq[n];
};

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
