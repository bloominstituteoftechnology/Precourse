// Do not change any of the function names

function returnFirst(arr) {
  return arr [0];
}

function returnLast(arr) {
      return arr [arr.length-1];
}

function getArrayLength(arr) {
       return (arr.length);  
}

function incrementByOne(arr) {
  for (let i = 0; i < arr.length; i++) 
  { arr[i] = arr[i] + 1;}
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
  for (let i=1; i< words.length;i++){
    sentence = sentence + ' ' + words[i];
  }
  return sentence; 
 }

function contains(arr, item) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === item)
      {return true;}
    }
  return false;
}

function addNumbers(numbers) {
  let num = 0;
  for(let i = 0; i < numbers.length; i++){
    num = num + numbers[i];
  }return num;
  // numbers is an array of integers.
  // add all of the integers and return the value
}

function averageTestScore(testScores) {
  let avg = 0;
for (let i = 0; i < testScores.length; i++){
  avg = avg + testScores[i];
}
return avg / testScores.length;
}

function largestNumber(numbers) {
  let biggest = 0;
 for (let i=0; i< numbers.length;i++){
   if (numbers[i]>biggest){
     biggest = numbers[i];
   }
}
return biggest;
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
