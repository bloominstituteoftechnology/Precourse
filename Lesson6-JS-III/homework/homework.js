
function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}



function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
}


function getArrayLength(arr) {
  return arr.length;
  // return the length of the array
}


function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  var increasedValue = 0;
  const tempArr = [];
  for(let i=0; i<arr.length; i++){
    increasedValue = arr[i]+1 ; 
    tempArr[i] =  increasedValue;
  }
   return tempArr;
  
}






function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  const arrTemp = [];
  arr.push(item);
  for(let i =0; i<arr.length; i++){
    arrTemp[i] = arr[i];
  }
  return arrTemp;
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
  var loaclSentence =words.join(' '); //using a string to store the array so it can be at the same base with space between.

  return loaclSentence;
}


function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  var i =0;
  for (i in arr){ //I should put the second return outside of the loop since the first one ends for in loop the loop
  // It's okay to end it early if you
  // found a boolean. if the loop never finds a boolean it reaches return false.
 
    if(arr[i]===item){
      return true;
    }
   
  }
  return false;
}


function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var values = 0;
  for(let i =0; i<numbers.length; i++){
    values = numbers[i]+values;
  }
  
  return values;
}


function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var total = 0;
  var average=0;
  for(let i=0; i<testScores.length; i++){
    total = testScores[i]+total;
    average = total/(i+1);
  }
  
  return average;
}




function largestNumber(numbers) {
  return Math.max.apply(Array,numbers);
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
