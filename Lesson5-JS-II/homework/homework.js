// Do not change any of the function names

function multiplyArguments() {
  var product = 1;
  if (arguments.length = 0) {
    return 0;
  } else {
    for (i=1; i <= arguments.length; i++) {
    product = product * argument[i];
  }
  return product;
};

function getBiggest(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

function greeting(language) {
  if (language === 'German') {
    return "Guten Tag!";
  } else if (language === 'English' || null) {
    return "Hello!";
  } else (language === 'Spanish') {
    return "Hola!";
  }
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
};

function isTenOrFive(num) {
    if (num === 5 || 10) {
      return true;
    } else {
      return false;
    }// return true if num is 10 or 5
  // otherwise return false
};

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
};

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
};

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
};

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
};



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
