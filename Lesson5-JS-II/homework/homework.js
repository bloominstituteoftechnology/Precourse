// Do not change any of the function names

function multiplyArguments() {
  let product = 1;
  if( arguments.length === 0)
   {return 0;}
  for (let i = 0; i <arguments.length; i++)
  { product = product * arguments[i]; }
return product;
}

function getBiggest(x, y) {
  return Math.max(x, y);
}

function greeting(language) {
    if(language === 'German')
    {  return 'Guten Tag!';}
    else if(language === 'Mandarin')
    {return 'Ni Hao!';}
    else if(language === 'Spanish')
    {return 'Hola!';}
    return 'Hello!';
  }
 

function isTenOrFive(num) {
  return (num === 10 || num === 5);
}

function isInRange(num) {
  return (num < 50 && num > 20);
}

function isInteger(num) {
  return num % 1 === 0;
}

function fizzBuzz(num) {
  if(num % 3 === 0 && num % 5 === 0)
   { return 'fizzbuzz'; }
  else if(num % 3 === 0)
   { return 'fizz'; }
  else if(num % 5 === 0)
   { return 'buzz'; } 
   return num;
}

function isPrime(num) {
  if (num === 0 || num === 1) 
   { return false; }
  for ( let i = 2; i < num; i++) 
  {
  if(num % i === 0)
  {return false;}
  }
  return true;
}




// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
