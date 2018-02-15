// Do not change any of the function names

function returnFirst(arr) {
   return (arr[0]);
}

function returnLast(arr) {
   return (arr[arr.length - 1]);
}

function getArrayLength(arr) {
   return (arr.length);
}

function incrementByOne(arr) {
   for (let i = 0; i < arr.length; i++) {
      arr[i]++;
   } return (arr);
}

function addItemToArray(arr, item) {
   arr.push (item);
   return (arr);
}

function addItemToFront(arr, item) {
   arr.unshift (item);
   return (arr);
}

function wordsToSentence(words) {
   let sentence = words[0];
   for (let i = 1; i < words.length; i++) {
      sentence = sentence + ' ' +  words[i];
   }
   return (sentence);
}

function contains(arr, item) {
   for(let i =0; i < arr.length; i++)
    {
        if(arr[i] === item){
           return true;
        }
    }
    return false;
}


function addNumbers(numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
   } return (sum);
}

function averageTestScore(testScores) {
   let total = 0;
   for (let i = 0; i < testScores.length; i++) {
      total += testScores[i];
   }
    let average = (total / testScores.length); {
       return (average);
    }
}

function largestNumber(numbers) {
   let largest = 0;
   for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > largest) {
         largest = numbers[i];
      }
   }
   return (largest);
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
