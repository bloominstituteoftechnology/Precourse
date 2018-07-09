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
  arr = arr.map(function(val){return ++val;});
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
  var sentence = words.join(' ');
  return sentence;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  var found = arr.indexOf(item);
  if (found >= 0) {
    return true;
  } else {
    return false;
  }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  return numbers.reduce( (accumulator, currentValue) => accumulator + currentValue );
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var quantity = testScores.length;
  var sum = testScores.reduce( (accumulator, currentValue) => accumulator + currentValue );
  return sum/quantity;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  return Math.max.apply(null, numbers); 
}


function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
var productOfArguments = 1;

  if (arguments.length === 1) {
    return arguments[0];
  } else if (arguments.length === 0) {
    return 0;
  }

  for (var i = 0; i < arguments.length; i++) {
    productOfArguments *= arguments[i];
  } return productOfArguments;
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
