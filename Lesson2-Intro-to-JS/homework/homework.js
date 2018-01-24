
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'This is a string' ;

//create a number variable, it an be any number
let newNum = 4 ;

//create a boolean variable
let newBool = true ;

//solve the following math problem
let newSubtract = 10 - 5 === 5;

//Solve the following math problem
let newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
let newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
	return str;
}

function add(x, y) {
  const z = x + y;
  return z;
}

function subtract(x, y) {
  const z = x - y;
  return z;
}

function multiply(x, y) {
  const z = x*y;
  return z;
}

function divide(x, y) {
  const z = x/y;
  return z;
}

function areEqual(x, y) {
  if (x == y) {return true;}
  else {return false;}
}

function areSameLength(str1, str2) {
  const str1Length = str1.length;
  const str2Length = str2.length;
  if (str1Length == str2Length) {return true;}
  else {return false;}
}

function lessThanNinety(num) {
    if (num < 90) {return true;}
    else {return false;}
}

function greaterThanFifty(num) {
    if (num > 50) {return true;}
    else {return false;}
}

function getRemainder(x, y) {
    const z = x % y;
    return z;
}

function isEven(num) {
	const y = num%2;
	if (y==0) {return true;}
	else {return false;}
}

function isOdd(num) {
	const y = num%2;
	if (y==0) {return false;}
	else {return true;}
}

function square(num) {
	const y = Math.pow(num,2);
	return y;
}

function cube(num) {
	const y = Math.pow(num,3);
	return y;
}

function raiseToPower(num, exponent) {
	const y = Math.pow(num,exponent);
	return y;
}

function roundNumber(num) {
	const y = Math.round(num);
	return y;
}

function roundUp(num) {
	const y = Math.ceil(num);
	return y;
}

function addExclamationPoint(str) {
	const newStr = str + '!';
	return newStr;
}

function combineNames(firstName, lastName) {
	const combined = (firstName + ' ' + lastName);
	return combined;
}

function getGreeting(name) {
	const greeting = 'Hello ' + name + '!';
	return greeting;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
	const area = length*width;
	return area;
}

function getTriangleArea(base, height) {
	const area = .5*(base*height);
	return area;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString: newString,
  newNum: newNum,
  newBool: newBool,
  newSubtract: newSubtract,
  newMultiply: newMultiply,
  newModulo: newModulo,
  returnString: returnString,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea
};
