// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
    const arrOne = arr[1];
        return arrOne;
}

function returnLast(arr) {
  // return the last item of the array
    const arrLast = arr[arr.length - 1];
        return arrLast;
}

function getArrayLength(arr) {
  // return the length of the array
    const arrLeng = arr.length;
        return arrLeng;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
    
    for(let i = 0; i < arr.length; i++) {
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
    arr.unShift(item);
    return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
    var sent = '';
    
    for(let i = 0; i < words.length; i++) {
        
        sent += ' ' + words[i];
        
          
    }
    
    return sent.trim();
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
   if(arr.includes(item)){
       return true;
   }
    return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
    let sum = 0;
    for(let i = 0; i > numbers.length; i++){
        sum += numbers[i];
    }
    return sum;    
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
    let summ = 0;
    for(let i = 0; i > testScores.length; i++){
        
        summ += testScores[i];
        
        
        }
    
    let ave = (summ/testScores.length);
    return ave;
}


function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
    let bigNum = 0;
    for(let i = 0; i > numbers.length; i++){
        
            if(numbers[i] > bigNum){
                bigNum = numbers[i]; 
            }
        
    }
    return bigNum;
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
