//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "cats" ;

//create a number variable, it an be any number
const newNum = "2" ;

//create a boolean variable
const newBool = -0 ;
    Boolean(newBool);

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

function add(x, y) {
    const sum = x+y;
    return sum;
  // x and y are numbers
  // add x and y together and return the value
  // code here
}

function subtract(x, y) {
    const difference = x - y;
    return difference;
  // subtract y from x and return the value
  // code here
}

function multiply(x, y) {
    const product = x * y;
    return product;
    
  // multiply x by y and return the value
  // code here
}

function divide(x, y) {
    math.divide(x,y);
  // divide x by y and return the value
  // code here
}

function areEqual(x, y) {
    if (x==y){
        return true;
    }
    return false;
  // return true if x and y are the same
  // otherwise return false
  // code here
}

function areSameLength(str1, str2) {
    if (str1.length == str2.length){
        return true;
    }
  // return true if the two strings have the same length
  // otherwise return false
  // code here
    return false;
}

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
    if (num < 90){
        return true;
    }
    return false;
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
    if (num > 50){
        return true;
    }
    return false;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
    const remainder = x % y;
    return remainder;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
    if (num.isEven){
        return true;
    }
    return false;
}

function isOdd(num) {
    // return true if num is odd
    // otherwise return false
    // code here
    if (num.isOdd){
        return true;
    }
        return flase;
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
    return math.pow(num,2);
    
}

function cube(num) {
  // cube num and return the new value
  // code here
    return math.pow(num,3);
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
    return math.pow(num, exponent);
}

function roundNumber(num) {
  // round num and return it
  // code here
    return math.round(num);
}

function roundUp(num) {
  // round num up and return it
  // code here
    math.ceil(num);
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
    return str + "!"
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
    return firstname + " " + lastName
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
    name = "Sam";
    return "Hello " + name + " !"
    
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
    getRectangleArea(length*width);
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
    getRectangleArea(base*height)
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
  combineNames`,`
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
