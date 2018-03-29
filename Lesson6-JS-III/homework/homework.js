// Do not change any of the function names

function returnFirst(arr) {
  return(arr[0]);
}

function returnLast(arr) {
  return(arr[arr.length-1]);
}

function getArrayLength(arr) {
  return(arr.length);
}

function incrementByOne(arr) {

  for(let i=0; i<arr.length;i++){
    arr[i]++;
  }
  return(arr);
  // arr is an array of integers  
  // increase each integer by one
  // return the array
}

function addItemToArray(arr, item) {
  arr.push(item);
  return(arr);
  // add the item to the end of the array
  // return the array
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return(arr);
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}


function wordsToSentence(words) {
  let sentence= words[0];
  for(let i=1;i<words.length;i++){
    sentence=sentence + ' ' + words[i];
  }
  return(sentence);
}

function contains(arr, item) {
  for(let i=0; i<arr.length; i++){
    if (arr[i]===item){
      return(true);
 }}
 return(false);
  // check to see if item is inside of arr
  // return true if it is, otherwise return false

}
function addNumbers(numbers) {
  let answer=0;
  for(let i=0;i<numbers.length;i++){
    answer=answer+numbers[i];
  }
  return(answer);

  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  let total=0;
  for(let i=0;i<testScores.length; i++){
    total=total+testScores[i];
  }
  let average=total/testScores.length;
  return(average);
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
}

function largestNumber(numbers) {
  let largestNum=0;
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]>largestNum){
      largestNum=numbers[i];
    }
  } return(largestNum);
  // numbers is an array of integers
  // return the largest integer
}

function multiplyArguments() {
if(arguments.length===0){
  return(0);
}else if(arguments.length===1){
  return(arguments[0]);
}else{
  let answer=1;
  for(let i=0;i<arguments.length; i++){
    answer=answer*arguments[i];
  }
  return(answer);
}

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