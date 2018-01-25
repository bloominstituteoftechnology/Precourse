
//In these first 6 questions, replace 'null' with the answer

let newString = 'This is a String' ;
let newNum = 42 ;
let newBool = false ;
let newSubtract = 10 - 5 === 5;

//Solve the following math problem
let newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
let newModulo = 21 % 5 === 1 ;


//In the next 22 problems you will compete the function.

function returnString(str) {
  return str;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function areEqual(x, y) {
  return x === y;
}

function areSameLength(str1, str2) {
  return str1.length === str2.length;
}

function lessThanNinety(num) {
  return num < 90;
}

function greaterThanFifty(num) {
  return num > 50;
}

// Utility function: return the remainder from dividing x by y
function getRemainder(x, y) {
  return x % y;
}

// Utility function: return true if num is even
function isEven(num) {
  return 0 === (num % 2);
}

// Utility function: return true if num is odd
function isOdd(num) {
  return 1 === (num % 2);
}

function square(num) {
  return Math.pow(num, 2);
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

// Utility function: adds an exclamation point to the end of str then returns it
function addExclamationPoint(str) {
  return str + '!';
}

// Utility function: returns concatenated the string 'firstName lastName'
function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
}

// Utility function: Concatenate a String with Take the name string and concatenate other strings onto it so it takes the following form:
// 'Sam' -> 'Hello Sam!'
function getGreeting(name) {
  return 'Hello ' + addExclamationPoint(name);
}


// The next three questions will have you implement math area formulas. 
 
// Utility function: returns the area of the rectangle by using length and width
function getRectangleArea(length, width) {
  return length * width;
}

// Utility function: returns the area of the triangle by using base and height
function getTriangleArea(base, height) {
  return (base * height) / 2;
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
