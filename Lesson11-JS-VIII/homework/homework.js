// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n === 0 ){
  	return 1;
  } else {
    return n * nFactorial(n-1);
  }
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // **** Using Looping Method ****//
 //  var sequence = [1, 1];
 //  for (var i = 2; i <= n; i++) {
	// 	sequence[i] = sequence[i-1]+ sequence[i-2];
	// }
 //  return sequence[n];
 // Recursive Method...
     if (n === 1) {
	 	return 1;
	 } else if (n === 2) { 
	 	return 2;
	 }
	 return nFibonacci(n - 1) + nFibonacci(n - 2); 
	 
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial: nFactorial,
  nFibonacci: nFibonacci,
};
