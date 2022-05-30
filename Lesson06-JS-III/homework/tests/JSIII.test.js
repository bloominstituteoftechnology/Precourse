/* eslint-disable no-undef */
const {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments
} = require('../homework');

describe('returnFirst(arr)', function() {
  it('should return the first item in the array', function() {
    expect(returnFirst([10, 10, 16, 12])).toBe(10);
    expect(returnFirst([97, 100, 80, 55, 72, 94])).toBe(97);
  });
});

describe('returnLast(arr)', function() {
  it('should return the last item in the array', function() {
    expect(returnLast([10, 10, 16, 12])).toBe(12);
    expect(returnLast([97, 100, 80, 55, 72, 94])).toBe(94);
    expect(returnLast(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
  });
});

describe('getArrayLength(arr)', function() {
  it('should return the length of the array', function() {
    expect(getArrayLength([10, 10, 16, 12])).toBe(4);
    expect(getArrayLength([97, 100, 80, 55, 72, 94])).toBe(6);
    expect(getArrayLength(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
  });
});

describe('incrementByOne(arr)', function() {
  it('should return the array with each value incremented by one', function() {
    expect(incrementByOne([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
    expect(incrementByOne([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
    expect(incrementByOne([])).toEqual([]);
  });
});

describe('addItemToArray(arr, item)', function() {
  it('should return the array with the item added to the end', function() {
    expect(addItemToArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
    expect(addItemToArray([97, 100, 80, 55, 72, 94], 'Hello')).toEqual([97, 100, 80, 55, 72, 94, 'Hello']);
    expect(addItemToArray([], true)).toEqual([true]);
  });
});

describe('addItemToFront(arr, item)', function() {
  it('should return the array with the item added to the front', function() {
    expect(addItemToFront([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
    expect(addItemToFront([97, 100, 80, 55, 72, 94], 'Hello')).toEqual(['Hello', 97, 100, 80, 55, 72, 94]);
    expect(addItemToFront([], true)).toEqual([true]);
  });
});

describe('wordsToSentence(words)', function() {
  it('should return a string that has all of the words from the array separated by spaces', function() {
    expect(wordsToSentence(['LambdaSchool', 'JavaScript', 'Class'])).toBe('LambdaSchool JavaScript Class');
    expect(wordsToSentence(['LambdaSchool'])).toBe('LambdaSchool');
  });
});

describe('contains(arr, item)', function() {
  it('should return true if the array contains the item', function() {
    expect(contains([10, 10, 16, 12], 10)).toBe(true);
    expect(contains([97, 100, 80, 55, 72, 94], 'Hello')).toBe(false);
    expect(contains([], true)).toBe(false);
  });
});

describe('addNumbers(numbers)', function() {
  it('should add all of the numbers in the array together and return the sum', function() {
    expect(addNumbers([10, 10, 16])).toBe(36);
    expect(addNumbers([97, 100])).toBe(197);
    expect(addNumbers([0])).toBe(0);
  });
});

describe('averageTestScore(testScores)', function() {
  it('should return the average test score', function() {
    expect(averageTestScore([10, 10, 16, 12])).toBe(12);
    expect(averageTestScore([97, 100, 80, 55, 72, 94])).toBe(83);
  });
});

describe('largestNumber(numbers)', function() {
  it('should return the largest number', function() {
    expect(largestNumber([10, 10, 16, 12])).toBe(16);
    expect(largestNumber([97, 100, 80, 55, 72, 94])).toBe(100);
    expect(largestNumber([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
  });
});

describe('multiplyArguments()', function () {
  it('should return the product of all the arguments', function () {
    const product = multiplyArguments(5, 5);
    const product2 = multiplyArguments();
    const product3 = multiplyArguments(3, 3, 3, 3);
    const product4 = multiplyArguments(1);
    const product5 = multiplyArguments(10, 0, 10);
    expect(product).toBe(25);
    expect(product2).toBe(0);
    expect(product3).toBe(81);
    expect(product4).toBe(1);
    expect(product5).toBe(0);
  });
});

