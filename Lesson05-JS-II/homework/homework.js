// Do not change any of the function names

function getBiggest(x, y) {
  let max = x;
  if (x < y) {
    max = y;
  }
  return max;
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
  if (num === 10 || num === 5) {
    return true;
  } else {
    return false;
  }
}

function isInRange(num) {
  if (num < 50 && num > 20) {
    return true;
  } else {
    return false;
  }
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
  let prime = true;
  if (num === 0 || num === 1) {
    prime = false;
  } else {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
  }
  return prime;
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
