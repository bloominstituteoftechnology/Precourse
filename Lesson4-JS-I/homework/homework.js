//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'bloodhound';

//create a number variable, it an be any number
const newNum = 45;

//create a boolean variable
const newBool = 'lovesBloodhounds' === true;

//solve the following math problem
const newSubtract = 10 - 5 == 5;

//Solve the following math problem
const newMultiply = 10 * 4 == 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 == 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces.
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work.
//Do not change any of the function names


function returnString(str){ 
 return(str);
} //simply return the string provided: str



function add(x, y) { 
    // x and y are numbers
    // add x and y together and return the value
  return (x + y);// code here
}

function subtract(x, y) {

  return (x-y);
  // subtract y from x and return the value
  // code here
}





function multiply(x, y) {
  return (x * y);
  // multiply x by y and return the value
  // code here
}


function divide(x, y){
   return (x / y);
  // divide x by y and return the value
  // code here
}



function areEqual(x, y){
  if (x === y)
    return true;{
  // return true if x and y are the same
  // otherwise return false
    }  
   return false;
  } // code here


function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false

  if (str1.length === str2.length)
    return true;{
    }
    return false; // code here
  }


function lessThanNinety(num) { if (num < 90 )
  return true;

  return false;
}
  // return true if the function argument: num , is less than ninety
  // otherwise return false


  function greaterThanFifty(num) {
    // return true if num is greater than fifty
    // otherwise return false
   if (num > 50){ 
    return true;
  }
  return false;
   // code here

  }

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  const remainder = x % y;
    return remainder;// code here
}

function isEven(num) {
  if (num % 2 === 0) 
  return true;
  // return true if num is even
  // otherwise return false
  return false; // code here
  
}

function isOdd(num) {
// return true if num is odd
// otherwise return false
 if (num % 2 !== 0) 
 return true; // code here

  
  return false;
}

let squareNum = (Math.pow(num));
function square(num) { 

return squareNum;

  // square num and return the new value
  // hint: NOT square root!

}


let numCube = num.pow * num;
function cube(num) { 
  return numCube;
  // cube num and return the new value
  // code here
}
let exponent = Math.pow(num,expo)
function raiseToPower(num, exponent) { 
  return exponent;

  // raise num to whatever power is passed in as exponent
  // code here
}

let numRound = Math.round(num);
function roundNumber(num) {
  // round num and return it
  return numRound ;// code here
}

function roundUp(num) { 
  return (Math.ceil(num));
  // round num up and return it
  // code here
}

function addExclamationPoint(str) { 
return(str + '!');  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
}

function combineNames(firstName, lastName) { 
return (firstName + lastName);  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
}

function getGreeting(name) { let greet = ('Hello' +  name);
return greet;
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
}

// The next three questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.

function getRectangleArea(length, width) { let area = (length * width);
  return area;
  // return the area of the rectangle by using length and width
  // code here
}

function getTriangleArea(base, height) { let area = (base * height);
  return area;
  // return the area of the triangle by using base and height
  // code here
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
}
