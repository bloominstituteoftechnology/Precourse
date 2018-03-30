// Do not change any of the function names

// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  var first = [arr];
  return first[0];
}

function returnLast(arr) {
  // return the last item of the array
  var items = [arr];
  return items[items.length - 1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  var numbers = [arr];
  for (var i = 0; i < numbers.length; i++) {
    numbers[i]++;
  }
  return numbers;
}


function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  var newarr = [arr];
  newarr.push(items);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  var empty = [arr];
  empty.unshift(item);
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
  var included = arr.length;
  for (var i = 0; i < included; i++) {
    if (arr[i] === item) {
      return true;
    } else {
      return false;
    }
  }

  function addNumbers(numbers) {
    // numbers i an array of integers.
    // add all of the integers and return the value
    var arr = []; // sums to 100
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  }

  function averageTestScore(testScores) {
    // testScores is an array.  Iterate over testScores and compute the average.
    // return the average
    var total = 0;
    var arr = [];
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    var avg = total / arr.length;
    return avg;
  }
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var arr = [];
  var maxNumber = arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  var product = 1;
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  }

  for (var i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product;
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