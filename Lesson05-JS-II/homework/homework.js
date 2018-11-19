// Do not change any of the function names

function getBiggest(x, y) {
  if (x > y) {
    return x;
} else if (x < y){
    return y;
} else { 
    return (x || y);
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
    return ('Hello!')
}
}

function isTenOrFive(num) {
  if(num === 10 || num === 5 ) {
    return true;
  } 
    else {
      }
    return false;
}

function isInRange(num) {
  if(num > 20 && num < 50) { 
    return true;
  } 
    else {
      }
    return false;
  }

function isInteger(num) {
  if (Math.floor(num))  { 
    return true;
  } else { 
      }
    return false;  
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
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
