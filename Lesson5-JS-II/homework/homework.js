// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if (!arguments.length) return 0;
  let args = [...arguments];
  return args.reduce((acc, cur) => {
    return acc * cur;
  }, 1);
}

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  return Math.max(x, y);
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  const greetings = {
    German: 'Guten Tag!',
    English: 'Hello!',
    Spanish: 'Hola!'
  };
  return greetings[language] || 'Hello!';
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return num === 10 || num === 5 ? true : false;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  return num < 50 && num > 20 ? true : false;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return num % 1 === 0;
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (!(num % 3) && !(num % 5)) return 'fizzbuzz';
  if (!(num % 5)) return 'buzz';
  if (!(num % 3)) return 'fizz';
  return num;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num === 0 || num === 1) return false;
  // euler's prime
  let s = Math.sqrt(num);
  for (let i = 2; i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
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
  isPrime: isPrime
};
