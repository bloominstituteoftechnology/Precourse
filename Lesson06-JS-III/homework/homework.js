// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length -1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
 for (var i = 0; i < arr.length; i++) {
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


function wordsToSentence(words) {
   return words.join(' ');
}

function contains(arr, item) {
 for (var i = 0; i < arr.length; i++) {
   if (arr[i] === item) {
     return true;
   }
 }
  return false;
}

function addNumbers(numbers) {
  let count = 0;
  for (let i =0; i < numbers.length; i++) {
    count = count + numbers[i];
  }
  return count;
}

function averageTestScore(testScores) {
  let count = 0;
  for (let i =0; i < testScores.length; i++) {
    count = count + testScores[i];
  }
  return count / testScores.length;
  } 
  
  function largestNumber(numbers) {
    let biggestNum = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > biggestNum) {
        biggestNum = numbers[i];
      }
    }
    return biggestNum;
  }
  

  function multiplyArguments() {
    let multipliedNum = 1;
    if (arguments.length === 0) {
      return 0;
    } else if (arguments.length === 1) {
      return arguments[0];
    } else {
    for (var i = 0; i < arguments.length; i++) {
      multipliedNum = multipliedNum * arguments[i];
      }
    }
    return multipliedNum;
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
