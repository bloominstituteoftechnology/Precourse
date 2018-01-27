// Do not change any of the function names

function getBiggest(x, y) {
 if (x > y) {
  return x;
} else {
  return y;
  }
}
/*
if (x < y) return x;
 return y;
  x and y are integers.  Return the larger integer
  if they are the same return either one
  if x > y {
   return x;
 } else if x < y {
   return y;
 } else if x === y {
   return x || y;
 }
}
*/
// Math.max(x, y); returns the highest value
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
}
// return a greeting for three different languages:
// language: 'German' -> 'Guten Tag!'
// language: 'English' -> 'Hello!'
// language: 'Spanish' -> 'Hola!'
// if language is undefined return 'Hello!'
// Prevous error because I forgot ( ) for language.
// previous error because forgot { at end of each else if statement

function isTenOrFive(num) {
return num === 10 || num === 5;
}
// return true if num is 10 or 5
// otherwise return false
/*  previous attempts:
if (num === 10 || 5) {
  return true;
  } else {
    return false;
  }
}
*/

function isInRange(num) {
return num < 50 && num > 20;
}
// return true if num is less than 50 and greater than 20
/*  if (num < 50 %% num > 20) {
  return true;
  }
} */

function isInteger(num) {
   return num === Math.floor(num);
 }
 // return true if num is an integer
 // 0.8 -> false
 // 1 -> true
 // -10 -> true
 // otherwise return false
 // hint: you can solve this using Math.floor
/* if num <= 1 {
 return true;
   }else {
 return false;
   }
 } */
  //is num equal to itself after being rounded down


function fizzBuzz(num) {
 if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}
// if num is divisible by 3 return 'fizz'
// if num is divisible by 5 return 'buzz'
// if num is divisible by 3 & 5 return 'fizzbuzz'
// otherwise return num
// common interview question
/* if num / 3 && num / 5 {
 return 'fizzbuzz';
}else if {
 num / 3;
 return 'fizz';
} else if{
 num / 5;
 return 'buzz';
} else {
 return num;
}
} */
function isPrime(num) {
 if (num === 1 || num === 0) {
    return false;
    }
    if (num === 2) return true;
  for(let i = 2; i < num; i++) {  // i = 2 because 0 and 1 don't count
      if (num % i === 0) {
        return false;
    }
  }
  return true;
}
// return true if num is prime.
// otherwise return false
// hint: a prime number is only evenly divisible by itself and 1
// hint2: you can solve this using a for loop
// note: 0 and 1 are NOT considered prime numbers
// this is another common interview question
/*  my earlier attempts at the problem
for (i=0, i % 1000 = 0, i++) {
 return true;
} else {
 return false;
}
}
*/
function returnFirst(arr) {
 return arr[0];
}
/*  first item in array is always in position 0 */
  // return the first item from the array

function returnLast(arr) {
  return arr[arr.length - 1];
}
/* will always give us the last item */
// return the last item of the array

function getArrayLength(arr) {
  return arr.length;
}
/* return the length of the array  */

 function incrementByOne(arr) {
 for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
  return arr;
}
// arr is an array of integers
// increase each integer by one
// return the array
// previous attempt: return arr + '1';

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}
/*   add the item to the end of the array, return the array*/

function addItemToFront(arr, item) {
 arr.unshift(item);
 return arr;
}
// add the item to the front of the array
// return the array
// hint: use the array method .unshift
/* previous attempt:
addItemToFront.unshift(item);
return addItemToFront;
*/


function wordsToSentence(words) {
  return words.join(' ');
}
// words is an array of strings
// return a string that is all of the words concatenated together
// spaces need to be between each word
// example: ['Hello', 'world!'] -> 'Hello world!'
// previous attempt:   words.join(" ");
/*   the long way to do it:
let sentence = '';
  for (let i = 0; i <words.length; i++) {
    sentence += words[i];
    if (i + 1 !== words.length) {
      sentence += words[i];
    }
  }
  return sentence;
} */

function contains(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
        return true;
        }
      }
      return false;
  }
// check to see if item is inside of arr
// return true if it is, otherwise return false
/* return arr.includes(item);  this is a newer method
or you can do:
 previous attempt:
 arr.isArray(item);
 return true;
}

return arr.includes(item);   newest method 
*/

function addNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
     }
     return sum;
}
// numbers is an array of integers.
// add all of the integers and return the value
/*
 return numbers.reduce;
}
 */

function averageTestScore(testScores) {
  return addNumbers(testScores) / testScores.length;
}
// testScores is an array.  Iterate over testScores and compute the average.
// return the average
/* resource: https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332 */
/*
previous attempt:
testScores.reduce((a, b) => a + b, 0) / testScores.length;
*/

function largestNumber(numbers) {
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
    largest = numbers[i];
    }
  }
  return largest;
}
// numbers is an array of integers
// return the largest integer
/*numbers.sort(function(a, b){return b-a});
*/


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
