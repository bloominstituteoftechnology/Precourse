// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
    
    let counter = 1;
    innerFn(n);
    
    function innerFn(i) {
        if (i < 1) {
            return;
        }
        counter = counter * i;
        innerFn(i-1);
    };
    
    return counter;
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
    let counter = 1;
    let a = 1, b = 1;
    innerFn(1);
    
    function innerFn(i) {
        if (i === n) {
            return;
        }
        counter = a + b;
        a = b;
        b = counter;
        innerFn(i+1);
    }
    
    return counter;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
