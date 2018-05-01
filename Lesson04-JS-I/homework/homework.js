//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "myString" ;

//create a number variable, it an be any number
const newNum = 2 ;

//create a boolean variable
const newBool = true ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40;

//Solve the following math problem:
const newModulo = 21 % 5 === 4;



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
  const sum = x + y;
  return sum;
}

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  const dif = x - y; 
  retun dif;
}

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  const product = x * y;
  return product;
 
}

function divide(x, y) {
  // divide x by y and return the value
  // code here
  const product = x / y;
  return product;
  
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if ( x == y ) {
    return true;
  }
  else {
    return false;
  }
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if ( str1.length == str2.length ) {
    return true;
  }
  else {
    return false;
  }
}

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
  if ( num < 90 ) {
    return true;
  }
  else {
    return false;
  }
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if ( num > 50 ) {
    return true;
  }
  else { 
    return false; 
  }
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
  if (num%2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  if (num%2 == 0) {
    return false;
  }
  else {
    return true;
  }
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  
  const result = Math.pow(num,2);
  return result;
}

function cube(num) {
  // cube num and return the new value
  // code here
  const result = Math.pow(num,3);
  return result;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  const result = Math.pow(num,exponent);
  return result;
}

function roundNumber(num) {
  // round num and return it
  // code here
  const result = Math.round(num);
  return result;
}

function roundUp(num) {
  // round num up and return it
  // code here
   const result = Math.ceil(num);
  return result;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  const newString = str = "!";
  return newString;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  const name = firstName + " " + lastName;
  return name;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  const greet = "Hello" + " " + name + "!";
  return greet;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  const area = length * width;
  return area;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  const area = (base / 2) * height;
  return area;
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
