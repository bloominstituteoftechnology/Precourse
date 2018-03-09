// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if(x===y){ return x;}
  else if(x > y){return x;}
  else{return y;}
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if(language === 'German'){return 'Guten Tag!';}
  else if(language === 'English' || language === undefined){return 'Hello!';}
  else if(language === 'Spanish'){return 'Hola!';}
  else{return 'Hello!';}

}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if(num === 5 || num === 10){return true;}
  else{return false;}
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if(num <= 20 || num >= 50){return false;}
  else{return true;}
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if(num === Math.floor(num)){return true;}
  else{return false;}
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if(num % 3 === 0 && num % 5 ===0){return 'fizzbuzz';}
  else if(num % 3 === 0){return 'fizz';}
  else if(num % 5 === 0){return 'buzz';}
  else{return num;}
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if(!(num === 0 || num === 1)){
    let count = 0;
    for(let i = 1; i <= num; i++){
      if(num % i === 0){count = count + 1;}
    }
    if(count >=3){return false;}
    else{return true;}
  }
  else{return false;}
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
  for(let i = 0; i<= arr.length - 1; i++){
    arr[i] += 1;
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
  let wordsConcatenated = words[0];
  for(let i = 1; i <= words.length - 1; i++){
    wordsConcatenated += ' ';
    wordsConcatenated +=  words[i]; 
  }
  return wordsConcatenated;
  //****** NEEDS FIXING *****/
  //also words.join(' ')
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for(let i = 0; i<= arr.length; i++){
   //console.log(arr[i]);
    if (arr[i] === item){return true;}
    else{return false;}
  }
  //Also arr.include(item)
  //testing might be wrong
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average 
  let sum = 0; let average;
  for(let i = 0; i <= testScores.length-1; i++){
    sum = sum + testScores[i];
  }
  average = sum/(testScores.length);
  return average;

  //Also addNumbers(testScores)/testScores.length
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer 
  //  numbers = [2, 4, 1, 5, 0]
  let largest = numbers[0];
  for(let i = 1; i <= numbers.length-1 ; i++){
    if(numbers[i]> largest){
      largest = numbers [i];
    }
  }
  return largest;
  // ****** NEEDS FIXING ******
}

/*
  Feynman Writing Prompts for 
  for: keyword in the JS programming language used in 'for' loops. This loop
  contain three conditions: staring iteration, condition and ending iteration
  For loos will repeat until the condition becomes false
  &&, ||, ! : Comparision operators are used to compare two statements and/or
  values in the same condition. Pretty usefull budies, each one of them have its
  own pecularity. For example, under && operator, the condition will return true
  if and only of both conditions are true. || will be true if one of the contitions
  are true and ! will negate the statement
  Arrays: type of data structure in JS where various variables can be stored under
  the same name.
*/

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
