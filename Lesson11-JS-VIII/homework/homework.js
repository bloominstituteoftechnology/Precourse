// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
	let i = n, k = i * (i-1);
	i = i - 2;
	function GetIt(){
		if(i != 0){
			k = k * i;
			i--;
			return GetIt();
		} else {
			return k;
		}
	}
	return GetIt();
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

	let Stop = n-1, Place1=0, Place2=1;
	let GR = [1,2]; // GR is for 'Golden Ratio'
	function AisBisC(){
		let Here = GR[Place1] + GR[Place2];
		if(Place2 != n){
			GR.push(Here);
	
			Place1++;
			Place2++;
			
			return AisBisC();
		} else {
		
			return GR[Stop];
		}
	}
	return AisBisC();
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
