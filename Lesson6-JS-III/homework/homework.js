// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array

   // const returnFirst//= [10, 10, 16, 12];

    return (arr[0]);
 }
       


function returnLast(arr) {
  // return the last item of the array
 //const returnLast // =[10, 10, 16, 12];

  return arr[arr.length -1];
}


function getArrayLength(arr) {
  // return the length of the array

 // const getArraylength// = [10, 10, 16, 12];

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
  var sentence ='';
  for (var i = 0; i < words.length; i++){
    sentence += ' ' + words[i];
  }
  return sentence.trim();
}

//console.log(wordsToSentence(['this', 'is', 'a', 'sentence']));


function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
        return true;
    }
}
return false;
}



function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var nums = numbers, 
    num = 0;

for (var i = 0; i < nums.length; i++) {
    num += nums[i];
}
return(num);

}
//addNumber();

  
 
function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
   
  var sum = 0; 
  if (testscores > 0) { 
      for (i = 0; i < testScores; i++) {
          sum += grades[i][2]; 
      }
      return sum 
  }
  return 0;
 }




function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
   
var constant = 1;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > constant) {
        constant = numbers[i];
    }
   }  

return constant;    // after iterating the entire array!
}
var numbers = [3, 4, 2, 6, 45, 775, 83, 5, 7];
return(largestNumber(numbers));


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
