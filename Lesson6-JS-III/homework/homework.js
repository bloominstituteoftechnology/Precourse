// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  arr = ['Bob Ross', 'Jon Snow', 'Happy Trees'];
  return (arr[0]);
}

function returnLast(arr) {

  arr = ['Bob Ross', 'Jon Snow', 'Happy Trees'];
  // return the last item of the array
 return (arr[3]);
}

function getArrayLength(arr) {
  // return the length of the array
  arr = ['Bob Ross', 'Jon Snow', 'Happy Trees'];
  return (arr.length);
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for(let i=0;i <arr;i++){

  return (arr[i]);
}
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  addItemToArray.push(item);
  return (addItemToArray);
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  addItemToFront.unshift(item);
  return (addItemToFront);
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  words=['Hello','world!'];
  return (words);
  

}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  var isThisReal=item.length;

  for(let i=0; i<isThisReal; i++)
    if(item[i]===item){
    return (true);
    }
      else {
       return (false);
      }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  numbers =[1,2,3,4,5,6,7,8,9];
  var sum =0;
  for(let i=0; i < numbers.length;i++){

    sum = sum + numbers.length[i];

    return (sum);
  }
}


function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average


}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  if(numbers.length ===0){
    return -1;
  }
  var max= numbers[0];
  var maxNumber=0;
  for(let i=1; i<numbers.length;i++){
    if(numbers[i]>max){
      maxNumber= i;
      max= numbers[i];
      return (maxNumber);
    }
  }
}

function multiplyArguments(someRandomArray) {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  someRandomArray=[1,3,5,6];
  var sum=1;
  if(someRandomArray===null)
  return 0;

  else if(someRandomArray < 0 || someRandomArray > 0){
      for(let i=0;i<someRandomArray.length;i++){
      sum=sum+someRandomArray[i];
     return (multiplyArguments(someRandomArray));
      }
  }

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
