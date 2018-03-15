// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr.pop();
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for(let i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
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
  return words.join(' ');
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if(arr.includes(item)) {
    return true;
  }
  else {
    return false;
  }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let getSumOfIntegers = 0;
  for(let i = 0; i < numbers.length; i ++) {
    getSumOfIntegers = getSumOfIntegers + numbers[i];
  }
  return getSumOfIntegers;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let getAverage = 0;
  for(let i = 0; i < testScores.length; i ++) {
    getAverage = getAverage + testScores[i];
  }
  getAverage = getAverage / testScores.length;
  return getAverage;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let getLargestInteger = 0;
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > getLargestInteger) {
      getLargestInteger = numbers[i];
    }
  }
  return getLargestInteger;
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
	let product = 1;
  // loop starts at 0. if i is less than the length of arguments, increase i by 1.
	for (let i = 0; i < arguments.length; i++) {
	// multiply with the value of product is and reassign the new value to the variable product
    product = product * arguments[i];
  }
  // if length of argument is equal to 0, then return 0.
  if(arguments.length === 0) {
    return 0;
  //return product if argument is equal to 1.
  } else {
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
