// Do not change any of the function names

function returnFirst(arr) {
  return arr.shift();
}

function returnLast(arr) {
  return arr.pop();
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
  let sentence = '';
  for (let i = 0; i < words.length - 1; i++) {
    sentence = sentence + `${words[i]} `;
  }
  sentence = sentence + words[words.length -1];
  return sentence;
}

function contains(arr, item) {
  return arr.includes(item);
}

function addNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]; 
  }
  return sum;
}

function averageTestScore(testScores) {
  let sum = 0;
  for (let i = 0; i < testScores.length; i++) {
    sum = sum + testScores[i];
  }
  return sum / testScores.length;
}

function largestNumber(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  return max;
}

function multiplyArguments() {
  if (arguments.length === 0) {
    return 0;
  } 
  else if (arguments.length === 1) {
    return arguments[0];
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
