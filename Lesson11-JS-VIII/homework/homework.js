// Do not change any of the function names

// solve these recursively

function nFactorial(n, factorSoFar) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  factorSoFar = factorSoFar || 1;
  if(n < 1){
	return factorSoFar;
  }
  factorSoFar *= n;
  return nFactorial(n-1, factorSoFar); 
}

function nFibonacci(n, progress) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  progress = progress || {};
  if (progress[n]) return progress[n];
  if(n<=1) return 1;
  return progress[n] = nFibonacci(n - 1, progress) + nFibonacci(n - 2, progress);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
