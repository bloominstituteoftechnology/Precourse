//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'Hi My Name Is James';

//create a number variable, it an be any number
const newNum = 1 ;

//create a boolean variable
const newBool = true ;

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
  return(str);
}

function add(x, y) {
return(x+y);
}

function subtract(x, y) {
return(x-y);
}

function multiply(x, y) {
  return(x*y);
}

function divide(x, y) {
 return(x/y);
}

function areEqual(x, y) {
 return(x===y);
}

function areSameLength(str1, str2) {
  return(str1.length===str2.length);
}

function lessThanNinety(num) {
  return(num<90);
}

function greaterThanFifty(num) {
  return(num>50);
}

function getRemainder(x, y) {
 return(x%y);
}

function isEven(num) {
  return(num%2===0);
  // return true if num is even
  // otherwise return false
  // code here
}

function isOdd(num) {
  return(num%2==!0);
}

function square(num) {
  return(Math.pow(num, 2));
  // square num and return the new value
  // hint: NOT square root!
  // code here
}

function cube(num) {
  return(Math.pow(num, 3));
  // cube num and return the new value
  // code here
}

function raiseToPower(num, exponent) {
  return(Math.pow(num, exponent));
  // raise num to whatever power is passed in as exponent
  // code here
}

function roundNumber(num) {
  return(Math.round(num));
  // round num and return it
  // code here
}

function roundUp(num) {
  return(Math.ceil(num));
  // round num up and return it
  // code here
}

function addExclamationPoint(str) {
  return(str + '!');
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
}

function combineNames(firstName, lastName) {
  return(firstName + ' ' + lastName);
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
}

function getGreeting(name) {
  return('Hello ' + name + '!');
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  return(length*width);

  // return the area of the rectangle by using length and width
  // code here
}

function getTriangleArea(base, height) {
  return(base*height/2);
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
