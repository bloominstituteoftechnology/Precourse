// Do not change any of the function names


function returnFirst(arr){ 
  return arr[0];
}
// return the first item from the array
 


 
  function returnLast(arr){ 
    return arr[arr.length -1];
  }
// return the last item of the array

  



function getArrayLength(arr) { 
  return arr.length;  
  }

  // return the length of the array


function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
 for (let i = 0; i < arr.length; i++){
    arr[i] += 1 ;
}
 return arr;
}
  
 
  
function addItemToArray(arr, item) {
  arr.push(item);
  return arr; 
}  
  
  // add the item to the end of the array
  // return the array

 
 
 
function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
 
  function wordsToSentence(words) { 
  let newWords = words.join(' ');
  return newWords; 
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
   i = 0, count = arr.length, matchFound = false; {
  
 for(; i < count; i++) {
     if (arr[i] === item) {
         matchFound = true;
     }
 }
 return matchFound;
}
}


function addNumbers(numbers){
  let total = 0;
  for (let i = 0; i < numbers.length; i++){
     total += numbers[i];
  }
     return total;
  }// numbers is an array of integers.
  // add all of the integers and return the value

  
function averageTestScore(testScores) {
  let sum = 0;
	for (let i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
		return sum / testScores.length;
	} // testScores is an array.  Iterate over testScores and compute the average.
	// return the average


function largestNumber(numbers) {
  return Math.max.apply(null, numbers);
  // numbers is an array of integers
  // return the largest integer
}

function multiplyArguments() {
  let product = 1;
  if (arguments.length === 0) {
    return 0;
   }
  if (arguments.length === 1) {
    return arguments[0];
  }
for (let i = 0; i < arguments.length; i++) { 
        product *=  arguments[i];
  }
  return product; 
}
 
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it


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
