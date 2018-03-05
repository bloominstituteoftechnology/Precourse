// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length-1]; 
}

function getArrayLength(arr) {
  return (arr.length);
}

function incrementByOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
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
  var sentence = words[0];
  for (let i = 1; i < words.length; i++) {
    sentence += ' ' + words[i];
  }
  return sentence;
  }

function contains(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}
  // check to see if item is inside of arr
  // return true if it is, otherwise return false

function addNumbers(numbers) {
  var total = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var sum = testScores[0];
  for (let i = 1; i < testScores.length; i++) {
    sum += testScores[i];
  }
  const average = (sum / testScores.length);
  return average;
}

function largestNumber(numbers) {
  var largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] >= largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
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
