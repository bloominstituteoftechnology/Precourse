// Do not change any of the function names

// solve these recursively
var f = [];

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
 //recursive

 if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = nFactorial(n-1) * n;
} 

  

    


function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  var fib = function(n){ 
    var x = 0; var y = 1; if(n<=2){
       return n-1; } for(var i = 0; i < n; i++){ 
         var tempY = y; y = tempY + x; x = tempY; } 
         return y;
}
  
}  
  
   
// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial: nFactorial,
  nFibonacci: nFibonacci,
};
