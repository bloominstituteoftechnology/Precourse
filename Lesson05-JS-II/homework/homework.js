// Do not change any of the function names

function getBiggest(x, y) { if (x > y ? x:y) ; (x === y ? x:y) ;
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}

function greeting(language) {if (language='German');'Guten Tag!'; if (language='Mandarin');'Ni Hao!';if (language='spanish');'Hola!';if (language='Null');'Hello!';
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
}

function isTenOrFive(num) {if (num === 5 || num === 10) 'true'; else 'false';
  // return true if num is 10 or 5
  // otherwise return false
}

function isInRange(num) {if (num > 20 && num < 50) text = 'true' ;
else (text = 'false');
  // return true if num is less than 50 and greater than 20
  // otherwise return false
}

function isInteger(num) {if (Math.abs(Math.floor(num)) > 0) text = 'true';
else (text = 'false');
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
}

function fizzBuzz(num)   {if (num % 3 === 0 && num % 5 === 0){console.log('FizzBuzz');} else if ( num % 3 === 0 ) {console.log('Fizz');} else if (num % 5 ===0)
  {console.log('Buzz');} else {console.log(num);}}
// if num is divisible by 3 return 'fizz'
// if num is divisible by 5 return 'buzz'
// if num is divisible by 3 & 5 return 'fizzbuzz'
// otherwise return num

function isPrime(num) {function testPrime(num) {var isPrime = true; if (num >= 2) {if(num == 2 || num == 3) {isPrime = true;} else if (num % 2 == 0) {isPrime = false;} else {for (i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {if (num % i == 0) {isPrime = false;break;}}}} else {isPrime = false;} return isPrime }

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
