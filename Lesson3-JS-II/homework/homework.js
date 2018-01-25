// Returns the larger integer
function getBiggest(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

/* Returns a greeting for three different languages:
 * language: 'German' -> 'Guten Tag!'
 * language: 'English' -> 'Hello!'
 * language: 'Spanish' -> 'Hola!'
 * if language is undefined it returns 'Hello!'
 */
function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
}

/* Returns true if num is 10 or 5
 * otherwise returns false
 */
function isTenOrFive(num) {
  return (num === 5 || num === 10);
}

// Returns true if num is less than 50 and greater than 20
function isInRange(num) {
  return (num > 20 && num < 50);
}

function isInteger(num) {
  return Math.floor(num) === num;
}

// If num is divisible by 3 return 'fizz'
// if num is divisible by 5 return 'buzz'
// if num is divisible by 3 & 5 return 'fizzbuzz'
// otherwise return num
function fizzBuzz(num) {
  let str = '';
  
  if (num % 3 === 0) {
    str += 'fizz';
  }

  if (num % 5 === 0) {
    str += 'buzz';
  }

  if (str) {
    return str;
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
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  if (num === 0 || num === 1) {
    return false;
  }

  return true;
}

function returnFirst(arr) {
  return arr.shift();
}

function returnLast(arr) {
  return arr.pop();
}

function getArrayLength(arr) {
  return arr.length;
}

// Increase each integer in arr by one
// return arr
function incrementByOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }

  return arr;
}

// Add item to the end of arr; return arr
function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

// Add item to the front of arr; return arr
function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

// Given an array of strings
// return a string that is all of the words concatenated together
// wth spaces between each word
function wordsToSentence(words) {
  let str = '';

  for (let i = 0; i < words.length; i++) {
    str += words[i];
    if (i < words.length - 1) {
      str += ' ';
    }
  }

  return str;
}

function contains(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item){
      return true;
    }
  }

  return false;
}

// Adds all of the integers and returns the value
function addNumbers(numbers) {
  let num = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    num += numbers[i];
  }

  return num;
}

function averageTestScore(testScores) {
  return addNumbers(testScores) / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let largestNum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (largestNum < numbers[i]) {
      largestNum = numbers[i];
    }
  }

  return largestNum;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
