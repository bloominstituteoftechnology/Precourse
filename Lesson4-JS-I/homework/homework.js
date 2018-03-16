//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'String' ;

//create a number variable, it an be any number
const newNum = 42 ;

//create a boolean variable
const newBool = false ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  //simply return the string provided: str
  return str;
}

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  const sum = x + y;
  return sum;
}

add(10,2);

function subtract(x, y) {
  // subtract y from x and return the value
  const difference = x - y;
  return difference;
}

subtract (10, 2);

function multiply(x, y) {
  // multiply x by y and return the value
  const product = x*y;
  return product;
}

multiply (22,17);

function divide(x, y) {
  // divide x by y and return the value
  const quotient = x/y;
  return quotient;
}

divide (100, 20);

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  const equal = x === y;
  return equal;
}

areEqual (12,12);

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  const length = str1.length === str2.length;
  return length;
}

areSameLength ('Celeste', 'Brandon');

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
const ninety = num < 90;
return ninety;
}

lessThanNinety (89);

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  const fifty = num > 50;
  return fifty;
}

greaterThanFifty (90);

function getRemainder(x, y) {
  // return the remainder from dividing x by y
 const remainder = x % y;
 return remainder;
}

getRemainder (20, 9);

function isEven(num) {
  // return true if num is even
  // otherwise return false
  if (num % 2 === 0){
    return true;
  } else {
    return false;
  }
}

isEven(14);

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
if (num % 2 === 0) {
  return false;
} else {
  return true;
}
}

isOdd (17);

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  return Math.pow(num, 2);
}

square(2);

function cube(num) {
  // cube num and return the new value
  return Math.pow(num, 3);
}

cube (3);

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  return Math.pow(num, exponent);
}

raiseToPower (10, 3);

function roundNumber(num) {
  // round num and return it
  return Math.round(num);
}

roundNumber (6.78);

function roundUp(num) {
  // round num up and return it
  return Math.ceil(num);
}

roundUp(3.01);

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  const exclamation = str + '!';
  return exclamation;
}

addExclamationPoint ('My name is Celeste');

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
 return firstName + ' ' + lastName;
}

combineNames ('Celeste', 'Saxton');

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
 return 'Hello ' + name + '!';
}

getGreeting ('Celeste');

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  return length * width;
}

getRectangleArea (10, 12);

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  return base * height / 2;
}

getTriangleArea (12, 2);


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
