/* eslint-disable no-undef */
const {
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
} = require('../homework');

describe('newString', function() {
  it('should be a string', function() {
    expect(typeof newString).toBe('string');
  });
});

describe('newNum', function() {
  it('should be a number', function() {
    expect(typeof newNum).toBe('number');
  });
});

describe('newBool', function() {
  it('should be a boolean', function() {
    expect(typeof newBool).toBe('boolean');
  });
});

describe('newSubtract', function() {
  it('should be a boolean', function() {
    expect(newSubtract).toBe(true);
  });
});

describe('newMultiply', function() {
  it('should be a boolean', function() {
    expect(newMultiply).toBe(true);
  });
});

describe('newModulo', function() {
  it('should be a boolean', function() {
    expect(newModulo).toBe(true);
  });
});

describe('returnString(str)', function() {
  it('should return the string provided', function() {
    let string = 'lambdaSchool';
    expect(returnString(string)).toBe(string);
  });
});

describe('add(x, y)', function() {
  it('should return the sum of the two arguments', function() {
    expect(add(5, 5)).toBe(10);
    expect(add(-1, 5)).toBe(4);
  });
});

describe('subtract(x, y)', function() {
  it('should return the difference of the two arguments', function() {
    expect(subtract(5, 5)).toBe(0);
    expect(subtract(-1, 5)).toBe(-6);
    expect(subtract(5, -5)).toBe(10);
    expect(subtract(0, 0)).toBe(0);
  });
});

describe('divide(x, y)', function() {
  it('should return the quotient of the two arguments', function() {
    expect(divide(5, 5)).toBe(1);
    expect(divide(10, 5)).toBe(2);
    expect(divide(11, 2)).toBe(5.5);
  });
});

describe('multiply(x, y)', function() {
  it('should return the product of the two arguments', function() {
    expect(multiply(5, 5)).toBe(25);
    expect(multiply(10, -5)).toBe(-50);
    expect(multiply(11, 0)).toBe(0);
  });
});


describe('areEqual(x, y)', function() {
  it('should return true if the arguments are equal', function() {
    expect(areEqual(15, 15)).toBe(true);
    expect(areEqual(90, 50)).toBe(false);
    expect(areEqual('test', 'test')).toBe(true);
  });
});

describe('areSameLength(str1, str2)', function() {
  it('should return true if the arguments have the same length', function() {
    expect(areSameLength('hi', 'there')).toBe(false);
    expect(areSameLength('javascript', 'bumfuzzled')).toBe(true);
  });
});

describe('lessThanNinety(num)', function() {
  it('should return true if the argument is less than ninety', function() {
    expect(lessThanNinety(15)).toBe(true);
    expect(lessThanNinety(90)).toBe(false);
    expect(lessThanNinety(100)).toBe(false);
  });
});

describe('greaterThanFifty(num)', function() {
  it('should return true if the argument is greater than fifty', function() {
    expect(greaterThanFifty(15)).toBe(false);
    expect(greaterThanFifty(50)).toBe(false);
    expect(greaterThanFifty(60)).toBe(true);
  });
});

describe('getRemainder(x, y)', function() {
  it('should return the division remainder of the two arguments', function() {
    expect(getRemainder(5, 5)).toBe(0);
    expect(getRemainder(10, 5)).toBe(0);
    expect(getRemainder(11, 2)).toBe(1);
  });
});

describe('isEven(num)', function() {
  it('should return the bool true if the argument is even, false otherwise', function() {
    expect(isEven(6)).toBe(true);
    expect(isEven(7)).toBe(false);
    expect(isEven(0)).toBe(true);
  });
});

describe('isOdd(num)', function() {
  it('should return the bool true if the argument is odd, false otherwise', function() {
    expect(isOdd(6)).toBe(false);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(0)).toBe(false);
  });
});

describe('square(num)', function() {
  it('should return the argument after squaring it', function() {
    expect(square(6)).toBe(36);
    expect(square(7)).toBe(49);
    expect(square(0)).toBe(0);
    expect(square(-5)).toBe(25);
  });
});

describe('cube(num)', function() {
  it('should return the argument after cubing it', function() {
    expect(cube(3)).toBe(27);
    expect(cube(0)).toBe(0);
    expect(cube(-5)).toBe(-125);
  });
});

describe('raiseToPower(num, exponent)', function() {
  it('should return the argument after raising it to the exponent\'s power', function() {
    expect(raiseToPower(2, 2)).toBe(4);
    expect(raiseToPower(2, 3)).toBe(8);
    expect(raiseToPower(0, 5)).toBe(0);
    expect(raiseToPower(10, 1)).toBe(10);
  });
});

describe('roundNumber(num)', function() {
  it('should return the argument after rounding it', function() {
    expect(roundNumber(1.5)).toBe(2);
    expect(roundNumber(2)).toBe(2);
    expect(roundNumber(0.1)).toBe(0);
  });
});

describe('roundUp(num)', function() {
  it('should return the argument after rounding it up', function() {
    expect(roundUp(1.5)).toBe(2);
    expect(roundUp(2)).toBe(2);
    expect(roundUp(0.1)).toBe(1);
  });
});

describe('addExclamationPoint(str)', function() {
  it('should add an exclamation point to the end of the string', function() {
    expect(addExclamationPoint('hello world')).toBe('hello world!');
    expect(addExclamationPoint('LambdaSchool')).toBe('LambdaSchool!');
  });
});

describe('combineNames(firstName, lastName)', function() {
  it('should return the two strings combined into one with a space separating them', function() {
    expect(combineNames('hello', 'world')).toBe('hello world');
    expect(combineNames('Lambda', 'School')).toBe('Lambda School');
  });
});

describe('getGreeting(name)', function() {
  it('should return the string \'Hello {name}!\'', function() {
    expect(getGreeting('Ben')).toBe('Hello Ben!');
    expect(getGreeting('LambdaSchool')).toBe('Hello LambdaSchool!');
  });
});

describe('getRectangleArea(length, width)', function() {
  it('should return the correct area', function() {
    expect(getRectangleArea(2, 2)).toBe(4);
    expect(getRectangleArea(3, 6)).toBe(18);
    expect(getRectangleArea(0, 2)).toBe(0);
  });
});

describe('getTriangleArea(base, height)', function() {
  it('should return the correct area', function() {
    expect(getTriangleArea(2, 2)).toBe(2);
    expect(getTriangleArea(0, 2)).toBe(0);
  });
});