
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'string';

//create a number variable, it an be any number
let newNum = 4;

//create a boolean variable
let newBool = true;

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
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  var diff = x - y;
  return diff;
}

function multiply(x, y) {
  var prod = x * y;
  return prod;
}

function divide(x, y) {
  var quo = x / y;
  return quo;
}

function areEqual(x, y) {
  if (x === y) {
      return true;
  } else {
      return false;
  }
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
      return true;
  } else {
      return false;
  }
}

function lessThanNinety(num) {
  if (num < 90) {
      return true;
  } else {
      return false;
  }
}

function greaterThanFifty(num) {
  if (num > 50) {
      return true;
  } else {
      return false;
  }
}

function getRemainder(x, y) {
  var rem = x % y;
  return rem;
}

function isEven(num) {
  if (num % 2 === 0) {
      return true;
  } else {
      return false;
  }
}

function isOdd(num) {
  if (num % 2 === 0) {
      return false;
  } else {
      return true;
  }
}

function square(num) {
  var sq = Math.pow(num, 2);
  return sq;
}

function cube(num) {
  var cu = Math.pow(num, 3);
  return cu;
}

function raiseToPower(num, exponent) {
  var exp = Math.pow(num, exponent);
  return exp;
}

function roundNumber(num) {
  var rnd = Math.round(num);
  return rnd;
}

function roundUp(num) {
  var rndup = Math.ceil(num);
  return rndup;
}

function addExclamationPoint(str) {
   var excite = str + '!';
   return excite;
}

function combineNames(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    return fullName;
}

function getGreeting(name) {
    var hello = 'Hello ' + name +'!';
    return hello;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
    var areaRec = length * width;
    return areaRec;
}

function getTriangleArea(base, height) {
    var areaTri = (0.5 * (base * height));
    return areaTri;
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
