// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  let factorialNum=n;
  if (factorialNum<2){
      return factorialNum;
  }
  console.log(factorialNum);
  return factorialNum*nFactorial(factorialNum-1);
}
// nFactorial(6);

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n<=0){
      return n;
  }
  else if (n===1) {
    return 1;
  } else if (n===2){
    return 2;
  }
  else {
//    console.log(n);
    return (nFibonacci(n-1) + (nFibonacci(n-2)));
  }
}
//nFibonacci(6);

// Do not modify code below this line.
// --------------------------------


module.exports = {
  nFactorial,
  nFibonacci,
};