// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i]+1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  let sentence = words[0];
  let i = 1;
  for (i=1; i < words.length; i++) {
    sentence = sentence + ' ' + words[i];
  }
  return sentence;
}

function contains(arr, item) {
  let i = 0;
  if (arr[i] === item) {
  for (i = 0; i < arr.length; i++) {
    return true;
  }
} else {
  return false;
}
}

function addNumbers(numbers) {
  let i = 0;
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  let i = 0;
  let sum = 0;
  for (i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
  return sum/testScores.length;
}

function largestNumber(numbers) {
  let i =0;
  let largest = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
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
