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

function wordsToSentence(words) {
  let sentence = words.join(' ');
  return sentence;
}

function contains(arr, item) {
  if (arr.find(k=> k==item)){
    return true;
    } else {
      return false;
    }
  }

function addNumbers(numbers) {
  let all = numbers.reduce(function (acc, currV) { 
      return acc + currV; 
  }, 0);
    return all;
}

function averageTestScore(testScores) {
  let all = testScores.reduce(function (acc, current) {
    return acc + current;
  }, 0);
  let average = (all / testScores.length);
  return average;
}

function largestNumber(numbers) {
  let largest = Math.max.apply(Math, numbers);
  return largest;
}

// use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
function multiplyArguments() {
  let args = Array.from(arguments);
  if (args.length > 1) {
    return args.reduce((previous, current) => {
      return previous * current;
    });
  } else if (args.length === 0) {
    return 0;
  } else if (args.length <= 1) {
    return args[0];
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
