//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "this is a new string" ;

//create a number variable, it an be any number
const newNum = 10 ;

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

  //simply return the string provided: str
}
returnString();

function add(x, y) {
  
  let sum = (x,y)
  return sum;

  // x and y are numbers
  // add x and y together and return the value
  // code here
}
add();

function subtract(x, y) {

  let nimus = (x,y)
  return nimus;

  // subtract y from x and return the value
  // code here
}
subtract();

function multiply(x, y) {

  let times= (x,y)
  return times;
  // multiply x by y and return the value
  // code here
}
multiply();

function divide(x, y) {

  let sum = (x,y)
  return sum;
  // divide x by y and return the value
  // code here
}
divide();
function areEqual(x, y) {

  if (x===y){
    return true;
  }
   return false;
  // return true if x and y are the same
  // otherwise return false
  // code here
}
areEqual();

function areSameLength(str1, str2) {
let string1 = "str1"
let string2 = "str2"
  if (string1.length === string2.length) {return true;}
  return false;
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  
}
areSameLength();

function lessThanNinety(num) {

  if (num < 90){return true;}
  return false;

  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
}
lessThanNinety();

function greaterThanFifty(num) {
  if (num > 50 ){return true;}
  return false;
  // return true if num is greater than fifty
  // otherwise return false
  // code here
}
greaterThanFifty();

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  let remain = x % y
  return remain;

}
getRemainder();

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
let number = num % 2
  if(num === number) {return true;}
  return false;
}
isEven();

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  let number = num % 2
  if ( num === number ){return false}
  return true;
}
isOdd();

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  let square = Math.pow(2,3);
  return square;

}
square();
function cube(num) {
  // cube num and return the new value
  // code here
  let root3 = Math.pow(7,3)
  return root3 ;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  let raise = Math.pow (num ,exponent)
  return raise ;
}

function roundNumber(num) {
  // round num and return it
  // code here
  let roundIt =Math.round(num)
  return roundit ;
}

function roundUp(num) {
  // round num up and return it
  // code here
  let roundIt = math.ceil (num)
  return roundit ;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here

  let addString = "hello world "!=="hello world!"
  return midstring;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  let combineName = (Lambda,School)
  return combineNames;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  let  = Hello +(name)
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  let =rectangle (length*width)
  return rectangle;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here

  let triangle = (base* height)
  return triangle;
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
