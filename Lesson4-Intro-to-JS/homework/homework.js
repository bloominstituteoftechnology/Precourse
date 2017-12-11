//Do not change any of the function names

function multiplyByTen(num) {
  // return num after multiplying it by ten
  // code here
  var pro = num * 10;
  return pro;
}

function subtractFive(num) {
  // return num after subtracting five
  // code here
  var pro = num - 5;
  return pro;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
var pro = str1.length === str2.length;
return pro;
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x === y){
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  // return true if num is less than ninety
  // otherwise return false
  // code here
  if (num < 90){
    return true;
  }
  return false;
}

lessThanNinety(100);

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (num > 50){
    return true;
  }
  return false;
}

greaterThanFifty(100);

function add(x, y) {
  // add x and y together and return the value
  // code here
  var pro = x + y;
  return pro;
}

add(10,50);

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  var pro = x - y;
  return pro;
}

subtract(50,30);

function divide(x, y) {
  // divide x by y and return the value
  // code here
  var pro = x / y;
  return pro;
}

divide(100,2);

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  var pro = x * y;
  return pro;
}

multiply(50,2);

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  var pro = x % y;
  return pro;
}

getRemainder(6,4);

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if (num % 2 === 0){
    return true;
  }
  return false;
}

isEven(53);

function isOdd(num) {
  // return true if num is false
  // otherwise return false
  // code here
  if (num % 2 !== 0){
    return true;
  }
  return false;
}

isOdd(80);

function square(num) {
  // square num and return the new value
  // code here
  var pro = Math.pow(num,2);
  return pro;
}

square(2);

function cube(num) {
  // cube num and return the new value
  // code here
  var pro = Math.pow(num,3);
  return pro;
}

cube(2);

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  var pro = Math.pow(num, exponent);
  return pro;
}

raiseToPower(3,3);

function roundNumber(num) {
  // round num and return it
  // code here
  var pro = Math.round(num);
  return pro;
}

roundNumber(8.5);

function roundUp(num) {
  // round num up and return it
  // code here
  var pro = Math.ceil(num);
  return pro;
}

roundUp(5.01);

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  var pro = str + '!';
  return pro;
}

addExclamationPoint('hello world');

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  var pro = firstName + ' ' + lastName;
  return pro;
}

combineNames('Richard', 'Yu');

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  var pro = 'Hello' + ' ' + name + '!';
  return pro;
}

getGreeting('Rich');

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  var pro = length * width;
  return pro;
}

getRectangleArea(2,3);

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  var pro = base * height /2;
  return pro;
}

getTriangleArea(3,3);

function getCircleArea(radius) {
  // return the rounded area of the circle given the radius
  // code here
  var circleArea = Math.PI * radius * radius;
  var pro = Math.round(circleArea);
  return pro;
}

getCircleArea(5);

function getRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  var pro = length * width * height;
  return pro;
}

getRectangularPrismVolume(3,3,3);
// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
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
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
