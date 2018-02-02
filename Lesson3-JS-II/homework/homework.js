// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y){
	return x;
  }
  else{
	return y;
  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language != null)
  {
	language = language.toLowerCase();
  }
  switch (language){
	case ('german'):
		return 'Guten Tag!';
	case ('english'):
		return 'Hello!';
	case ('spanish'):
		return 'Hola!';
	default:
		return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return (num == 10 || num == 5);
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  return (num > 20 && num < 50);
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return (num == Math.floor(num));
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  let result = '';
  if (num % 3 == 0)
  {
	result += 'fizz';
  }
  if (num % 5 == 0)
  {
	result += 'buzz';
  }
  
  if (result == '')
  {
	result = num;
  }
  return result;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  let result = [];
  for (let x = 1; x <= num; x++)
  {
	if (num % x == 0)
	{
		result.push(x);
    }
  }
  return (result.length == 2);
}

function returnFirst(arr) {
  // return the first item from the array
  return arr.shift();
}

function returnLast(arr) {
  // return the last item of the array
  return arr.pop();
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (let x = 0; x < arr.length; x++)
  {
	arr[x] += 1;
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
  let result = words[0];
  for (let x = 1; x < words.length; x++)
  {
	result += ' ';
	result += words[x];
  }
  return result;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (let x = 0; x < arr.length; x++)
  {
	if (arr[x] == item)
	{
		return true;
	}
  }
  return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let result = 0;
  for (let x = 0; x < numbers.length; x++)
  {
	result += numbers[x];
  }
  return result;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let result = 0;
  for (let x = 0; x < testScores.length; x++)
  {
	result += testScores[x];
  }
  return result / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  
  let result = 0;
  
  for (let x = 0; x < numbers.length; x++)
  {
	if (numbers[x] >= result)
	{
		result = numbers[x];
	}
  }
  return result;
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
