// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
    if(n > 1) {
    n = n * nFactorial(n-1);
    return n;
  }
  return n;
}
//nFact(3)

  //nFact(2)

    //nFact(1)

      //nFact(0)
      //r//0

    //r//3
  //r//
function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if(n>3) {
      return nFibonacci(n-1) + nFibonacci(n-2);
      
  }else{return n}

   
    
    //F(1) = 1
    //F(n) = F(n-1) + n
  
  
  
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
