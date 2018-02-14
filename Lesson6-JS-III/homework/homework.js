// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  let j = arr.length - 1;
  return arr[j];
}


function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  let j;
  for (j = 0; j < arr.length; j++){
    arr[j] = arr[j]+1;
  } return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let myString = '';
  let j;
  for (j = 0; j < words.length-1; j++){
    myString = myString.concat(words[j],' ');
  } return myString.concat(words[words.length-1]);
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  let j;
  for (j = 0; j < arr.length; j++){
    if (arr[j] === item){
      return true;
    }
  } return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let j;
  let arrSum = 0;
  for (j = 0; j < numbers.length; j++){
    arrSum = arrSum + numbers[j];
  } return arrSum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let j;
  let arrSum = 0;
  for (j = 0; j < testScores.length; j++){
    arrSum = arrSum + testScores[j];
  } return arrSum/testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  numbers = numbers.sort(function(a,b) {
    return a-b;
  });
  return numbers[numbers.length-1];
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
};
