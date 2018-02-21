// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array

  const returnfirst = ["april","may","june"];

console.log(returnfirst[0]);
}
  returnFirst();


function returnLast(arr) {
  // return the last item of the array
 const returnLast = ["april","may","june"];

  console.log(returnLast[2]);
}
returnLast();

function getArrayLength(arr) {
  // return the length of the array

  const getArrayLength = ["april", "may", "june"];

    console.log(getArrayLength.length); 
}
getArrayLength();




function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  const addItemToArray = ["red","black"];
  addItemToArray.push("purple");
  console.log(addItemToArray);
}
addItemToArray();

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  const addItemToFront = ["red","black"];
  addItemToFront.unshift("green");
  console.log(addItemToFront);
  
}
addItemToFront();

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  var sentence ="";
  for (var i = 0; i < words.length; i++){
    sentence += ' ' + words[i];
  }
  return sentence.trim();
}

console.log(wordsToSentence(['this', 'is', 'a', 'sentence']));


function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber,
};
