// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for(let i = 0; i < arr.length; i++){
    arr[i] += 1;
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

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let word_string = '';
  for(let i = 0; i < words.length; i++){
    
    if(i < (words.length - 1)){
      words[i] += ' ';
    }
    //word_string = words[i-1].concat(words[i]);
    word_string += words[i];
  }
  return word_string;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if(arr.length === 0){
    return false;
  }
  else{
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === item){
        return true;
      }
      else {
        return false;
      }
    }
  }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0;
  let average = 0;
  for(let i = 0; i < testScores.length; i++){
    sum += testScores[i];
  }
  average = sum / (testScores.length);
  return average;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let largest_num = Math.max.apply(Math, numbers);

  /*let largest_num = -Infinity;
  for(let i = 0; i < numbers.length; i++){
    
    if (numbers[i] > largest_num){
      largest_num = numbers[i];
    }
  }*/
  return largest_num;
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
