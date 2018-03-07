// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
 if(arguments.length === 0){
   return 0;
 } else if(arguments.length === 1) {
   return arguments[0];
 } else {
   var num = 1;
   for(var count = 0; count < arguments.length; count++) {
    num = num * arguments[count];
   }
   return num;
  }
}

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if(x === y) {
    return x;
  }
  else if (x > y) {
    return x;
  }
  else {
    return y;
  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if(language === 'German') {
    var greeting = 'Guten Tag!';
    return greeting;
  }
  else if(language === 'Mandarin') {
    greeting = 'Ni Hao!';
    return greeting;
  }
  else if(language === 'Spanish') {
    greeting = 'Hola!';
    return greeting;
  }
  else {
    greeting = 'Hello!';
    return greeting;
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10 || num === 5) {
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
  var checkNumber = Math.floor(num);
  if (num === checkNumber) {
    return true;
  }
  else {
    return false;
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  var message = ' ';
  if (num % 3 === 0 && num % 5 === 0) {
    message = 'fizzbuzz';
    return message;
  }
  else if (num % 3 === 0) {
    message = 'fizz';
    return message;
  }
  else if (num % 5 === 0) {
    message = 'buzz';
    return message;
  }
  else {
    return num;
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if(num === 0 || num === 1) {
    return false;
  }
  else {
    for(var counter = 2; counter < num; counter++){
      if(num % counter === 0){
        return false;
      }
    }
    return true;
  }
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
