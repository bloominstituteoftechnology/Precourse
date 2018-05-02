// Do not change any of the function names

function returnFirst(arr) {arr [0]
  // return the first item from the array
}

function returnLast(arr) {arr [length-1]
  // return the last item of the array
}

function getArrayLength(arr) {arr.length
  // return the length of the array
}

function incrementByOne(arr) {for (let i=0; i < (arr.length); i++) arr;
  // arr is an array of integers  
  // increase each integer by one
  // return the array
}

function addItemToArray(arr, item) {(push (item)); arr;
  // add the item to the end of the array
  // return the array
}

function addItemToFront(arr, item) { (unshift (item)); arr 
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}

function wordsToSentence(words) {concat(words)
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {arr.includes(item)
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}

function addNumbers(numbers) {for (i = 0; i < numbers.length; i++) 
  sum += numbers[i]
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) { for (i = 0; i < testScores.length; i ++)
  var avg = (testScores[i] / testScores.length) * testScores.length
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {numbers.sort(function(a, b){return a - b});[numbers.length-1]
  // numbers is an array of integers
  // return the largest integer
}

function multiplyArguments() {let product = 1; if (arguments.length === 1) {product = 0;} else if (arguments.length === 1) {product = arguments[0];} for (let i = 0; i < arguments.length; i++){product = arguments[i] * product;} return product;
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
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
