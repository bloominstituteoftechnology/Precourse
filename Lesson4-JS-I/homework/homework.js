//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'Sam';

//create a number variable, it an be any number
const newNum = 60;

//create a boolean variable
const newBool = true;

//solve the following math problem
const newSubtract = 10 - 2 === 8;

//Solve the following math problem
const newMultiply = 10 * 4 === 40;

//Solve the following math problem:
const newModulo = 21 % 5 === 1;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  return str;  
}
returnString('str');
  //simply return the string provided: str


function add(x, y) {
  return x+y;
}
  add(2,2);
  // x and y are numbers
  // add x and y together and return the value
  // code here


function subtract(x, y) {
  return x-y;
}
  subtract(2,2);
  // subtract y from x and return the value
  // code here


function multiply(x, y) {
  return x*y;
}
  multiply(2,2);
  // multiply x by y and return the value
  // code here


function divide(x, y) {
  return x/y;
}
  divide(2,2);
  // divide x by y and return the value
  // code here



  function areEqual(x, y) {
    if (x===y) {
    return true;
  } else;
    return false;
  } 
      areEqual(2, 2);
  // return true if x and y are the same
  // otherwise return false
  // code here



function areSameLength(str1, str2) {
  if(str1.length===str2.length) {
  return true;
} else;
  return false;
}
  areSameLength('advv', 'heku');
  // return true if the two strings have the same length
  // otherwise return false
  // code here



  function lessThanNinety(num) {
    if(num<90){
      return true;
    
  } else; 
    return false;
  }
    lessThanNinety(89.999);
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here



  function greaterThanFifty(num) {
    if(num>50){
      return true;
    
  } else; 
    return false;
  }
    greaterThanFifty(51);
  // return true if num is greater than fifty
  // otherwise return false
  // code here



  function getRemainder(x, y) {
    z= x % y;
    return z;
  }
    getRemainder(5,2);
  // return the remainder from dividing x by y
  // code here




  function isEven(num) {
    if(num % 2===0){
    return true;
   } else;
     return false;
   }
     isEven(5);
  // return true if num is even
  // otherwise return false
  // code here




function isOdd(num) {
 if(num % 2 > 0){
 return true;
} else;
  return false;
}
  isOdd(6);
  // return true if num is odd
  // otherwise return false
  // code here




  function square(num) {
    const square2= num*num;
    return square2;
  }
    square(2);
  // square num and return the new value
  // hint: NOT square root!
  // code here



  function cube(num) {
    const cube2 = num*num*num;
    return cube2;
  }
    cube(-5);
  // cube num and return the new value
  // code here



  function raiseToPower(num, exponent) {
    x = Math.pow(num, exponent);
    return x;
  }
    raiseToPower(3,3);
  // raise num to whatever power is passed in as exponent
  // code here



function roundNumber(num) {
  x = Math.round(num);
  return x;
}
  roundNumber(3.51);
  //round num and return it
  // code here



function roundUp(num) {
  x = Math.ceil(num);
  return x;
}
  roundUp(2.09);
  // round num up and return it
  // code here



  function addExclamationPoint(str) {
    strex= (str+'!');
    return strex;
}
    addExclamationPoint('hello world');
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here





function combineNames(firstName, lastName) {
    combiner= (firstName+' '+lastName);
    return combiner;
}
    combineNames('Lambda','School');
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here




  function getGreeting(name) {
    addHello = ('Hello'+' '+name+'!');
    return addHello;
 }
   getGreeting('Sam');
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here




// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 

function getRectangleArea(length, width) {
  areaRec = (length*width);
  return areaRec;
}
 getRectangleArea(4, 5);  // return the area of the rectangle by using length and width
  // code here




  function getTriangleArea(base, height) {
    areaTri = (0.5*base*height);
    return areaTri;
 }
   getTriangleArea(3, 4);
  // return the area of the triangle by using base and height
  // code here




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

npm run tests:JSI


