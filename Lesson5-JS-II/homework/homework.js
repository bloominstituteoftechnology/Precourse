// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
    let product = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        product = product * arguments[i];
    }
    return product;
}
    multiplyArguments(5, 5);

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
    return Math.max(x, y);
}
    getBiggest(5, 4);

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
    if (num === 10 || num === 5) {
        return true;
    }else {
        return false;
    }
}
    isTenOrFive(5);

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
    if (num < 50 && num > 20){
        return true;
    }else {
        return false;
    }
}
    isInRange(21);

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
    if (Math.floor(num) === (num)) {
        return true;
    }else {
        return false;
    }
}
    isInteger(0.8);

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
    if (num % 3 === 0 && !(num % 5 === 0)) {
        return 'fizz';
}
    if (num % 5 === 0 && !(num % 3 === 0)) {
        return 'buzz';
    }
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
}
  return num;
 }
    fizzBuzz(30);

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
 if (num < 2) {
     return false;
}
    let prime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
      prime = false;
    }
}
    return prime;
}
    isPrime(1);

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
