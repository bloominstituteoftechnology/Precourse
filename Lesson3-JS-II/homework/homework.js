// Do not change any of the function names

function getBiggest(x, y) {
  return(Math.max(x,y));
}

function greeting(language) {
   if(language === 'German') {
     return('Guten Tag!');
   }
   else if(language === 'English') {
     return('Hello!');
   }
   else if(language == 'Spanish') {
     return('Hola!');
   }
   else {
     return('Hello!');
   }
}

function isTenOrFive(num) {
  if(num === 10 || num === 5) {
    return(true);
  }
  return(false);
}

function isInRange(num) {
  if(num > 20 && num < 50) {
    return(true);
  }
  return(false);
}

function isInteger(num) {
  if(num === Math.floor(num)) {
    return(true);
  }
  return(false);
}

function fizzBuzz(num) {
  if(num % 3 === 0 && num % 5 === 0) {
    return('fizzbuzz');
  }
  else if(num % 3 === 0) {
    return('fizz');
  }
  else if(num % 5 === 0) {
    return('buzz');
  }
  else {
    return(num);
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if(num > 1) {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return(false);
      }
    }
  }
  else if(num <= 1) {
    return(false);
  }
  return(true);
}

function returnFirst(arr) {
  // return the first item from the array
  return(arr[0]);
}

function returnLast(arr) {
  // return the last item of the array
  return(arr[arr.length-1]);
}

function getArrayLength(arr) {
  // return the length of the array
  return(arr.length);
}

function incrementByOne(arr) {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  for(let i in arr) {
    arr[i] += 1;
  }
  return(arr);
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return(arr);
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return(arr);
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let sentence = '';
  for(let i in words.slice(0,words.length-1)) {
    sentence += words[i] + ' ';
  }
  sentence += words[words.length-1];
  return(sentence);
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return(arr.includes(item));
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let total = 0;
  for(let i in numbers) {
    total += numbers[i];
  }
  return(total);
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let total = 0;
  for(let i in testScores) {
    total += testScores[i];
  }
  let average = total/testScores.length;
  return(average);
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let maxNumber = 0;
  for(let i in numbers){
    maxNumber = Math.max(maxNumber, numbers[i]);
  }
  return maxNumber;
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
