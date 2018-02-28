// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  arr.push();
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
  return words.join(' ');
}

function contains(arr, item) {
  if (arr.includes(item)) {
    return true;
  }
  return false;
}

function addNumbers(numbers) {
  number[].reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  return number;
}

function averageTestScore(testScores) {
  for (let i = 0; i < testScores.length; i++) {
  var sum = testScores.reduce(function(a, b) { 
    return a + b; });
  var avg = sum / testScores.length;
  }

  return avg;
}

function largestNumber(numbers) {
return Math.max(numbers);
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
