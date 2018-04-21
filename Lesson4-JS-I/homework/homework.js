//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'string' ;

//create a number variable, it an be any number
const newNum =  9;

//create a boolean variable
const newBool = true;

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
  //simply return the string provided: str
  console.log (str)
  return str
}


function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  const sum = x + y;
  return sum;
}
add (5, 6)

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  const subtract = x - y;
  return subtract;
}
subtract (7, 4)

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  const multiply = x * y;
  return multiply;
}
multiply (3, 4)

function divide(x, y) {
  // divide x by y and return the value
  // code here
  const divide = x / y;
  return divide;
}
divide (15, 5)

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x == y) {
    return true
  }
  return false
}
areEqual (7, 7)

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if (str1.length == str2.length) {
    return true
  }
  return false
}

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
if (num < 90) {
  return true
}
return false
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (num > 50) {
    return true
  }
  return false
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  const remainder = x % y;
  return remainder;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if (num % 2 == 0) {
    return true
  }
  return false
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  if (num % 2 != 0) {
    return true
  }
  return false
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  return Math.pow(num, 2)
}

function cube(num) {
  // cube num and return the new value
  // code here
  return Math.pow(num, 3)
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  return Math.pow(num, exponent)
}

function roundNumber(num) {
  // round num and return it
  // code here
  return Math.round(num)
}

function roundUp(num) {
  // round num up and return it
  // code here
  return Math.ceil(num)
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  console.log(str + '!')
  return (str + '!')
}
addExclamationPoint ('hello world')

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  console.log(firstName + ' ' + lastName)
  return (firstName + ' ' + lastName)
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  console.log('Hello ' + name + '!')
  return ('Hello ' + name + '!')
}
getGreeting ('Sam')

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  const getRectangleArea = length * width;
  return getRectangleArea;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  const getTriangleArea= base * height / 2;
  return getTriangleArea;
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
