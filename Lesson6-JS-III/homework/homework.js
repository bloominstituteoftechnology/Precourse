// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];                        // return the first item from the array
}

function returnLast(arr) {
  return (arr[arr.length - 1]);
}

function getArrayLength(arr) {
  return arr.length;// return the length of the array
}

function incrementByOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (arr[i]) + 1;
  }
 return arr;
 }

 function addItemToArray(arr, item) {
     arr.push(item);
    return arr;                           // return the array
 }

 function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
 }

 function wordsToSentence(words) {
  let sum = '';
  for (let i = 0; i < words.length; i++) {
    sum = sum + words[i] + ' ';
  }
  sum = sum.slice(0, - 1);
  return sum;
  }

 function contains(arr, item) {
   for (let i = 0; i < arr.length; i++) {
     if (item === arr[i]) {  
       return true;
     }
   }
   return false;
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
  sum = (sum / testScores.length);
  return sum;
}

function largestNumber(numbers) {
  let largest = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      largest = numbers[i];
    }
  }
 return largest; 
}

  // numbers is an array of integers
  // return the largest integer


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
