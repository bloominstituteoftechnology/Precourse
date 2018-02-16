//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "London";
console.log(newString);

//create a number variable, it an be any number
const newNum = 8;
console.log(newNum);

//create a boolean variable
const newBool = true;
console.log(newBool);

//solve the following math problem
const newSubtract = 10 - 5 === 5;
console.log(newSubtract);

//Solve the following math problem
const newMultiply = 10 * 4 === 40;
console.log(newMultiply);

//Solve the following math problem:
const newModulo = 21 % 5 === 1;
console.log(newModulo);



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  //simply return the string provided: str
  return str;
}
console.log("hello")



function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  return x + y;
}
console.log(add(5, 6));



function subtract(x, y) {
  // subtract y from x and return the value
  return x - y;
}
console.log(subtract(57, 16));



function multiply(x, y) {
  // multiply x by y and return the value
  return x * y;
}
console.log(multiply(10, 4));



function divide(x, y) {
  // divide x by y and return the value
  return x / y;
}
console.log(divide(24, 6));



function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
console.log(areEqual(5,8));




function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}
console.log(areSameLength("hello", "world"));



function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}
console.log(lessThanNinety(91));



function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}
console.log(greaterThanFifty(51));



function getRemainder(x, y) {
  // return the remainder from dividing x by y
  return x % y;
}
console.log(getRemainder(32,11));


function isEven(num) {
  // return true if num is even
  // otherwise return false
  if (num % 2 === 0 ) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(9));


function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(18));



function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  return Math.pow(num,2);
}
console.log(square(5));
  


function cube(num) {
  // cube num and return the new value
  return num * num * num; 
}
console.log(cube(5));



function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  return Math.pow(num,exponent);
}
console.log(raiseToPower(4,3));




function roundNumber(num) {
  // round num and return it
  return Math.round(num);
}
console.log(roundNumber(4.5));



function roundUp(num) {
  // round num up and return it
  return Math.ceil(num);
}
console.log(roundUp(4.5));



function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  return str + "!";
}
console.log(addExclamationPoint("hello world"));



function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  return firstName + lastName;
}
console.log(combineNames("Lambda", " School"));




function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  return "Hello " + name + "!";
}
console.log(getGreeting("Sam"));




// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  return length * width;
}
console.log(getRectangleArea(5,10));  




function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  return base * height;
}
console.log(getTriangleArea(15,30));


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
