// Do not change any of the function names

function returnFirst(arr) {
  const NumArray = [10, 10, 16, 12];
  return (NumArray [0]);
  // return the first item from the array
}

function returnLast(arr) {
  const NumArray = [10, 10, 16, 12];
  return (NumArray [NumArray.length - 1]);
  // return the last item of the array
}

function getArrayLength(arr) {
  const NumArray = [10, 10, 16, 12];
  return (NumArray [NumArray.length]);
  // return the length of the array
}

function incrementByOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]++; // increment it by one
  }
  return arr;

  // arr is an array of integers  
  // increase each integer by one
  // return the array
}

function addItemToArray(arr, item) {
  const NumArray = [10, 10, 16, 12];
  NumArray.push (10);
  return NumArray;

  // add the item to the end of the array
  // return the array
}

function addItemToFront(arr, item) {
  const NumArray = [10, 10, 16, 12];
  NumArray.unshift (10);
  return NumArray;
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}

function wordsToSentence(words) {
  const WordsArr = ['LambdaSchool', 'JavaScript', 'Class'];
  return (WordsArr.join (' '));
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  const NumArray = [10, 10, 16, 12];
  if (NumArray.includes (16)) {return true};
  {
  return false;
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}

function addNumbers(numbers) {
  const NumArray = [10, 10, 16, 12];
  return (NumArray.reduce(reducer));
  }
 
  

  // numbers is an array of integers.
  // add all of the integers and return the value


function averageTestScore(testScores) {
  const grades = [10, 10, 16, 12];
  for(let i = 0; i < grades.length; i++) {
  i += grades[i];
}
let averageTestScore = i / grades.length;
return averageTestScore;
  }
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average

function largestNumber(numbers) {
  const numberArray = [10, 10, 16, 12];
  return (Math.max (numberArray));
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
  largestNumber: largestNumber,
};
