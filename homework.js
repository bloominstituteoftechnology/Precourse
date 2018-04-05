// Do not change any of the function names

const arr = ['Brynne','Lily', 'Whimsy'];
function returnFirst(arr){ return arr[0];
}
// return the first item from the array
 console.log (returnFirst(arr)) ;


 const arr =['Brynne','Lily','Whimsy'];
  function returnLast(arr){ return arr[arr.length -1];
// return the last item of the array

console.log (returnLast(arr));
  }


const arr = ['Brynnne', 'Lily', 'Whimsy'];
function getArrayLength(arr) { return arr.length;
    
  }
console.log(arr.length);
  // return the length of the array


function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
 for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] +1;
  }
   return arr;
  }
  
  const arr = ['Lily','EV','Emmy'];
  var item = 'Simka';
  arr.push(item);
  function addItemToArray(arr, item) {
    return arr; 
  }  
  console.log(arr);
  // add the item to the end of the array
  // return the array

const arr =['Bloodhound','BT Coonhound','Great Dane'];
var item = 'Chihuahua';
arr.unshift(item);
function addItemToFront(arr, item) {
  return arr;
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
} console.log(arr);


const words =['Hello', 'world'];
let newWords = words.concat(['it', 'is', 'a', 'beautiful', 'day.']);

function wordsToSentence(words) { return newWords;
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}console.log(newWords);

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

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
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
