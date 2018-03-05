// Do not change any of the function names

function multiplyArguments() {
  product = 1;
  for (let i = 0; i <= arguments.length; i++) {
    product *= arguments[i];
  }
  console.log(product);
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
}

function getBiggest(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}

function greeting(language) {
  if (language === 'German') {
    return "Guten Tag!"
  } else if (languate === 'Mandarin') {
    return 'Ni Hao!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else if (language === undefined) {
    return 'Hello!';
  }
  }
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
  // return true if num is 10 or 5
  // otherwise return false
}

function isInRange(num) {
  if (num > 20 && num < 50) {
    return true;
  }
  return false;
  // return true if num is less than 50 and greater than 20
  // otherwise return false
}

function isInteger(num) {
  if (num === Math.round(num)) {
    return true;
  }
  return false;
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
}

function isPrime(num) {
  if (num < 2) {
    return false;
} else if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
}
  return true;

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
