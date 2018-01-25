function getBiggest(x, y) {
	if (x>y) {return x;}
	else if (y>x) {return y;}
	else {return y;} 
}

function greeting(language) {
	if (language == 'German') {return 'Guten Tag!';}
	else if (language == 'English') {return 'Hello!';}
	else if (language == 'Spanish') {return 'Hola!';}
	else {return 'Hello!';}
}

function isTenOrFive(num) {
	if (num == 10 || num == 5) {return true;}
	else {return false;}
}

function isInRange(num) {
	if (num < 50 && num > 20) {return true;}
	else {return false;}
}

function isInteger(num) {
	if (num !== Math.floor(num)) {return false;}
	else {return true;}
}

function fizzBuzz(num) {
	if (num%3 == 0 && num%5 == 0) {return 'fizzbuzz';}
	else if (num%3 == 0) {return 'fizz';}
	else if (num%5 == 0) {return 'buzz';}
	else {return num;}
}

function isPrime(num) {
	if (num == 0 || num == 1) {return false;}
	let coolNums = [];
	for (let i=num; i >= 1; i--)
	{
		if (isInteger(num/i)) {coolNums.push(i);}
	}
	if (coolNums.length > 2) {return false;}
	else {return true;} 
}

function returnFirst(arr) {
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
	for (let i=0; i<arr.length;i++)
	{
		arr[i] = arr[i]+1;
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
	let reps = words.length;
	for (let i=reps;i>0;i--)
	{
		if(i==reps){str = words.shift();}
		else {str = str + ' ' + words.shift();}
	}
	return str;
}

function contains(arr, item) {
	// check to see if item is inside of arr
	// return true if it is, otherwise return false
	let index = -1;
	for(let i=0;i<arr.length;i++)
	{
		if(arr[i] == item){index = 5;}
	}
	if(index == 5){return true;}
	else {return false;}
}

function addNumbers(numbers) {
	// numbers is an array of integers.
	// add all of the integers and return the value
	let added = 0;
	for (let i=0; i<numbers.length;i++)
	{
		added = added + numbers[i];
	}
	return added;
}

function averageTestScore(testScores) {
	// testScores is an array.  Iterate over testScores and compute the average.
	// return the average
	let average = 0;
	average = addNumbers(testScores)/testScores.length;
	return average; 
}

function largestNumber(numbers) {
	// numbers is an array of integers
	// return the largest integer
	let sortedNumbers = numbers.sort(function(a, b){return b-a;});
	let biggest = sortedNumbers.shift();
	return biggest;

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
