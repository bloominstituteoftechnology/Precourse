// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}	

function returnLast(arr) {
  let last = arr.length - 1;
  return arr[last];
}	 

function getArrayLength(arr) {
  return arr.length;
}	

function incrementByOne(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] + 1);
  }
  return newArray;
 }

 function addItemToArray(arr, item) {
  arr.push(item);
   return(arr);
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
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
  
}

function averageTestScore(testScores) {
  let avgTestScore = 0;
  let total = 0;
  let tests = testScores.length;
  for (let i = 0; i < testScores.length; i++) {
    total += testScores[i];
  }
  avgTestScore = total / tests;
  return avgTestScore;
}

function largestNumber(numbers) {
  return (Math.max.apply(null, numbers));
}

function multiplyArguments() {
  
  if (arguments.length === 0){
    return 0;
  }else{
    var product = 1;
    for (var i = 0; i < arguments.length; i++){
    product = product*arguments[i];
  }return product;
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
