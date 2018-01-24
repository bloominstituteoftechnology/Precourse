
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'Dee' ;

//create a number variable, it an be any number
let newNum = 1 ;

//create a boolean variable
let newBool = true ;

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

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x-y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function areEqual(x, y) {
  if (x === y){
    return true;
  }
  else{
    return false;
  }
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
      return true;
    }
    else {
      return false;
    }
  }
 


function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  if (num < 90) {
    return true;
  }
  else {
    return false;
  }
  
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  if (num > 50) {
    return true;
  }
  else {
    return false;
  }
  // otherwise return false
  // code here
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  var a = x % y;
  return a;
}

function isEven(num) {
  // return true if num is even
  if (num % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
  // otherwise return false
  // code here
}

function isOdd(num) {
  // return true if num is false
  if (num % 2 != 0) {
    return true;
  }
  else {
    return false;
  }
  // otherwise return false
  // code here
}

function square(num) {
  // square num and return the new value
  const sq = num * num;
  // hint: NOT square root!
  // code here
  return sq;
}

function cube(num) {
  // cube num and return the new value
  const cube = num * num * num;
  return cube;
  // code here
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  const newNumber = Math.pow(num,exponent);
  return newNumber;
  // code here
}

function roundNumber(num) {
  // round num and return it
  const newNumber = Math.round(num);
  return newNumber;
  // code here
}

function roundUp(num) {
  // round num up and return it
  const newNumber = Math.ceil(num);
  return newNumber;
  // code here
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  const word = str + '!';
  return word;
  // 'hello world' -> 'hello world!'
  // code here
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  
  return firstName + ' ' + lastName;
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  return 'Hello' + ' ' + name + '!';
  // 'Sam' -> 'Hello Sam!'
  // code here
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  const a = length * width;
  return a;
  // code here
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
   const a = (height * base)/ 2;
   return a;
  // code here
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
