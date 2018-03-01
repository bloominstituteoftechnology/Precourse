// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
   if (x != y) {
    return Math.max(x,y);
   } else {
    return (x||y);
  }
  // if they are the same return either one
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!
  if (language ==='German') {
    return 'Guten Tag!';
  }
  if (language ==='Spanish') {
    return 'Hola!';
  }else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  if (num === 10 || num === 5){
  return true;
} else {
  return false;
  // otherwise return false
}
}

function isInRange(num) {
    if (num > 20 && num < 50){
    return true;
 }else { 
  return false;
}
}

function isInteger(num) {
  // return true if num is an integenumr
   if (Number.isInteger(num)) {
    return true;
   }else {
    return false;
   }
 }
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor


function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }else if (num % 3 === 0) {
    return 'fizz';
  }
  else if (num % 5 ===0) {
    return 'buzz';
  }else {
      return num; 
  }

  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
}

function isPrime(num) {
  // return true if num is prime.
if (num < 2){
  return false;
}
for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    return false; 
  } 
}
return true;
}
  

function returnFirst(arr) {
  // return the first item from the array
 return(arr[0]);
}

function returnLast(arr) {
  // return the last item of the array
  return(arr[arr.length - 1]);
}

function getArrayLength(arr) {
  // return the length of the array
  return(arr.length);
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i] + 1;
  }
  // return the array
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
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return(arr);
// expected output: Array [item, 1, 2, 3]
}

function wordsToSentence(words) {
  // words is an array of strings
  
  // return a string that is all of the words concatenated together
  return(words.join(' '));
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  // check to see if item is inside of arr

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }

    return false;
}
  // return true if it is, otherwise return false


function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let total = 0;
  for (var i = 0; i < numbers.length; i++){
     total += numbers[i];
     }   
      return total;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let total = 0;
  for (var i = 0; i < testScores.length; i++){
   total += testScores[i]/testScores.length;
  }
  return Math.round(total);
}


function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  return Math.max.apply(null, numbers);
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
