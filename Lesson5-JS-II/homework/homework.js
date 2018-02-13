// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  
 if (arguments.length === 1){
   return arguments[0];
 }
 if (arguments.length > 1) {
  let sum = arguments[0];

 for (let i = 1; i < arguments.length; i++) {
  sum = sum * arguments[i];
}

return sum;
}
 else {
   return 0;
 }
}
 
function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y) {
    return x;
  }
  if (y > x) {
    return y;
  }
  else {
    return x;
  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'English') {
    return 'Hello!';
  }
  if (language === 'German') {
    return 'Guten Tag!';
  }
  if (language === 'Spanish') {
    return 'Hola!';
  }
  else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
 if (num === 10) {
   return true;
 }
 if (num === 5) {
   return true;
 }
 else {
   return false;
 }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
 if (num < 50 && num > 20) {
   return true;
 }
 else {
   return false;
 }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (num > Math.floor(num)){
    return false;
  }
  if (num < Math.ceil(num)){
    return false;
  }
  else {
    return true;
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  
      if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
    if (num % 5 === 0) {
      return 'buzz';
  }
        else{
          return num;
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
 for(let i = 3; i < num; i++) {
   if (num % i === 0) {
     return false;
   }
 }
 if (num === 0 || num === 1) {
  return false;
 }
 else {
   return true;
 }
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
