// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array

   // const returnFirst//= [10, 10, 16, 12];

   const firstArrayItem = arr[0];

   return firstArrayItem;
 
 }
 
    


function returnLast(arr) {
  // return the last item of the array
 //const returnLast // =[10, 10, 16, 12];

 const lastArrayItem = arr[arr.length - 1];

 return lastArrayItem;

}


function getArrayLength(arr) {
  // return the length of the array

     return arr(arr.length); 
}




function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push (item);
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
  
  const str = words.join('');

  return str;
  
  }
  

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === item)

      return true;

    }

    return false;

  }



function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let arrSumVal = 0;
  for (let i = 0; i < numbers.length; i++) {

    arrSumVal = arrSumVal + numbers[i];

  } return arrSumVal;

}

  
 
function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
   
  let avg = 0;

  for (let i = 0; i < testScores.length; i++) {

    avg = avg + testScores[i];

  }

  return avg / testScores.length;

}



function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
   
  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > largest && numbers[i] !== largest) {

      largest = numbers[i];

    }

  } return largest;

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
