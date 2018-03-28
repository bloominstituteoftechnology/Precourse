function multiplyArguments() {
  return arguments.length ? [...arguments].reduce((a, b) => a * b) : 0;
}

// function multiplyArguments() {
//   if (arguments.length === 0) return 0;
//   let output = 1;
//   for (let arg of arguments) {
//     output *= arg;
//   }
//   return output;
// }
// use the arguments keyword to multiply all of the arguments together and return the product
// if no arguments are passed in return 0
// if one argument is passed in just return it

const getBiggest = (x, y) => Math.max(x, y);
// const getBiggest = (x, y) => x > y ? x : y;
// x and y are integers. Return the larger integer
// if they are the same return either one

const greeting = (language) => {
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    default:
      return 'Hello!';
  }
};
// return a greeting for three different languages:
// language: 'German' -> 'Guten Tag!'
// language: 'English' -> 'Hello!'
// language: 'Spanish' -> 'Hola!'
// if language is undefined return 'Hello!'

const isTenOrFive = (num) => num === 10 || num === 5;
// return true if num is 10 or 5
// otherwise return false

const isInRange = (num) => num < 50 && num > 20;
// return true if num is less than 50 and greater than 20
// otherwise return false

// const isInteger = (num) => Math.floor(num) === num;
const isInteger = (num) => Number.isInteger(num);
// return true if num is an integer
// 0.8 -> false
// 1 -> true
// -10 -> true
// otherwise return false
// hint: you can solve this using Math.floor

const fizzBuzz = (num) => {
  return num % 3 === 0 && num % 5 === 0
    ? 'fizzbuzz'
    : num % 3 === 0
    ? 'fizz'
    : num % 5 === 0
    ? 'buzz'
    : num;
  };
// if num is divisible by 3 return 'fizz'
// if num is divisible by 5 return 'buzz'
// if num is divisible by 3 & 5 return 'fizzbuzz'
// otherwise return num

const isPrime = (num) => {
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % 2 === 0) return false;
  }
  return num > 1;
};
// return true if num is prime.
// otherwise return false
// hint: a prime number is only evenly divisible by itself and 1
// hint2: you can solve this using a for loop
// note: 0 and 1 are NOT considered prime numbers


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
