
let newString = 'string';
let newNum = 8;
let newBool = true;
let newSubtract = 10 - 5 === 5;
let newMultiply = 10 * 4 === 40 ;
let newModulo = 21 % 5 === 1 ;

const returnString = (str) => str;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const areEqual = (x, y) => x === y;
const areSameLength = (x, y) => x.length === y.length;
const lessThanNinety = (num) => num < 90;
const greaterThanFifty = (num) => num > 50;
const getRemainder = (x, y) => x % y;
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 === 1;
const square = (num) => Math.pow(num, 2);
const cube = (num) => Math.pow(num, 3);
const raiseToPower = (num, exponent) => Math.pow(num, exponent);
const roundNumber = (num) => Math.round(num);
const roundUp = (num) => Math.ceil(num);
const addExclamationPoint = (str) => `${str}!`;
const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;
const getGreeting = (name) => `Hello ${name}!`;
const getRectangleArea = (l, w) => l * w;
const getTriangleArea = (b, h) => (b * h) / 2;

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
