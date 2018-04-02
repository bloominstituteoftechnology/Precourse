// Do not change any of the function names

function returnFirst(arr) {
  var first = arr.shift();
return first;
}

            
function returnLast(arr) {
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 1;
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

//ZLE
function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let sentence = words.toString();
  return sentence;
}

//ZLE
function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if (arr.find(item)) {
      return true;
    } else {
        return false;
      }
    }

function addNumbers(numbers) {
  let all = numbers.reduce(function (acc, currV, currI, arr) { 
      return acc + currV; 
  }, 0);
    return all;
}

function averageTestScore(testScores) {
  let all = testScores.reduce(function (acc, current) {
    return acc + current;
  }, 0);
  let average = (all / testScores.length-1);
  return average;
}

function largestNumber(numbers) {
  let largest = Math.max.apply(Math, numbers);
  return largest;
}

//ZLE
function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
    for (let i = 0; i < arguments.length; i++) {
        if (arguments === null) {
            return 0;
        } else if (arguments.length === 1) {
            return arguments[0];
        } else {
            return (arguments[i]=arguments[i]*i++);
        }
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
