// Do not change any of the function names

// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return first[0];
}

function returnLast(arr) {
  // return the last item of the array
  let last = arr.length- 1;
  return arr[last];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 1);
  }
  return newArr;
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
  return arr.includes(item)
  }

  function addNumbers(numbers) {
    // numbers i an array of integers.
    // add all of the integers and return the value
   let total = 0;
   for (let i = 0; i < numbers.length; i++) {
     total += numbers[i];
   }
   return sum;
  }

  function averageTestScore(testScores) {
    // testScores is an array.  Iterate over testScores and compute the average.
    // return the average
    let avgTestScore = 0;
    let total = 0;
    let tests = testScores.length;
    for (let i = 0; i < testScores.length; i++) {
      total += testScores[i];
    } 
    avgTestScore = total / tests;
    return avgTestScore;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  return (Math.max.apply(null, numbers));
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