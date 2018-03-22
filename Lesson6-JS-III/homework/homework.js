// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]+1);
  }
  return result;
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
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  let sumOfScores = 0;
  for (let i = 0; i < testScores.length; i++) {
    sumOfScores += testScores[i];
  }
  let averageScore = sumOfScores/testScores.length;
  return averageScore;
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {
  let largeSoFar = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (largeSoFar < numbers[i]) {
      largeSoFar = numbers[i];
    }
  }
  return largeSoFar;
  // numbers is an array of integers
  // return the largest integer
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let product = 1;
  if (arguments.length === 0)
    return 0;
  else if (arguments.length === 1)
    return arguments[0];
  else {
    for (let i = 0; i < arguments.length; i++) {
      product *= arguments[i];
    }
    return product;
  }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
