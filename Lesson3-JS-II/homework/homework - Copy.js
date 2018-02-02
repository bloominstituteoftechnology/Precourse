// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x>y) {
    return x;
  }
  else if (x<y) {
    return y;
  }
  else {
    return x;
  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language ==='German') {
    return('Guten Tag!');
  }
  else if (language ==='English') {
    return("Hello!")
  }
  else if (language === 'Spanish') {
    return ("Hola!")
  }
  else {
    return 'Hello!'
  }
}
console.log(greeting('German'))

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10 || num === 5) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isTenOrFive(5)) 


function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if (num > 20 && num<50){
    return true;
  }
}
//console.log(isInRange(51))


function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor

if ((num - Math.floor(num)) === 0) {
  return true;
}
else {
  return false;
}
}

//console.log(isInteger(3))

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num%3 === 0 && num%5 === 0) {
    return 'fizzbuzz'
  }

  else if (num%3 === 0) {
    return 'fizz'
  }

  else if (num%5 === 0) {
    return 'buzz'
  }
  else return num
}

//console.log(fizzBuzz(3))

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  for (let i=2; i<num; i++) {
    if (num%i === 0) {
      //console.log("i =", i)
      return false
    }
  }
  
  return true
}

//console.log("The number is prime:", isPrime(16))

function returnFirst(arr) {
  // return the first item from the array
  return arr[0]
}
//console.log(returnFirst([1,2,3,4,5]))


function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1]
}
//console.log(returnLast([1,2,3,4,5]))

function getArrayLength(arr) {
  // return the length of the array
  return arr.length
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (i=0; i<arr.length; i++) {
    arr[i]+=1
  }
  return arr
}
arr = [1,2,3,4,5]
//console.log(incrementByOne(arr))*/


function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item)
  return arr
}

//console.log(addItemToArray(arr,10))

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item)
  return arr
}
//console.log(addItemToFront(arr, 10))


function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let str = ''
  for (let i=0; i<words.length; i++) {
    //console.log("This is i: ", i,'; This is words[i]: ', words[i] );
    str+=' '+(words[i]);
    //console.log("This is str: ", str);
  }
  return str
}
//words = ['a','b','c','d','e','f','g']
//console.log("This is the modified words: ", wordsToSentence(words))



function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (let i=0; i<arr.length; i++)
  if (arr[i]===item) {
    return true
  }
  return false
  
}
//words = ['a','b','c','d','e','f','g']
//console.log("The array contains the item: ",contains(words,'z'))


function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  sum = 0;
  for (let i=0; i<numbers.length; i++) {
    //console.log("This is i: ", i)
    //console.log("this is numbers[i]", numbers[i])
    sum=sum+numbers[i]
    //console.log("This is sum:", sum)
  }
  return sum
}
//numbers = [1,2,3]
//console.log("This is the sum of the array: ", addNumbers(numbers))


function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  sum = 0
  for (let i=0; i<testScores.length; i++) {
    sum+=testScores[i]
    //console.log("This is sum: ", sum)
  }
  return (sum/testScores.length)
}

numbers = [5,5,5]
averageTestScore(numbers)
console.log(averageTestScore(numbers))


function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let largest = 0
for (let i=0; i<numbers.length; i++) {
  if (numbers[i]>largest) {
    largest = numbers[i]
  }

  }
  return largest;
}
//numbers = [1,2,3,4,5,65,45,34,78]
//largestNumber(numbers)
//console.log("This is the largest number from array: ", largestNumber(numbers))

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
