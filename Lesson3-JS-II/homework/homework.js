// Do not change any of the function names

function getBiggest(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else if (y === x) {
    return x || y;
  }
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}
getBiggest(12, 24);

function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'English') {
    return 'Hello!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
}
greeting('German');

function isTenOrFive(num) {
  if (num === 5) {
  return true;
  } else if (num === 10) {
  return true;
  } else {
  return false;
     }    
  }
  // return true if num is 10 or 5
  // otherwise return false

isTenOrFive(5);

function isInRange(num) {
  if (num < 50 && num > 20){
    return true;
  } else {
    return false;
  }
  // return true if num is less than 50 and greater than 20
}

isInRange(35);

function isInteger(num) {
  if ((Math.floor(num)) === num) {
    return true;
  } else if ((Math.floor(num)) !== num) {
    return false;
  }
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 ===0 ){
    return 'fizzbuzz';
  }
  else if (num % 3 === 0){
    return 'fizz';
  }
  else if (num % 5 === 0){
    return 'buzz';
    }
    else {
      return num;
    }
  }
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num


function isPrime(num) {
  if (num === 1 || num === 0){
    return false;
  }
  for (let i = 2; i < num; i++)
  if (num % i === 0){
    return false;
  }
  return true;
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
}
function returnFirst(arr) {
  return(arr[0]);
  // return the first item from the array
}

function returnLast(arr) {
  return arr[arr.length - 1];
  // return the last item of the array
}

function getArrayLength(arr) {
  return arr.length;
  // return the length of the array
}

function incrementByOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
  return (arr);
    // arr is an array of integers  
    // return the array
}

function addItemToArray(arr, item) {
arr.push(item);
return (arr);
  // add the item to the end of the array
  // return the array
}

function addItemToFront(arr, item) {
arr.unshift(item);
return (arr);
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}

function wordsToSentence(words) {
return words.join(' ');
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  return arr.includes(item);
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}

function addNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  let sum = 0;
  for (let i = 0; i < testScores.length; i++){
    sum += testScores[i];
  }
  return sum / testScores.length;
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++){
  if (numbers[i] > largest){
    largest = numbers[i];
  }
}
return largest;
  // numbers is an array of integers
  // return the largest integer
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
