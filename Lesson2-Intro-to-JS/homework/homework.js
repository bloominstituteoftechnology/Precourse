
// Name: Justin Dellacanonica
// Date: 01/24/2018
// Description: Homework for Lesson 2 of the Lambda mini bootcamp 
 

let newString = 'String';
let newNum = 11;
let newBool = true;
let newSubtract = 10 - 5 === 5;
let newMultiply = 10 * 4 === 40;
let newModulo = 21 % 5 === 1;

function returnString(str) {
    return str;
}

function add(x, y) {
    let sum = x + y;
    return sum;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x,y){
    let multiply = x * y;
    return multiply;
}

function divide(x, y){
    let divide = x / y;
    return divide;
}

function areEqual(x, y){
    if(x === y){
        return true;
    }
    return false;
}

function areSameLength(str1, str2){
    let str1Len = str1.length;
    let str2Len = str2.length;
    
    if (str1Len === str2Len){
        return true;
    }
    return false;
}

function lessThanNinety(num){
    if (num < 90){
        return true;
    }
    return false;
}

function greaterThanFifty(num){
    if (num > 50){
        return true;
    }
    return false;
}

function getRemainder(x, y){
    let remainder = x % y;
    return remainder;
}

function isEven(num){
    if (num % 2 === 0){
        return true;
    }
    return false;
}

function isOdd(num){
    if (num % 2 !== 0){
        return true;
    }
    return false;
}

function square(num){
    let square = Math.pow(num, 2);
    return square;
}

function cube(num){
    let cube = Math.pow(num, 3);
    return cube;
}

function raiseToPower(num, exponent){
    let pow = Math.pow(num, exponent);
    return pow;
}

function roundNumber(num){
    let roundNum = Math.round(num);
    return roundNum;
}

function roundUp(num){
    let roundUp = Math.ceil(num);
    return roundUp;
}

function addExclamationPoint(str){
    str += '!';
    return str;
}

function combineNames(firstName, lastName){
    let name = firstName + ' ' + lastName;
    return name;
}

function getGreeting(name){
    let greeting = 'Hello ' + name + '!';
    return greeting;
}

function getRectangleArea(length, width){
    let area = length * width;
    return area;
}

function getTriangleArea(base, height){
    return ((base * height)/2);
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




