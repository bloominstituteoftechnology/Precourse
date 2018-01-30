
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'Hello World!';

//create a number variable, it an be any number
let newNum = 47;

//create a boolean variable
let newBool = true;

//solve the following math problem
let newSubtract = 10 - 5 === 5;

//Solve the following math problem
let newMultiply = 10 * 4 === 40;

//Solve the following math problem:
let newModulo = 21 % 5 === 1;



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
  const numba = x + y;
  return numba;
  // you can also just do return x + y;
}

function subtract(x, y) {
  // subtract y from x and return the value
  return x - y;
  // when the numbers are passed in x & y, it will return the result of subtracting the values
}

function multiply(x, y) {
  // multiply x by y and return the value
  const numbaa = x * y;
  return numbaa;
  // you can also just do return x * y;
}

function divide(x, y) {
  // divide x by y and return the value
  const numbaa = x / y;
  return numbaa;
  // you can also just do return x / y;
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if (x === y) {
    return true;
  } else {
    return false;
  }
  // you can also just do return x === y;
  // **since these logical operators will either give you true or false, you do not need to write an if statement, it's still correct but it is probably better if you don't write a full if statement if you can just do something more simple like return x === y;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  return str1.length === str2.length;
}

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  return num < 90;
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  return num > 50;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  const remain = x % y;
  return remain;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  return num % 2 === 0;
  // if you divide a number by 2, and it does not have a remainder, then it is an even number, if you divide a number by 2 and it has a remainder of 1, then it is a odd number.. again you get remainders with modulo operator %
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  return num % 2 === 1;
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  return num * num;
  // you can also do return Math.pow(num, 2);
}

function cube(num) {
  // cube num and return the new value
  return num * num * num;
  // you can also do return Math.pow(num, 3);
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  return Math.pow(num, exponent);
  // this way you can add any number AND exponent to get the power, eg raiseToPower(6, 4);
}

function roundNumber(num) {
  // round num and return it
  return Math.round(num);
}

function roundUp(num) {
  // round num up and return it
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  return str + '!';
  // you can create any string, and this will add a ! to the end of it
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  return firstName + ' ' + lastName;
  // same with this, you can add any strings together with +, you need to add spaces as well
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  return 'Hello' + ' ' + name + '!';
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  return length * width;
  // simple math formula where you can pass any arguments
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  return base * height / 2;
  // simple math formula where you can pass any arguments
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
