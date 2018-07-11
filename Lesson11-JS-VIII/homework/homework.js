// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
	let counter = 0;
	innerFN(n);

	function innerFN(i) {
		if(i < 1){
			return;
		}
		counter = counter+i;
		innerFN(i-1);
	}
	return counter;
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

nFactorial(3);

function nFibonacci(n) {
	let fib = 0;

	function nFib(i) {
		if(i < 1){
			return;
		}
		fib = fib+i;
		nFib(i+1)
	}
	return fib;
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
