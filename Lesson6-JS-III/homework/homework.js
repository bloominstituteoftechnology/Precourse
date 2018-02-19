// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
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

    const map1 = arr.map(i => i + 1);
    return(map1);
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  }

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
  // add the item to the end of the array
  // return the array
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}

function wordsToSentence(words) {
  let wordsToSentence = words.join(' ');
  return wordsToSentence;
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  if (arr.indexOf(item) == -1) {
    return false;
  }
  else {
    return true;
  }
}
// check to see if item is inside of arr
// return true if it is, otherwise return false


function addNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  {
    return sum;
    // numbers is an array of integers.
    // add all of the integers and return the value
  }

}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0;
  for (let i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
  {return (sum/testScores.length);
}}
function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let max = Math.max(...numbers);
 
  return max;
}
  // Do not modify code below this line.
  // --------------------------------

  module.exports = {
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
    largestNumber: largestNumber,
  };
