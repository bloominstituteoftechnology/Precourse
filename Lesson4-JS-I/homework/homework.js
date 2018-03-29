//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = String('first_name');

//create a number variable, it can be any number
const newNum = Number(42);

//create a boolean variable
const newBool = Boolean(true);

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  return (str);
}

function add(x, y) {
	const sum = (x + y);
	return sum;
}

function subtract(x, y) {
	const difference = (x - y);
	return difference;
}

function multiply(x, y) {
	const product = (x * y);
	return product;
}

function divide(x, y) {
	const product = (x / y);
	return product;
}

function areEqual(x, y) {
	if(x == y){
		return true;
	}
	
	return false;
}

function areSameLength(str1, str2) {
	if(str1.length === str2.length) {
		return true;
	} return false;
}

function lessThanNinety(num) {
	if(num < 90) {
		return true;
	} return false;
}

function greaterThanFifty(num) {
	if(num > 50) {
		return true;
	} return false;
}

function getRemainder(x, y) {
	var remainder = x % y;
	return remainder;
}

function isEven(num) {
	if(num % 2 === 0) {
		return true;
	} return false;
}

function isOdd(num) {
	if(num % 2 === 0) {
		return false;
	} return true;
}

function square(num) {
	return num * num;
}

function cube(num) {
	return Math.pow(num, 3);
}

function raiseToPower(num, exponent) {
	return Math.pow(num, exponent);
}

function roundNumber(num) {
	return Math.round(num);
}

function roundUp(num) {
	return Math.ceil(num);
}

function addExclamationPoint(str) {
	return str + '!';
}

function combineNames(firstName, lastName) {
	return firstName + ' ' + lastName;
}

function getGreeting(name) {
	return 'Hello' + ' ' + name + '!';
}

 
function getRectangleArea(length, width) {
	return length * width;
}

function getTriangleArea(base, height) {
	return (base * height) / 2;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};