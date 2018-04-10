// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
    if (x > y){
	  intBiggest = x ;
	} else if (y > x) {
		intBiggest = y ;
	} else if (x === y) {
		intBiggest = x ;
	}
  return intBiggest ;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'German') {
  sayHello = 'Guten Tag!' ;
	} else if (language === 'Mandarin') {
	  sayHello = 'Ni Hao!' ;
	} else if (language === 'Spanish') {
	  sayHello = 'Hola!' ;
	} else {sayHello = 'Hello!' ;
	}
  return sayHello ;
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10 || num === 5) {
	  FiveOrTen = true ;
  } else {
	  FiveOrTen = false ;
  }
  return FiveOrTen ;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if (num < 50 && num > 30) {
	  NumInRange = true ;
  } else {NumInRange = false ;
  }
  return NumInRange ;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (num === Math.floor(num)){
	  numIsInteger = true ;
  } else {numIsInteger = false ;
  }
  return numIsInteger ;
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0){
	  buzzFizz = 'fizzbuzz' ;
  } else if (num % 3 === 0) {
	  buzzFizz = 'fizz' ;
  } else if (num % 5 === 0) {
	  buzzFizz = 'buzz' ;
  } else {
	  buzzFizz = num ;
  }
  return buzzFizz ;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num === 0 || num === 1){
	  primeTrue = false ;
  }	else {
	  primeTrue = true ;
  }
  for (let i = 2 ; i * i <= num && primeTrue === true ; i++) {
	  if (num % i === 0){
		  primeTrue = false ;
	  }	else {
		  primeTrue = true ;
	  }
  }
  return primeTrue ;
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
