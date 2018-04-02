// Do not change any of the function names

function getBiggest(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return  x || y;
  }
} 

function greeting(language) {
  if (language === 'German') {
    return ('Guten Tag!');
  } else if (language === 'Mandarin') {
    return ('Ni Hao!');
  } else if (language === 'Spanish') {
    return ('Hola!');
      } else {
        return ('Hello!');
      }
}

function isTenOrFive(num) {
  if (num === 5 || num === 10) {
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
  if (Math.floor(num)) {
    return true;
  }
  else if (num===0) {
    return true;
  }
    return false;
} 

function fizzBuzz(num) {
  if (num % 3===0 && num % 5===0) {
    return ('fizzbuzz');
  } else if (num % 5===0) {
    return ('buzz');
  } else if (num % 3===0) {
    return ('fizz');
    } else {
    return num;
}
}

function isPrime(num) {
  if (num === 1 || num === 0) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
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