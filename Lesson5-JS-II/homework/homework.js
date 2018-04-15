// Do not change any of the function names

function multiplyArguments() {
  let result = 1;
  if(arguments.length === 0)
  return 0;

  for(let i = 0; i < arguments.length; i++)
  result = result * arguments[i];
  return result;
}

function getBiggest(x, y) {
if( x >= y)
return x;
else return y;
} 
  
function greeting(language) {
  if (language === 'German')
  return 'Guten Tag!';
  else if (language === 'Spanish')
  return 'Hola!';
  else if(language === 'English')
  return 'Hello!';
  else return 'Hello!';
}

function isTenOrFive(num) {
  if (num === 10 || num === 5)
  return true;
  else return false;
}

function isInRange(num) {
  if (num < 50 && num > 20)
  return true;
  else return false;
}

function isInteger(num) {
  if (num === Math.floor(num))
  return true;
  else return false;
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0)
  return 'fizzbuzz';
  else if (num % 5 === 0)
  return 'buzz';
  else if (num % 3 === 0)
  return 'fizz';
  else return num;
}

function isPrime(num) {
  if (num < 2)
  return false;
  for (let i = 2; i < num; i++){
    if(num % i === 0)
  return false;
  }
  return true;
}



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
