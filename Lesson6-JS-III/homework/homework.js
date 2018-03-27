// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for (let i = 0; i < arr.length; i++){
    arr[i]++;
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
  return arr.includes(item);
}

function addNumbers(numbers) {
  let sum = numbers.reduce(function(a,b){
    return a + b;
  });
  return sum;
}

function averageTestScore(testScores) {
  let sum = testScores.reduce(function(a,b){
    return a + b;
  });
  return sum/testScores.length;
}

function largestNumber(numbers) {
  let max = numbers.reduce(function(a,b){
    return Math.max(a,b);
  });
return max;
}

function multiplyArguments() {
  if (arguments.length === 0 ){
    return 0;
  } else {
  let theProduct = 1;
  for (let i = 0; i < arguments.length; i++){
    theProduct *= arguments[i];
  }
  return theProduct;
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
