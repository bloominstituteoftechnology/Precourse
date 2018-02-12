
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = "goobobobobobo wow!!!" ;
console.log(newString);


//create a number variable, it an be any number
let newNum = 4 ;
console.log(newNum)

//create a boolean variable
let newBool = true ;
console.log(newBool)

//solve the following math problem
let newSubtract = 10 - 5 === 5;
console.log(newSubtract)

//Solve the following math problem
let newMultiply = 10 * 4 === 40 ;
console.log(newMultiply)

//Solve the following math problem:
let newModulo = 21 % 5 === 1 ;
console.log(newModulo)



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  //simply return the string provided: str
    return(str);
}
console.log(returnString("Smababo"));

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
    return(x + y);
}
console.log(add(3, 4));

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
    return(x - y);
}
console.log(subtract(4,3));

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
    return(x * y);
}
console.log(multiply(3,4));

function divide(x, y) {
  // divide x by y and return the value
  // code here
    return(x / y);
}
console.log(divide(16,4));

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
    return(x == y);
}
console.log(areEqual(4, 4.0));

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
    return(str1.length == str2.length);
}
console.log(areSameLength("bob", "bob"));

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
    return(num < 90);
}
console.log(lessThanNinety(89));

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
    return(num > 50);
}
console.log(greaterThanFifty(51));

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
    return(x % y);
}
console.log(getRemainder(4,3));

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
    return(num % 2 == 0)
}
console.log(isEven(4));

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
    return(num % 2 != 0);
}
console.log(isOdd(4));

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
    return(Math.pow(num,2));
}
console.log(square(9));

function cube(num) {
  // cube num and return the new value
  // code here
    return(Math.pow(num,3));
}
console.log(cube(3));

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
    return(Math.pow(num, exponent));
}
console.log(raiseToPower(2,3));

function roundNumber(num) {
  // round num and return it
  // code here
    return(Math.floor(num));
}
console.log(roundNumber(3.6));

function roundUp(num) {
  // round num up and return it
  // code here
    return(Math.ceil(num));
}
console.log(roundUp(3.6));

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
    return(str + "!");
}
console.log(addExclamationPoint("Whaddup"));

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
    return(firstName + " " + lastName);
}
console.log(combineNames("Carl", "Cregor"));

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
    return("Hello " + name + "!");
}
console.log(getGreeting("Carl"));

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
    return(length * width);
}
console.log(getRectangleArea(3,4));

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
    return((base * height) / 2);
}
console.log(getTriangleArea(3,4));

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
