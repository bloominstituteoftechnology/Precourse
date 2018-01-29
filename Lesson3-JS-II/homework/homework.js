// Do not change any of the function names
//1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
//		
//	* `for` 
//     Do a task a specifc number of times
//	* `&&`, `||`, `!` 
//      && - both statements must evaluate true
//      || - one of the statements must evaluate true    
//      ! - The opposite off the statement
//	* Arrays 
//    List of items


function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x>y){
    return x;
  } else {
    return y;
  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if(language === 'German'){
    return 'Guten Tag!';
  } else if(language === 'English'){
    return 'Hello!';
  } else if(language === 'Spanish'){
    return 'Hola!';
  } else{
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if(num === 10 || num === 5){
    return true;
  } else {
    return false;
  }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if(num < 50  && num > 20){
    return true;
  } else{
    return false;
  }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if(Math.floor(num) === num){
    return true;
  }else {
    return false;
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if(num%3 === 0 && num%5 === 0 ){
    return 'fizzbuzz';
  }
  else if(num%3 === 0){
    return 'fizz';
  } else if(num%5 === 0){
    return 'buzz';
  }
  else{
    return num;
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  let count = 0;
  for(let x = 2; x <= num; x++){

    let primeCheck = num%x;

    if(primeCheck === 0){
      count++;
      if(x === num){
        if(count > 1){
          return false;
        } else {
          return true;
        }
      }
    }
  }
  return false;
}

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for(let x=0;x<=arr.length-1;x++){
    arr[x]++;
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
  let str = '';
  for(let x=0;x<=words.length-1;x++){
    str += words[x];
    if(x !== words.length-1){
      str += ' ';
    }
  }
  return str;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for(let x=0;x<=arr.length-1;x++){
    if(arr[x] === item){
      return true;
    }
  }
  return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  for(let x=0;x<=numbers.length-1;x++){
     sum += numbers[x];
  }
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0;
  for(let x=0;x<=testScores.length-1;x++){
     sum += testScores[x];
  }
  return sum/(testScores.length);

}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let largest = 0;
  for(let x=0;x<=numbers.length-1;x++){
    if(numbers[x] > largest){
      largest = numbers[x];
    }
  }
  return largest;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
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
  largestNumber: largestNumber
};
