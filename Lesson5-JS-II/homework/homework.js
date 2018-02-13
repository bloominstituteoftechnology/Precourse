// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it

  let product = 1;

  if((arguments.length !== 0) && (arguments.length !== 1) ){
    for (let i = 0; i < arguments.length; i++)
      product *= arguments[i];
    return product;
  }
  else if(arguments.length === 1)
    return arguments[0];
  else return 0;
}

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if(x > y)
    return x;
  else
   return y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if(language === 'German')
    return 'Guten Tag!';
  else if(language === 'Spanish')
    return 'Hola!';
  else
    return 'Hello!';
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if((num === 10) || (num === 5))
    return true;
  else return false;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if((num > 20) && (num < 50))
    return true;
  else
    return false;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if(num === Math.floor(num))
    return true;
  return false;
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if((num % 3 === 0) && (num % 5 ===0))
    return 'fizzbuzz';
  if(num % 3 === 0)
    return 'fizz';
  if(num % 5 === 0)
    return 'buzz';
  return num;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if(num <= 1) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;
  
  for(let i=num-1; i>=2; i--){
    if(num % i === 0){
       return false;
    }//if
  }//for
  
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
