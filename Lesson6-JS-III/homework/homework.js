// Do not change any of the function names

  // return the first item from the array
  
  function returnFirst(arr) {
    return arr[0];
  }

  // return the last item of the array
  function returnLast(arr) {
    return arr[arr.length -1];
}

// return the length of the array
function getArrayLength(arr) {
  return arr.length;
}

  // arr is an array of integers  
  // increase each integer by one
  // return the array
  function incrementByOne(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] + 1;
    } return arr;
  }

  // add the item to the end of the array
  // return the array
  function addItemToArray(arr, item) {
    arr.push(item); 
   return arr;
}

  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  function addItemToFront(arr, item) {
    arr.unshift(item); 
      return arr;
    }

  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  function wordsToSentence(words) {
      return words.join(' ');
 }

// check to see if item is inside of arr
  // return true if it is, otherwise return false
function contains(arr, item) {
 if (arr.includes(item)) {
  return true;
} else {
  return false;
}
}

  // numbers is an array of integers.
  // add all of the integers and return the value
  function addNumbers(numbers) {
      let sum = 0;
          for (let i = 0; i < numbers.length; i++) {
            sum = sum + numbers[i];
          } return sum;
    }

  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  function averageTestScore(testScores) {
    let sum = 0;
    for (let i = 0; i < testScores.length; i++) {
      sum = sum + testScores[i];
    } return sum / testScores.length;
  }

  // numbers is an array of integers
  // return the largest integer
  function largestNumber(numbers) {
      let comparison = 0;
      for (let i = 0; i < numbers.length; i++) {
        if (comparison < numbers[i]) {
          comparison = numbers[i];
        }
      } return comparison;
  }

  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
function multiplyArguments() {
  if (arguments.length === 0) {
      return 0;
    } else {
      let product = 1;
      for (let i = 0; i < arguments.length; i++) {
        product = product * arguments[i];
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
