// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
  // return the first item from the array
}

function returnLast(arr) {
  return arr[arr.length - 1];
  // return the last item of the array
}

function getArrayLength(arr) {
  return arr.length;
  // return the length of the array
}

function incrementByOne(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
    return arr;
  // arr is an array of integers
  // increase each integer by one
  // return the array
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
  // add the item to the end of the array
  // return the array
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}

function wordsToSentence(words) {
  var sentence = '';
  for(var i = 0; i < words.length; i++) {
    sentence += ' ' + words[i];
  }
  return sentence.trim();

  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
        return true;
      }
    }
    return false;
  }


  // check to see if item is inside of arr
  // return true if it is, otherwise return false


function addNumbers(numbers) {
  var numbersTotal = 0;
  for(let i = 0; i < numbers.length; i++) {
    numbersTotal = numbersTotal + numbers[i];
  }
  return numbersTotal;
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  var totalScores = 0;
  var averageTestScore = 0;
  for(let i = 0; i < testScores.length; i++) {
    totalScores = totalScores + testScores[i];
    averageTestScore = totalScores / testScores.length;
  }
  return averageTestScore;
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {
  var largestNumber = 0;
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > largestNumber) {
    largestNumber = numbers[i];
    }
  }
  return largestNumber;
  // numbers is an array of integers
  // return the largest integer
}

function multiplyArguments() {
  var product = 1;
  if (arguments.length === 0){
    return 0;
  } else if(arguments.length === 1) {
    return arguments[0];
  } else {
    for(var i = 0; i < arguments.length; i++) {
      product *= arguments[i];
    }
  }
  return product;

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
