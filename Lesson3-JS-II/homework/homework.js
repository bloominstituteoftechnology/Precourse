// Do not change any of the function names

function getBiggest(x, y) {
  if (x>y){
    return x;
  } else {
    return y;
  }
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}

function greeting(language) {
  if (language === 'German'){
    return 'Guten Tag!';
  }
  else if (language === 'English') {
    return 'Hello!';
  }
    else if (language === 'Spanish') {
      return 'Hola!';
    }
    else return 'Hello!';
  }

  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'

function isTenOrFive(num){
  if (num === 10 || num === 5){
    return true;
  } else {
    return false;
  }
}
  // return true if num is 10 or 5
  // otherwise return false


function isInRange(num) {
  if (num < 50 && num > 20){
    return true;
  } else{
    return false;
  }
  // return true if num is less than 50 and greater than 20
}

function isInteger(num) {
  if (Math.floor(num) !== num){
    return false;
  } else {
    return true;
  }
}
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor


function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0){
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
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



  function isPrime(num){
    if (num === 0 || num === 1) {
      return false;
    } else {
      for (var i = 2; i < num-1; i++) {
        if (num % i === 0){
          return false;
        }
      }
    } return true;
  }

  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers


function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = (arr[i]+1);
  }
  return arr;
}


  // arr is an array of integers
  // increase each integer by one
  // return the array



  function addItemToArray(arr,item) {
     arr.push(item);
    return arr;
    }
    // add the item to the end of the array
    // return the array


    function addItemToFront(arr, item) {
       arr.unshift(item);
      return arr;
      }
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift




  function wordsToSentence(words) {
    var newsentence = words[0];
  for (var i = 1; i < words.length; i++) {
    newsentence = newsentence + ' ' + words[i];
  }

   return newsentence ;
    }


  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'


  function contains(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item){
        return true;
      }
    } return false;
  }

  function addNumbers(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + numbers[i];
    }return total;
  }

  function averageTestScore(testScores) {
  var testtotal=0;
  for (var i = 0; i < testScores.length; i++) {
     testtotal = 0 + testtotal+testScores[i];
  }var testaverage = (testtotal / testScores.length);
  return testaverage;
  }
// testScores is an array.  Iterate over testScores and compute the average.
// return the average


function largestNumber(numbers) {
  var largest = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest){
      largest = numbers[i];
    }
  } return largest;
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
