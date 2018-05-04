// Do not change any of the function names
// Removed in March edition

// function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  // const numbers = arguments.length;
  // let together = 1;

  // if (numbers === 0) {
  // 	return 0;
  // } else for (let i = 0; i < numbers; i++) {
  // 	together = together * arguments[i];
  // }

  // return together;
	// }

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x >= y) return x;
  return y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Mandarin':
      return 'Ni Hao!';
    case 'Spanish':
      return 'Hola!';
    default:
      return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return num === 5 || num === 10;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  return num < 50 && num > 20;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return num === Math.floor(num);
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  const dividedByThree = (num%3 === 0);
  const dividedByFive = (num%5 === 0);

  if (dividedByThree && dividedByFive) return 'fizzbuzz';
  if (dividedByThree) return 'fizz';
  if (dividedByFive) return 'buzz';
  return num;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num === 0 || num === 1) return false;
  for (let i=2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
