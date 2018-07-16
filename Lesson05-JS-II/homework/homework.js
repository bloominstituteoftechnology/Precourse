// Do not change any of the function names
function multiplyArguments() {
  let product = 1;
  if (arguments.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arguments.length; i = i + 1) {
      product = product * arguments[i];
    }
  }
  return product;
}


function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else {
    return x;
  }
}

function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'Mandarin') {
    return 'Ni Hao!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  if (num === 10 || num === 5) {
    return true;
  } else {
    return false;
  }
  // otherwise return false
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if (num > 20 && num < 50) {
    return true;
  } else {
    return false;
  }
  // otherwise return false
}

function isInteger(num) {
  if (num === Math.floor(num)) {
    return true;
  } else {
    return false;
  }
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
}


function isPrime(num) {
  for (var i = 2; i < num; i = i + 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
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
  multiplyArguments
};
