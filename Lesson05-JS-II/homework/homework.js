// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;

  } else if (y === x) {
    return y || x;

  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'Mandarin') {
    return 'Ni Hao!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else if (language !== 'German' || 'Mandarin' || 'Spanish') {
    return 'Hello!';

  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 5 || num === 10) {
    return true;
  } else {
    return false;
  }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if (num < 50 && num > 20) {
    return true;
  } else {
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
  if (Number.isInteger(num)) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else {
    return num;
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  var i;

  // a should not be a parameter but a local variable
  var a = 0;

  for (i = 1; i < (num + 1); i++) {
    if (num % i == 0) {
      a++;
    }
  }

  // if the number of dividers is 2 (only 1 and the number itself), then its a prime number, so a==2 will give you true as result for a prime number
  return (a == 2);
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