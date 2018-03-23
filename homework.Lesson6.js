// Do not change any of the function names

//(Q#1) Test Passed 
function returnFirst(arr) { 
 //const arrFirst = arr[0]
  return arr[0];

  // return the first item from the array
}

//(Q#2) Test Passed 
function returnLast(arr) {
// console arrLast = arr[-1]
  return arr [ arr.length - 1 ];

  // return the last item of the array
}

//(Q#3) Test Passed 
function getArrayLength(arr) { 
  return arr.length; 
  //const length = arr.length; 
  // return the length of the array
}

//(Q#4)
function incrementByOne(arr) {
      for (let i=0; i<arr.length; i++) {
        arr[i] +=1;
     }
return arr;
  // arr is an array of integers  
  // increase each integer by one
  // return the array
}

function addItemToArray(arr, item) {
   return arr.push(item);
  // add the item to the end of the array
  // return the array
}

function addItemToFront(arr, item) {
  return arr.unshift(item);
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}

function wordsToSentence(words) {
  return words.join ('');
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  for ( let i = 0; i < arr.length; i++ ) {
      if ( item[i] === arr ) {
      return true;
} 
  }
   return false; 
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
}

function addNumbers(numbers) {
  let sum = 0;
  for (let i=0; i<numbers.length; i++){
  sum+=numbers[i];
} 
rerurn sum;
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  let sum=0 
  for(let i=0; i<testScores.length; i++) {
          sum += testScores[i];
  }    return (sum / testScores.length); 
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
} 

function largestNumber(numbers) {
  for (var i = 0; i < numbers.length; i++) {
     if (largestNumber[i] === numbers)
      return largestInteger;
  } }
  // numbers is an array of integers
  // return the largest integer
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
