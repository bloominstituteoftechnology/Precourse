// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  const arr = ['Bob Ross', 'Jon Snow', 'Happy Trees'];
  console.log(arr[0]);
}

function returnLast(arr) {

  const arr = ['Bob Ross', 'Jon Snow', 'Happy Trees'];
  // return the last item of the array
  console.log(arr[3]);
}

function getArrayLength(arr) {
  // return the length of the array
  const arr = ['Bob Ross', 'Jon Snow', 'Happy Trees'];
  console.log(arr.length);
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
for(let i=0;i <arr;i++){

  console.log(arr[i]);
}
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  addItemToArray.push(item);
  console.log(addItemToArray);
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  addItemtoFront.unshift(item);
  console.log(addItemToFront);
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  const words=['Hello','world!'];
  console.log(words);
  

}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  var isThisReal=item.length;

  for(let i=0; i<isThisReal; i++)
    if(item[i]===item){
    console.log(true);
  }
      else {
      console.log(false);
     }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  numbers =[1,2,3,4,5,6,7,8,9];
  var sum =0;
  for(let i=0; i < numbers.length;i++){

    sum = sum + numbers.length[i];

    console.log(sum);
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
      console.log(maxNumber);
    }
  }
}

function multiplyArguments(someRandomArray) {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  someRandomArray=[1,3,5,6];
  const sum=1;
  if(someRandomArray===null)
  return 0;

  else if(someRandomArray < 0 || someRandomArray > 0){
      for(let i=0;i<someRandomArray.length;i++){
      sum=sum+someRandomArray[i];
      console.log(multiplyArguments(someRandomArray));
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
