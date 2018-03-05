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
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newNumber = arr[i] + 1;
    newArr.push(newNumber);
  }
  return newArr;
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
  sentence = '';
  for (let i = 0; i < words.length - 1; i++) {
    newWord = words[i] + ' ';
    sentence = sentence.concat(newWord);
  }
  return sentence + words[words.length - 1];
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
    }
  return false;
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}

function addNumbers(numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++)  {
    sum += numbers[i];
  }
  return sum;
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  sum = 0;
  for (let i = 0; i < testScores.length; i++)  {
    sum += testScores[i];
  }
  average = sum/testScores.length;
  return average;
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    count = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] >= numbers[j]) {
        count += 1;
        if (count === numbers.length) {
          return numbers[i];
      }}}}
  // numbers is an array of integers
  // return the largest integer
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
