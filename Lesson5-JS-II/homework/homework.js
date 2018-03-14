// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  // return Math.max(x, y);
  return x > y ? x : y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'German')
    return 'Guten Tag!';
  else if (language === 'Spanish')
    return 'Hola!';
  else
    return 'Hello!';
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return num === 5 || num === 10;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  return num < 50 && num > 20;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return num === Math.floor(num);
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 5 === 0 && num % 3 === 0) {
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
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers

  // implement Eratosthenes' Seive
  
  /*
  function isPrimeOld(num) {
    if(num < 2) 
      return false;
    else if (num !== 2 && num % 2 === 0)
      return false;
    else {
      for(var i = 3; i < num; i+=2)
        if(num % i === 0) return false;
    }
    return true;
  }
  */
  
  function findPrimes(num) {
    // creates an array of the prime numbers from 2 to num
    // returns the array
    const primes = [];
    for(let i = 2; i <= num; i++)
      if(isPrime(i)) {
        // console.log(`found a prime!: ${i}`);
        primes.push(i);
      }
    return primes;
  }
  
  function isDivisibleByArrayNum(num, arr) {
    // given an array of numbers, arr, is number, num, evenly
    // divisible by numbers in arr
    // if yes, returns true
    // otherwise false

    // console.log(`${num} is the number; ${arr} the array`);
    for(let i = 0; i < arr.length; i++) {
      // console.log(`${num} / ${arr[i]} is being checked`);
      if(num % arr[i] === 0) {
        // console.log(`${num} is divisible by ${arr[i]}`);
        return true;
      }
    }
    return false;
  }
  
  // console.log(`${num} is the number`);
  
  if(num < 2)
    return false;
  else if (num === 2)
    return true;
  let sr = Math.ceil(Math.sqrt(num));
  // console.log(`the square root is ${sr}`);
  const rootPrimes = findPrimes(sr);
  // console.log(`the root primes are ${rootPrimes}`);
  return !(isDivisibleByArrayNum(num, rootPrimes));
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
