//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'myNewString';

//create a number variable, it an be any number
const newNum = 12;

//create a boolean variable
const newBool = true;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40;

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
// code here
  return x + y;
}

function subtract(x, y) {
// subtract y from x and return the value
// code here
  return x - y;
}

function multiply(x, y) {
// multiply x by y and return the value
// code here
  return x * y;
}

function divide(x, y) {
                                // divide x by y and return the value
  return (x / y);            // code here
}

function areEqual(x, y) {
  if (x === y) {
    return true ;e
  }                             // otherwise return false
  return false;                 // code here
}

function areSameLength(str1, str2) {
  if ((str1.length) === (str2.length)) {  // return true if the two strings have the same length
    return true;                        // otherwise return false
  }                                     // code here
  return false;
}

function lessThanNinety(num) {
  if (num < 90) {                // return true if the function argument: num , is less than ninety
    return true;                // otherwise return false
  }                              // code here
  return false;
}

function greaterThanFifty(num) {
  if (num > 50) {                 // return true if num is greater than fifty
    return true;                  // otherwise return false
  }                               // code here
  return false;
}

function getRemainder(x, y) {
                               // return the remainder from dividing x by y
  return (x % y);            // code here
}

function isEven(num) {
  if ((num % 2) == 0) {               // return true if num is even
    return true;                  // otherwise return false
  }                               // code here
  return false;
}

function isOdd(num) {
  if ((num % 2) == 1) {
                             // return true if num is odd
    return true;                  // otherwise return false
  }                               // code here
  return false;
}

function square(num) {
  return (Math.pow(num,2));                   // hint: NOT square root!
}

function cube(num) {
  return (Math.pow(num,3));                     // code here
}

function raiseToPower(num, exponent) {
  return (Math.pow(num,exponent));                           // code here
}

function roundNumber(num) {
   return (Math.round(num));                            // code here
}

function roundUp(num) {
  return (Math.ceil(num));                                  // code here
}

function addExclamationPoint(str) {
  return (str + '!');                // 'hello world' -> 'hello world!'
                                                // code here
}

function combineNames(firstName, lastName) {
  return (firstName + ' ' + lastName);                               // 'Lambda', 'School' -> 'Lambda School'
                                                        // code here
}

function getGreeting(name) {
  return ('Hello ' + name + '!');                               // 'Sam' -> 'Hello Sam!'
                                                        // code here
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  return (length * width);                             // code here
}

function getTriangleArea(base, height) {
  return ((base * height) / 2);                         // code here
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
