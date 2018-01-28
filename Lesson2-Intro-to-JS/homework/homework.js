
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'Banter Mate' ;

//create a number variable, it an be any number
let newNum = 7 ;

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
  //simply return the string provided: str
return str;
}

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
const sum = x + y;
return sum;
}

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
const sum = x - y;
return sum;
}

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
const sum = x * y;
return sum;
}

function divide(x, y) {
  // divide x by y and return the value
  // code here
const sum = x / y;
return sum;
}

function areEqual(x, y) {
  if (x === y) {
    return true;
  }

  return false;
  
}

areEqual(5 , 5);


function areSameLength(str1, str2) {


  if (str1.length === str2.length) {
    return true;
  }

  return false;

}


function lessThanNinety(num) {
  if (num < 90) {
    return true;
  }

  return false;

}

lessThanNinety(77);

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  }

  return false;

}

greaterThanFifty(77);


function getRemainder(x, y) {
  const sum = x % y; {
    return sum;
  }

}

getRemainder(11 , 5);


function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }

  return false;
  // return true if num is even
  // otherwise return false
  // code here
}

isEven(2);


function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  }

  return false;
  // return true if num is false
  // otherwise return false
  // code here
}

isOdd(3);

function square(num) {
  const sum = (num * num); {
    return sum;
  } 
  

}

square(2);


function cube(num) {
  const sum = (num * num * num); {
    return sum;
  }
  // cube num and return the new value
  // code here
}

cube(2);


function raiseToPower(num, exponent) {
  const sum = Math.pow (num , exponent); {
    return sum;
  }
  
  // raise num to whatever power is passed in as exponent
  // code here
}

raiseToPower(3 , 3);



function roundNumber(num) {
  const sum = Math.round (num); {
    return sum;
  }
  // round num and return it
  // code here
}

roundNumber(4.3);


function roundUp(num) {
  const sum = Math.ceil (num); {
    return sum;
  }
  // round num up and return it
  // code here
}

roundUp(0.00001);



function addExclamationPoint(str) {
  const exclam = (str + '!'); {
    return exclam;


  }
 
  
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
}



function combineNames(firstName, lastName) {
  const combineNames = (firstName + ' ' + lastName); {
    return combineNames;
  }    
  
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
}

function getGreeting(name) {
  const greeting = ('Hello' + ' ' + name + '!'); {
    return greeting;
  }
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  const getLength = (length * width); {
    return getLength;
  }
  
  // return the area of the rectangle by using length and width
  // code here
}

function getTriangleArea(base, height) {
  const area = (base * height) / 2; {
    return area;
  }
  // return the area of the triangle by using base and height
  // code here
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
