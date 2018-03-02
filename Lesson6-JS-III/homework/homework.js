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
  
    for(var x = 0; x < arr.length; x++){
      arr[x] = arr[x] + 1;
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
  var sentence = '';
  for(var x = 0; x < words.length; x++){
    sentence = sentence + ' ' + words[x];
  }
  return sentence.trim();
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (var x = 0; x <arr.length; x++){
    if (arr[x] === item)
    return true;
  }
  return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var SumOfNumbers = 0;
  for(var x = 0; x < numbers.length; x++){
    SumOfNumbers = SumOfNumbers + numbers[x];
  }
  return SumOfNumbers;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var avgTestScore = 0;
  for (var x = 0; x < testScores.length; x++){
    avgTestScore = avgTestScore + testScores[x];
  }
  return avgTestScore / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var largestNum = 0;
  for(var x = 0; x < numbers.length; x++){
    if (numbers[x] > largestNum && numbers[x] !== largestNum)
    largestNum = numbers[x];
  }
  return largestNum;
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
};
