
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'Claudio' ;

//create a number variable, it an be any number
let newNum = 4 ;

//create a boolean variable
let newBool = 3>4 ;

//solve the following math problem
let newSubtract = 10 - 5 === 5;

//Solve the following math problem
let newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
let newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  return str;
}

returnString('Hi'); // Hi

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  let add = x + y;
  return add;
}

add(5+5); // 10

function subtract(x, y) {
  // subtract y from x and return the value
  let sub = x - y;
  return sub;
}

subtract(10-5); // 5

function multiply(x, y) {
  // multiply x by y and return the value
  let mult = x * y;
  return mult;
}

multiply(10,10); // 100

function divide(x, y) {
  // divide x by y and return the value  
  let div = x / y;
  return div;
}

divide(100,10); // 10

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if (x === y) {
    return true;
  }
  return false;
}

areEqual(100,100) // true

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}

areSameLength('Bob','Dan'); // true

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  if (num < 90) {
    return true;
  }
  return false;
}

lessThanNinety(45); // true

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if (num > 50) {
    return true;
  }
  return false;
}

greaterThanFifty(100); // true

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  let rem = x % y;
  return rem;
}

getRemainder(13,4); // 1

function isEven(num) {
  // return true if num is even
  // otherwise return false
  if(num % 2 === 0) {
    return true;
  }
  return false;
}

isEven(10); // true

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  if(num % 2 != 0) {
    return true;
  }
  return false;
}

isOdd(13); // true

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  let square = Math.pow(num,2);
  return square;
}

square(10); // 100

function cube(num) {
  // cube num and return the new value
  let cube = Math.pow(num,3);
  return cube;
}

cube(3); // 27

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  let raise = Math.pow(num,exponent);
  return raise;
}

raiseToPower(2,4); // 16

function roundNumber(num) {
  // round num and return it
  let round = Math.round(num);
  return round;  
}

roundNumber(9.23); // 9

function roundUp(num) {
  // round num up and return it
  let round = Math.ceil(num);
  return round;
}

roundUp(9.675); // 10

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  let add = '!';
  return str + add;
}

addExclamationPoint('hello'); // hello!

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  let combine = firstName + ' ' + lastName;
  return combine;
}

combineNames('Claudio', 'Gonzalez'); // Claudio Gonzalez

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  let greet = 'Hello' + ' ' + name + '!';
  return greet;
}

getGreeting('Claud'); // Hello Claud!

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  let area = length * width;
  return area;
}

getRectangleArea(4,5); // 20

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  let area = height * base / 2;
  return area;
}

getTriangleArea(10,5); // 25

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
