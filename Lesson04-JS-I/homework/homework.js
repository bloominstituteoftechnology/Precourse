//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'This is a string variable' ;

//create a number variable, it an be any number
const newNum = 24 ;

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
  //simply return the string provided: str
  return str ;
}

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  const sum = x + y ;
  return sum ;
}

function subtract(x, y) {
  // subtract y from x and return the value
  const difference = x - y ;
  return difference ;
}

function multiply(x, y) {
  // multiply x by y and return the value
  const product = x * y ;
  return product ;
}

function divide(x, y) {
  // divide x by y and return the value
  const quotient = x / y ;
  return quotient ;
  }

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  const equality = x === y ;
  return equality ;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
 const equalLength = str1.length === str2.length ;
 return equalLength ;
}

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  const lessThan = num < 90 ;
  return lessThan ;
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  const greaterThan = num > 50 ;
  return greaterThan ;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  const modulo = x % y ;
  return modulo ;
  }

function isEven(num) {
  // return true if num is even
  // otherwise return false
   const even = num % 2 === 0 ;
   return even ;
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  const odd = num % 2 !== 0 ;
  return odd ;
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  const toTheSecond = Math.pow(num, 2) ;
  return toTheSecond ;
}

function cube(num) {
  // cube num and return the new value
 const toTheThird = Math.pow(num, 3) ;
 return toTheThird ;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  const numToThe = Math.pow(num, exponent) ;
  return numToThe ;
}

function roundNumber(num) {
  // round num and return it
  const rounded = Math.round(num) ;
  return rounded ;
} 

function roundUp(num) {
  // round num up and return it
  const numberRoundUp = Math.ceil(num) ;
  return numberRoundUp ;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  const newStr = str + '!' ;
  return newStr ;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  const fullname = firstName + ' ' + lastName ;
  return fullname ;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  const helloName = 'Hello' + ' ' + name + '!' ;
  return helloName ;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
 const RectArea = length * width ;
 return RectArea ;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  const TriArea = .5 * base * height ;
  return TriArea ;
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
