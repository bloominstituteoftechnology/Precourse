
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = "harish" ;

//create a number variable, it an be any number
let newNum = 32;

//create a boolean variable
let newBool = true ;

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
const rs= 'i am returning' + str ;
  return rs;
}
returnString('harish');


  function add(x,y){
    const addition=x+y;
    return addition;
  }
  add(3,9);

function subtract(x, y) {
   const sub=x-y;
    return sub;
  }
  subtract(3,9);

function multiply(x, y) {
  const mul=x*y;
    return mul;
  }
  multiply(3,9);

function divide(x, y) {
  const divi=x/y;
    return divi;
}  
  divide(90,9);

function areEqual(x, y) {
  
    if(x==y){
      
      return true;
      }
      
      else
      
      {
        return false;
      }
    
  }
  
  areEqual (91,91);

function areSameLength(str1, str2) {
  if(str1.length === str2.length){
    return true;
  }
  else
  {
    return false;
  }
  
}
areSameLength('ADvinod','Vandana');

function lessThanNinety(num) {
  if(num<90){
    return true;
  }
    else{
      return false;
    }
  }

lessThanNinety(10);

function greaterThanFifty(num) {
   if(num>50){
    return true;
  }
    else{
      return false;
    }
  }

greaterThanFifty(60);

function getRemainder(x, y) {
  const gr=x%y;
  return gr;
}
getRemainder(40,9);

function isEven(num) {
  if(num%2===0){
    
  return true;
  }
  else{
    
    return false;
    
  }
}
isEven(60);


function isOdd(num) {
  if(num%2!==0){
    
  return true;
  }
  else{
    
    return false;
    
  }
}
isOdd(61);

function square(num) {
  const sq=Math.pow(num,2);
  return sq;
}
square(4);

function cube(num) {
  const cb=Math.pow(num,3);
  return cb;
}
cube(4);

function raiseToPower(num, exponent) {
  
    const rtp=Math.pow(num,exponent);
  
    return rtp;
    
  }
  raiseToPower(4,2);

function roundNumber(num) {
  const rn=Math.round(num);
  return rn;
}
roundNumber(8.2);

function roundUp(num) {
  const ru=Math.ceil(num);
return ru;
  
}
roundUp(8.00000000000001);

function addExclamationPoint(str) {
  const aep = 'hello world'+' ' + str ;
  return aep;
}
addExclamationPoint('!');

function combineNames(firstName, lastName) {
  const cn = firstName +'   ' + lastName;
  return cn;
}
combineNames('harish','kumar');

function getGreeting(name) {
  const gt = 'hello' + '  ' + name + '!';
  return gt;
}
getGreeting('harish');

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  const ra=length*width;
  return ra;
}
getRectangleArea(7.9,805);


function getTriangleArea(base, height) {
  const ta = 0.5*base*height;
  return ta;
}
getTriangleArea(8,4);

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
}
