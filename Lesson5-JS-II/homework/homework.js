// Do not change any of the function names


function multiplyArguments(){
  
  if(arguments.length === 1){
   return arguments[0];
 }
 
 if(arguments.length===0){
   return 0; 
 }


  
 var args=Array.prototype.slice.call(arguments);
 
 return args.reduce(function(p,c){return p*c})

}
multiplyArguments(8,8,8,8,8,8);

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  {
 
    if(x>y){
      return x;
    }
  if(y>x)
    {
      return y;
      
    }
  if(x==y){
      return x;
    }
  }
  getBiggest(5,5);


  function greeting(language) {
    if(language=="German"){
      console.log('Guten Tag')
    }
    if(language=="English"){
      console.log('hello'+'!')
    }
    if(language=="Spanish"){
      console.log('Hola'+'!')
    }
  }
  greeting("English");

  function isTenOrFive(num) {
    if(num==10 || num==5)
  {
    return true;
  }
  else{
    return false;
  }
  }
  isTenOrFive(6);

  function isInRange(num) {
    if(num<50 && num>20){
      return true;
    }
    else {
      return false;
    }
  }
    isInRange(30); 

function isInteger(num) {
   if(Number.isInteger(num)){
      return true;
    }
else{
  return false;
}
}
isInteger(598585475.01);


function fizzBuzz(num) {
  
  if(num%3 ===0 && num%5 === 0){
    return 'fizzbuzz';
  }
  if(num %3 === 0)
  {
 console.log('fizz');
  }
 if(num%5 === 0){
    console.log('buzz');  
  }
  
if(num%3 !==0 && num%5 !== 0){
  return num;
}
  
}
fizzBuzz(2);

function isPrime(num)
  {
  
    if (num===1)
    {
      return false;
    }
    else if(num === 2)
    {
      return true;
    }else
    { 
      for(var x = 2; x < num; x++)
      {
        if(num% x === 0)
        {
          return false;
        }
      }
      return true;  
    }
  }
  
  isPrime(2);



// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
};
