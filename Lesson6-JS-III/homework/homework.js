// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
  // return arr.shift();
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
  // return arr.pop();
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (let i = arr.length-1; i >= 0 ; i--) {
    arr[i]++;
  }
  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

/*
function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let s = '';
  for (let i = 0; i < words.length; i++) {
    s += words[i] + ' ';
  }
  return s.slice(0, -1);
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let s = '';
  for (let i = 0; i < words.length; i++) {
    s += words[i] + ' ';
  }
  return s.trim();
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let s = '';
  for (let i = 0; i < words.length; i++) {
    s += words[i];
    if (i + 1 < words.length)
      s += ' ';
  }
  return s;
}
*/

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' ');
}

/*
function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (let i = arr.length-1; i >=0; i--) {
    if (arr[i] === item) {return true;}
  }

  return false;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {return true;}
  }

  return false;
}
*/

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return arr.includes(item);
}

/*
function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  for (let i = numbers.length-1; i >= 0; i--) {
    sum += numbers[i];
  }
  return sum;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let s = 0;
  for (let i = 0; i < numbers.length; i++) {
    s += numbers[i];
  }
  return s;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  function adder(accumulator, currentValue) {
    return accumulator + currentValue;
  }
  return numbers.reduce(adder, 0);
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  const adder = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(adder, 0);
}
*/

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  return numbers.reduce((a,b) => a + b);
}

/*
function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0;
  for (let i = testScores.length-1; i >=0; i--) {
    sum += testScores[i];
  }
  return sum / testScores.length;
}
*/

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  return addNumbers(testScores) / testScores.length;
}

/*
function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++)
     if (numbers[i] > largest) largest = numbers[i];
  return largest;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  return Math.max(...numbers);
}
*/

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  return numbers.reduce((a,b) => a >= b ? a : b);
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
