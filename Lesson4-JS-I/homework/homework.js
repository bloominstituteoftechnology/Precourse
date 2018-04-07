//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'myString';

//create a number variable, it an be any number
const newNum = 476;

//create a boolean variable
const newBool = true;

//solve the following math problem
const newSubtract = 10 - 5 == 5;

//Solve the following math problem
const newMultiply = 10 * 4 == 40;

//Solve the following math problem:
const newModulo = 21 % 5 == 1;



//In the next 22 problems you will complete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  //simply return the string provided: str
  return str;
}
returnString ('Peter Peter Pumpkin Eater'); //Prints Peter Peter Pumpkin Eater to the console

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  const add=(x+y);
  return add;
}
add(6,23); //prints 29 to the console


function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  const subtract=(x-y);
  return subtract;
}
subtract(8,2); //Prints 6 to the console

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  const multiply=(x*y);
  return multiply; 
}
multiply(4,8); //Prints 32 to the console

multiply(4,8); //Prints 32 to the console

function divide(x, y) {
  // divide x by y and return the value
  // code here
  const divide=(x/y);
  return divide;
}
divide(9,3); //prints 3 to the console

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x == y) {
    return true;
  }
  else {
    return false;
  }
  }
  areEqual(55,55);

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if (str1.length === str2.length) {
    return true;
  }
  else {
    return false;
  }
}
  areSameLength('birth','death');

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
  if (num <90) {
    return true;
  } 
  else {
    return false;
  }
}
lessThanNinety(65);

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (num >50) {
    return true;
  }
  else {
    return false;
  }

}
greaterThanFifty(67);

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
    const div = x%y;
    return div;
}
getRemainder(23,4);

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  const solutionModulo = num%2;
  if (solutionModulo == 0) {
    return true;
  }
  else {
    return false;
  }
}
isEven(4);

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
    const solutionModulo = num%2;
  if (solutionModulo !== 0) {
    return true;
  }
  else {
    return false;
  }
}
isOdd(3);

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  const squareSolution = (num*num);
  return (squareSolution);
}
square(4);


function cube(num) {
  // cube num and return the new value
  // code here
  const cubeSolution = (num*num*num);
  return (cubeSolution);
}
cube(3);


function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  const powerSolution = Math.pow(num, exponent);
  return powerSolution;
}
raiseToPower(4,2);


function roundNumber(num) {
  // round num and return it
  // code here
  const roundSolution = Math.round(num);
  return roundSolution;
}
roundNumber(4.333);

function roundUp(num) {
  // round num up and return it
  // code here
  const roundSolution = Math.ceil(num);
  return roundSolution;
}
roundUp(98.1);

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  const exclamationAdd = str+'!';
   return exclamationAdd;
}
addExclamationPoint('hello world');

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  const fullName = firstName + ' ' + lastName;
  return fullName;
}
combineNames('Peter','Bell');

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  const sayHello = 'Hello ' + name + '!';
  return sayHello;
}
getGreeting('Peter');

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  const rectArea = length*width;
  return rectArea;
}
getRectangleArea(9,3);

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  const triangleArea = .5*(base*height);
  return triangleArea;
}
getTriangleArea(2,3);

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
