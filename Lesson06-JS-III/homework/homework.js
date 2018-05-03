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
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i]+1);
  }
  return arr1;
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
  let newNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    newNumber += numbers[i];
  }
  return newNumber;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let totalScore = 0;
  let avgScore = 0;
  for (let i = 0; i < testScores.length; i++) {
    totalScore += testScores[i];
    avgScore = totalScore/testScores.length;
  }
  return avgScore;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let biggestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= biggestNumber) {
      biggestNumber = numbers[i];
    }
  }
  return biggestNumber;
}

function multiplyArguments() {
 // use the arguments keyword to multiply all of the arguments together and return the product
 // if no arguments are passed in return 0
 // if one argument is passed in just return it
 let productTotal = 1;
 let answer = 0;
 for (let i = 0; i < arguments.length; i++) {
   if (arguments.length == 0) {
     return 0;
   } else {
     productTotal *= arguments[i];
     answer = productTotal;
   }
 }
 return answer;
}

// can be solved by converting arguments into an array by adding(...restArgs) after last parameter.
//  function multiplyArguments(...restArgs) {
//    let productTotal = 1;
//    let answer = 0;
//    for (let i = 0; i < restArgs.length; i++) {
//      if (restArgs.length == 0) {
//        return 0;
//      } else {
//        productTotal *= restArgs[i];
//        answer = productTotal;
//      }
//    }
//    return answer;
//  }


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
