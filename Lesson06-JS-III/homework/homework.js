// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  for (var i = 0; i < arr.length; i++) {
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
  const sentence = words.reduce(function(acc, item) {
      return acc + ' ' + item;
  });
  return sentence;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
const n = arr.includes(item);
return n;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value

  const sum = numbers.reduce(function(acc, item) {
    return acc + item;
  });
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  const sums = testScores.reduce(function(acc, item) {
    return acc + item;
  });
  const length = testScores.length;
  const aver = sums/length;
  return aver;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var top = -100;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > top) {
      top = numbers[i];
    }
  }
  return top;
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if (arguments.length === 0) {
    return 0;
  } else {
  var sum = 1;
   for (var i = 0; i < arguments.length; i++) {
       sum *= arguments[i];
   }
   return sum;
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
