// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
return arr[0]; 
}

function returnLast(arr) {
  // return the last item of the array
  const list = arr.length;
  return arr[list+1];
}

function getArrayLength(arr) {
  // return the length of the array
  return length.arr;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (let i = 0; i < arr.length; i++){
    console.log(i+1);
  }
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
}

function wordsToSentence(words) {

  words.toString();
  console.log(words);

  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
};

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (let i = 0; i<arr.length; i++) {
    if (item == i){
      console.log('yes');
    }
    else{
      console.log('no');
    }
  }
};

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  for(let i = 0; i<numbers.length; i++){
    sum += numbers[i];
  }
};

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  for(let i = 0; i<testScores.length; i++){
    var avg = (testScores[i]/testScores.length) * testScores.length;
  console.log(avg);
};

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  for(let i = 0; i < numbers.length; i++){
    var p = 0;
    if (i>p){
      p = i;
    }
    console.log(p); 
  }
};

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
