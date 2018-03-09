//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'My Name is Kate' ;

//create a number variable, it an be any number
const newNum = 9 ;

//create a boolean variable
const newBool = false ;

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
  return str;
}
  //simply return the string provided: str


function add(x, y) {
  const solution = x + y;
  return solution;
}
add(2, 3);
  //, x and y are numbers
  // add x and y together and return the value
  // code here

function subtract(x, y) {
  const solution = x - y;
  return solution;
}
subtract(10, 5);
  // subtract y from x and return the value
  // code here


function multiply(x, y) {
  const solution = x * y;
  return solution;
}
multiply(3, 4);
  // multiply x by y and return the value
  // code here


function divide(x, y) {
  const solution = x / y;
  return solution;
}
divide(10, 2);
  // divide x by y and return the value
  // code here


function areEqual(x, y) {
  const solution = x === y;
  return solution;
}
areEqual(3, 3);
  // return true if x and y are the same
  // otherwise return false
  // code here


function areSameLength(str1, str2) {
  const areSameLength = str1.length === str2.length;
  return areSameLength;
}
areSameLength('tree', 'song');
  // return true if the two strings have the same length
  // otherwise return false
  // code here


function lessThanNinety(num) {
  const lessThanNinety = num < 90;
  return lessThanNinety;
}
lessThanNinety(88);
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here


function greaterThanFifty(num) {
  const greaterThanFifty = num > 50;
  return greaterThanFifty;
}
greaterThanFifty(68);
  // return true if num is greater than fifty
  // otherwise return false
  // code here


function getRemainder(x, y) {
  const getRemainder = x % y;
  return getRemainder;
}
getRemainder(12, 5);
  // return the remainder from dividing x by y
  // code here


function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
isEven(7); 

  // return true if num is even
  // otherwise return false
  // code here


function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  }
  return true;
}
isOdd(8);
  // return true if num is odd
  // otherwise return false
  // code here


function square(num) {
  const square = num * num;
  return square;
}
square(4);
  // square num and return the new value
  // hint: NOT square root!
  // code here


function cube(num) {
  const cube = num * num * num;
  return cube;
}
cube(3);
  // cube num and return the new value
  // code here


function raiseToPower(num, exponent) {
  const raiseToPower = Math.pow(num, exponent);
  return raiseToPower;
}
raiseToPower(2, 5);
  // raise num to whatever power is passed in as exponent
  // code here


function roundNumber(num) {
  const roundNumber = Math.round(num);
  return roundNumber;
}
roundNumber(8.7);
  // round num and return it
  // code here


function roundUp(num) {
  const roundUp = Math.ceil(num);
  return roundUp;
}
roundUp(6.1);
  // round num up and return it
  // code here


function addExclamationPoint(str) {
  const addExclamationPoint = str + '!';
  return addExclamationPoint;
}
addExclamationPoint('hello world');
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here


function combineNames(firstName, lastName) {
  const combineNames = (firstName) + ' ' + (lastName);
  return combineNames;
}
combineNames('Lambda', 'School');
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here


function getGreeting(name) {
    const getGreeting = 'Hello ' + (name) + '!';
  return getGreeting;
}
getGreeting('Sam');
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here


// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  const solution = length * width;
  return solution;
}
getRectangleArea(3, 4);
  // return the area of the rectangle by using length and width
  // code here

function getTriangleArea(base, height) {
  const solution = (base * height) / 2;
  return solution;
}
getTriangleArea(3,6);
  // return the area of the triangle by using base and height
  // code here


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
