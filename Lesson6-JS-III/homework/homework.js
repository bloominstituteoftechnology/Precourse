// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  const first = ['cat', 'dog', 'elephant'];
  return first(0);
}

function returnLast(arr) {
  // return the last item of the array
  const last = ['cat', 'dog', 'elephant'];
  return last.length - 1;
}

function getArrayLength(arr) {
  // return the length of the array
  const length = ['cat', 'dog', 'elephant'];
  return length.length;
}

function incrementByOne(arr) {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  for (let i = 0; i < arr.length; i++) {
    return arr[i] + 1;
  }
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  return arr.push(item);
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  return arr.unshift(item);
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
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
  largestNumber: largestNumber
};
