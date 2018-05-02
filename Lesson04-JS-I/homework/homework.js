//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything

const newString = 'Drained';

//create a number variable, it an be any number

const newNum = '10' ;

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
  
  return str;
}

function add(x, y) {
  
  const sum = x + y;
  
  return sum;
}

function subtract(x, y) {
  
  const difference = x - y;
  
  return difference;
}

function multiply(x, y) {
  
  const product = x * y;
  
  return product;
}

function divide(x, y) {
  
  const divide = x / y;
  
  return divide
}

function areEqual(x, y) {
  
  if (x===y) {
  
  return true;
  }
  
  return false;
}

function areSameLength(str1, str2) {
  
  const str1Length = (str1);
  
  const str2Length = (str2);
  
  if (str1Length.length === str2Length.length) }
    
    return true;
    }
    
    return false;
}

function lessThanNinety(num) {
  
  if (num < 90) {
    return true;
  }
  
  return false;
}

function greaterThanFifty(num) {
  
  if (num > 50) {
    return true;
  }
  
  return false;
}

function getRemainder(x, y) {
  
  const newModulo = x % y;
  
  return newModulo;
}

function isEven(num) {
  
  if (num % 2 === 0) {
    return true;
  }
  
  return false;
}

function isOdd(num) {
  
  if (num % 2 !== 0) {
    return true;
  }
  
  return false;
}

function square(num) {
  
  const numSquared = math.pow(num,3);
  
  return numSquared;
}

function cube(num) {
  
  const numCubed = math.pow(num,3);
  
  return numCubed;
}

function raiseToPower(num, exponent) {
  
  const plusExp =math.pow(num, exponent);
  
  return plusExp;
}

function roundNumber(num) {
  
  const numRounded =math.round(num);
  
  return numRounded;
}

function roundUp(num) {
  
  const numRoundup = math.ceil(num);
  
  return numRoundup;
}

function addExclamationPoint(str) {
  
  const wordtostring =str;
  
  const withExcl = wordToString + '!';
}

function combineNames(firstName, lastName) {
  
  const nameOne = firstName;
  
  const nameTwo = lastName;
  
  const bothNames = nameOne + nameTwo;
  
  return bothNames;
}

function getGreeting(name) {
  
  const getName = name;
  
  const plusHello = 'Hello' + ' ' + getName + '!';
  
  return plusHello;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  
  const recLength = length;
  
  const recWidth = width;
  
  const recArea = recLength * recWidth;
  
  return recArea;
}

function getTriangleArea(base, height) {
  
  const triBase = base;
  
  const triHeight = height;
  
  const triArea = (triBase / 2) * triHeight;
  
  return triArea;
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
