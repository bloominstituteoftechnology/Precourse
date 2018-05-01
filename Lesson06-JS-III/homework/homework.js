// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return (arr[arr.length - 1]);
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
    
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
  let combo = '';
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      combo = combo + words[i];
    } else {
      combo = combo + ' ' + words[i];
    }
  }
  return combo;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
    
  }
  return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let combo = 0;
  for (let i = 0; i < numbers.length; i++) {
    combo = combo + numbers[i];
  }
  return combo;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let average = 0;
  for (let i = 0; i < testScores.length; i++) {
    average = average + testScores[i];
    
  }
  return average / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let num = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (num < numbers[i]) {
      num = numbers[i];
    }
  }
  return num;
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if (arguments.length === 0) {
    return 0;
    } else if (arguments.length === 1) {
      return arguments[0];
    } else {
  
    let product = 1;
    
    for (let i = 0; i < arguments.length; i++) {
      product *= arguments[i];
    
    }
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
