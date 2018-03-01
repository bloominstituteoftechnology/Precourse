// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  const firstItem = arr[0];

  return firstItem;
}

function returnLast(arr) {
  // return the last item of the array
  const i = arr.length;
  const lastItem = arr[i - 1];

  return lastItem;
}

function getArrayLength(arr) {
  // return the length of the array
  const length = arr.length;

  return length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  var inc = [];

  for (let i = 0; i < arr.length; i++) {
	inc[i] = arr[i] + 1;
  }

  return inc;
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
  var sentence = '';
  for (let i = 0; i < words.length - 1; i++) {
	sentence = sentence + words[i] + ' ';
  }

  sentence = sentence + words[words.length - 1];

  return sentence;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  var cont = false;

  for (let i = 0; i < arr.length; i++) {
	if ( arr[i] === item) {
		cont = true;
	}
  }
  return cont;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var addNum = 0;

  for (let i = 0; i < numbers.length; i++) {
	addNum = addNum + numbers[i];
  }

  return addNum;

}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var arrSum = 0;
  var average = 0;

  for (let i = 0; i < testScores.length; i++) {
	arrSum = arrSum + testScores[i];
  }

  average = arrSum / testScores.length;

  return average;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
	if (numbers[i+1] > numbers [i] && numbers[i+1] > largest) {
		largest = numbers[i+1];
	}
  }

  return largest;
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
