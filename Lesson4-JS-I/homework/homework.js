//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'myNewString';

//create a number variable, it an be any number
const newNum = 12 ;

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
  const newStr = str;    //simply return the string provided: str
  return newStr;
}

function add(x, y) {
  const newAdd = x + y;         // x and y are numbers
  return newAdd ;               // add x and y together and return the value
                                // code here
}

function subtract(x, y) {
  const newSubtract = x - y;    // subtract y from x and return the value
  return newSubtract ;          // code here
}

function multiply(x, y) {
  const newMultiply = x * y ;   // multiply x by y and return the value
  return newMultiply ;          // code here
}

function divide(x, y) {
  const newDivide = x / y ;     // divide x by y and return the value
  return newDivide ;            // code here
}

function areEqual(x, y) {
  //const newBoo = x === y ;      // return true if x and y are the same
  if (x === y) {
    return true ;
  }                             // otherwise return false
  return false;                 // code here
}

function areSameLength(str1, str2) {
  if ((str1.length) === (str2.length)) {  // return true if the two strings have the same length
    return true;                        // otherwise return false
  }                                     // code here
  return false;
}

function lessThanNinety(num) {
  if (num < 90) {                // return true if the function argument: num , is less than ninety
    return true;                // otherwise return false
  }                              // code here
  return false;
}

function greaterThanFifty(num) {
  if (num > 50) {                 // return true if num is greater than fifty
    return true;                  // otherwise return false
  }                               // code here
  return false;
}

function getRemainder(x, y) {
  const newRemainder = (x % y);    // return the remainder from dividing x by y
  return newRemainder;            // code here
}

function isEven(num) {
  if ((num % 2) == 0) {               // return true if num is even
    return true;                  // otherwise return false
  }                               // code here
  return false;
}

function isOdd(num) {
  if ((num % 2) == 1) {
                             // return true if num is odd
    return true;                  // otherwise return false
  }                               // code here
  return false;
}

function square(num) {
  const newSquare = Math.pow(num,2);  // square num and return the new value
  return newSquare;                   // hint: NOT square root!
                                      // code here
}

function cube(num) {
  const newCube = Math.pow(num,3);    // cube num and return the new value
  return newCube;                     // code here
}

function raiseToPower(num, exponent) {
  const newRaiseToPower = Math.pow(num,exponent);   // raise num to whatever power is passed in as exponent
  return newRaiseToPower;                           // code here
}

function roundNumber(num) {
  const newRoundNumber = (Math.round(num));         // round num and return it
  return newRoundNumber;                            // code here
}

function roundUp(num) {
  const newRoundUp = (Math.ceil(num));                 // round num up and return it
  return newRoundUp;                                  // code here
}

function addExclamationPoint(str) {
  const newAddExclamationPoint = (str + '!');   // add an exclamation point to the end of str and return the new string
  return newAddExclamationPoint;                // 'hello world' -> 'hello world!'
                                                // code here
}

function combineNames(firstName, lastName) {
  const newCombineNames = (firstName + ' ' + lastName); // return firstName and lastName combined as one string and separated by a space.
  return newCombineNames;                               // 'Lambda', 'School' -> 'Lambda School'
                                                        // code here
}

function getGreeting(name) {
  const newGetGreetings = ('Hello ' + name + '!');      // Take the name string and concatenate other strings onto it so it takes the following form:
  return newGetGreetings;                               // 'Sam' -> 'Hello Sam!'
                                                        // code here
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  const newArea = (length * width);           // return the area of the rectangle by using length and width
  return newArea;                             // code here
}

function getTriangleArea(base, height) {
  const newTriangleArea = ((base * height) / 2);  // return the area of the triangle by using base and height
  return newTriangleArea;                         // code here
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
