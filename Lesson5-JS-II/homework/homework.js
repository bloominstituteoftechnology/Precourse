// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one

  // remember any missing tokens, brackets, etc
  if (x > y || x === y) {
    return x;
  }

  if (y > x || y === x) {
    return y;
  }

  if (x === y || y > x) {
    return false;
  }
}


function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'

  // defines various languages through if
  if (language === 'German') {
    return 'Guten Tag!';
  }

  if (language === 'Mandarin') {
    return 'Ni Hao!';
  }

  if (language === 'Spanish') {
    return 'Hola!';
  }

  else {
    return 'Hello!';
  }
}


function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false

  // simple return phrases

  if (num == 10 || num == 5) {
    return true;
  }

  if (num !== 10 || num !== 5) {
    return false;
  }

}


function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false

  // simple return statements

  if (num < 50 && num > 20) {
    return true;
  }
    return false;
}


function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor


  // decimal values are not integers
  if (Math.floor(num) !== num) {
    return false;
  }

  // any number greater than 1 is an integer
  if (Math.floor(num) >= 1)  {
    return true;
  }

  // any number less than 0 is an integer
  if (Math.floor(num) <= 0) {
    return true;
  }
}


function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num

  // 15 is the only number divisible by both 3 & 5
  if (num % 15 == 0) {
        return 'fizzbuzz';
    } else if (num % 5 == 0) {
        return 'buzz';
    } else if (num % 3== 0)  {
        return 'fizz';
    }
    return num;
  }


function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1

  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers

  // reminder: 7 & 97 are prime numbers!
  if (num <= 1) {
      return false;
  }

  if (num % 2 != 0)  {
      return true;
  }

  for (let i = 3; i <= Math.sqrt(num); i+=2 ) {
    if (num % i == 0);
      return false;
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
