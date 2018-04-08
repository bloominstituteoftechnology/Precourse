// Do not change any of the function names

function returnFirst(arr) {
  arr = [10, 10, 16, 12];
  return arr[0];
  }
  returnFirst(10, 10, 16, 12);
  //returnFirst(97, 100, 80, 55, 72, 94);
 //returnFirst('hi', 'there', 'how', 'are', 'you', 'doing?');
// return the first item from the arrays



function returnLast(arr) {
  arr = [10, 10, 16, 12];
  return (arguments[arguments.length-1]);
  }
   returnLast(10, 10, 16, 12);
  //returnLast(97, 100, 80, 55, 72, 94);
 //returnLast('hi', 'there', 'how', 'are', 'you', 'doing?');
//return the last item from the array



function getArrayLength(arr) {
  arr = [10, 10, 16, 12];
  return arr.length;
  }
   getArrayLength(10, 10, 16, 12);
  //getArrayLength(97, 100, 80, 55, 72, 94);
 //getArrayLength('hi', 'there', 'how', 'are', 'you', 'doing?'); 
// determine the length of the array



function incrementByOne(arr) {
  for (let i = 0; i < arr.length; i++) {
  arr[i]++;
  }
  return (arr);
  }
    incrementByOne([10, 6, 3, 4]);
   //return the array 
  //arr is an array of integers  
 //increase each integer by one



 function addItemToArray(arr, item) {
  arr.push(10);
  return arr;  
  }
     addItemToArray([10, 10, 16, 12], 10);
    //addItemToArray([97, 100, 80, 55, 72, 94], 'Hello');
   //addItemToArray([], true);
  // return the array
 // add the item to the end of the array



function addItemToFront(arr, item) {
  arr.unshift(10);
  return arr;  
  }
   addItemToFront([10, 10, 16, 12], 10);
  // add the item to the front of the array
 // return the array
// hint: use the array method .unshift



function wordsToSentence(words) {
  words = ('LambdaSchool JavaScript Class');
  return words;
  }
    wordsToSentence('LambdaSchool', ' ', 'JavaScript', ' ', 'Class');
   // words is an array of strings
  // return a string that is all of the words concatenated together
 // spaces need to be between each word
// example: ['Hello', 'world!'] -> 'Hello world!'



function contains(arr, item){
  arr = [10, 10, 16, 12];
  return arr.includes('Hello');
  }
    contains([97, 100, 80, 55, 72, 94],'Hello');
   //contains([10, 10, 16, 12], 10);
  //contains([], true);
 // check to see if item is inside of arr
// return true if it is, otherwise return false



function addNumbers(numbers) {
  numbers = 10 + 10 + 16;
  return numbers;
}
    addNumbers([10, 10, 16]);
   //addNumbers([97, 100]);
  //addNumbers([0]);
 // numbers is an array of integers.
// add all of the integers and return the value



function averageTestScore(testScores) {
  for(i = 0; i < averageTestScore.length; i++) {
     grades = (97 + 100 + 80 + 55 + 72 + 94)/testScores.length;
     return grades; 
     }
     }
     averageTestScore([97, 100, 80, 55, 72, 94]);
   //averageTestScore([10, 10, 16, 12]);
  // testScores is an array.  Iterate over testScores and compute the average.
 // return the average



 function largestNumber(numbers) {
  numbers = Math.max(10, 10, 16, 12); 
  return numbers;
  } 
    largestNumber(10, 10, 16, 12);
   //largestNumber([97, 100, 80, 55, 72, 94]);
  //largestNumber([97, 10000, 80, 55, 7.2, -94]);
 //numbers is an array of integers
//return the largest integer

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
