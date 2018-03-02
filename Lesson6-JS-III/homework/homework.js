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
  for (let i=0; i<arr; i++){
    return arr[1];
  }
}

function addItemToArray(arr, item) {
    arr.push (item); 
    return arr;
}

function addItemToFront(arr, item) {
    arr.unshift (item);
    return arr;
}

function wordsToSentence(words) {
  words.join(' ');
}

function contains(arr, item) {
  if (arr.indexOf('item')){
  return true;
  }
  return false;
}

function addNumbers(numbers) {
  for (let i=0; i=numbers.length; i++){
    let sum = sum + numbers[i];
    return sum;
  }
}

function averageTestScore(testScores) {
  for (let i=0; i<testScores.length; i++){
    let sum = sum + testScores[i];
    if (i<testScores.length){
    let ave = sum/testScores.length;
    return ave;
    }
  }
  
}

function largestNumber(numbers) {
  let largest = 0;
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i] > largest){
      largest = numbers[i];
    }
    return largest;
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
};
