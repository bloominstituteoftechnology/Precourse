// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  if (x > y) {
    return x;
  }
  else if (x < y) {
    return y;
  }
  else
    return x || y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  if (language === 'German') {
    return 'Guten Tag!';
  }
  // language: 'English' -> 'Hello!'
  else if (language === 'English') {
    return 'Hello!';
  }
  // language: 'Spanish' -> 'Hola!'
  else if (language === 'Spanish') {
    return 'Hola!';
  }
  // if language is undefined return 'Hello!'
  else
    return 'Hello!';
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
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
  if (Math.floor(num) === num) {
    return true;
  }
  // otherwise return false
  // hint: you can solve this using Math.floor
  return false;
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }
  else if (num % 3 === 0) {
    return 'fizz';
  }
  // if num is divisible by 5 return 'buzz'
  else if (num % 5 === 0) {
    return 'buzz';
  }
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  
  else return num;
}

function isPrime(num) {
  // return true if num is prime.
  if (num === 1 || num === 0) {
    return false;
  }
  for (let i = 2 ; i < num ; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
}

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length -1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  for (let i = 0; i < arr.length; i++ ) {
    arr[i] = arr[i] + 1;
  }// return the array
  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  arr.push(item);
  return arr;
  // return the array
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  arr.unshift(item);
  return arr;
  // return the array
  // hint: use the array method .unshift
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  return words.join(' ');
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  // check to see if item is inside of arr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
        return true;
    }
  }
  return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return numbers.reduce(reducer);
  }// add all of the integers and return the value


function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (testScores.reduce(reducer)) / testScores.length;
  // return the average
}

function largestNumber(numbers) {
  // numbers is an array of integers
  let largest = numbers[0];
  for (let i = 1 ; i < numbers.length ; i++) {
    if (numbers[i] >= largest) {
        largest = numbers[i];
    }
    
  }
  return largest;// return the largest integer
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
