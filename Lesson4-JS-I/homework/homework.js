//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'factory' ;

//create a number variable, it an be any number
const newNum = 42 ;

//create a boolean variable
const newBool = correct ;

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
   let str = 'mirror';
   return str;
}

function add(x, y) {
  const sum = x + y;
  return sum;
}

function subtract(x, y) {
  const difference = y - x;
  return difference;
}

function multiply(x, y) {
  const multiply = x*y;
  return multiply;
}

function divide(x, y) {
  const quotient = x/y;
  return quotient;
}

function areEqual(x, y) {
  if (x === y) {
    return true;
    }
    return false;
  }


function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
    return false;
}

function lessThanNinety(num) {
  if (num < 90){
    return true;
  }
    return false;
}

function greaterThanFifty(num) {
  if (num > 50){
    return true;
  }
    return false;
}

function getRemainder(x, y) {
  remainder = x%y;
  return remainder;
}

function isEven(num) {
  if (num%2 === 0){
    return true;
  }
    return false;
}

function isOdd(num) {
  if (num%2 === 0){
    return false;
  }
    return true;
}

function square(num) {
  square = Math.pow(num,2);
  return square;
}

function cube(num) {
  cube = Math.pow(num,3);
  return square;
}

function raiseToPower(num, exponent) {
  power = Math.pow (num, exponent);
  return power;
}

function roundNumber(num) {
  rounded = Math.round(num);
  return rounded;
}

function roundUp(num) {
  roundedUp = Math.ceil(num);
  return roundedup;
}

function addExclamationPoint(str) {
  excitement = str + '!';
  return excitement;
}

function combineNames(firstName, lastName) {
  fullName = firstname + ' ' + lastName;
  return fullName
}

function getGreeting(name) {
  greeting = 'Hello ' + name;
  return greeting;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  area = length*width;
  return area;
}

function getTriangleArea(base, height) {
  triangleArea = (1/2)*base*height;
  return triangleArea;

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
