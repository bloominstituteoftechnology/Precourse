// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for(let i=0; i<arr.length; i++){
    arr[i]=arr[i]+1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  let sentence = words[0];
  for(let i=1; i <words.length; i++){
    sentence = sentence + ' ' + words[i];
  }
  return sentence;
}

function contains(arr, item) {
  for (let i =0; i < arr.length; i++){
    if(arr[i] === item){
      return true;
    }
  }
  return false;
 }


function addNumbers(numbers) {
  let sum = 0;
  for (let i=0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  return addNumbers(testScores)/testScores.length;
}

function largestNumber(numbers){
  let flag = 0;
  for(let i = 0; i <numbers.length; i++){
    if(numbers[flag] <= numbers[i]){
      flag = i;
    }
  }  
  return numbers[flag];
}

function multiplyArguments(){
  if(arguments.length === 0){
    return 0;
  }
  else{
    let prod = 1;
    for (let i =0; i<arguments.length;i++){
      prod = prod*arguments[i];
    }
  return prod;
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
