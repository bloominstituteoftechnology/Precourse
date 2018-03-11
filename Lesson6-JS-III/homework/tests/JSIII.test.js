var exercises = require('../homework');

describe('returnFirst(arr)', function() {
  it('should return the first item in the array', function() {
    expect(exercises.returnFirst([10, 10, 16, 12])).toBe(10);
    expect(exercises.returnFirst([97, 100, 80, 55, 72, 94])).toBe(97);
  });
});

describe('returnLast(arr)', function() {
  it('should return the last item in the array', function() {
    expect(exercises.returnLast([10, 10, 16, 12])).toBe(12);
    expect(exercises.returnLast([97, 100, 80, 55, 72, 94])).toBe(94);
    expect(exercises.returnLast(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
  });
});

describe('getArrayLength(arr)', function() {
  it('should return the length of the array', function() {
    expect(exercises.getArrayLength([10, 10, 16, 12])).toBe(4);
    expect(exercises.getArrayLength([97, 100, 80, 55, 72, 94])).toBe(6);
    expect(exercises.getArrayLength(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
  });
});

describe('incrementByOne(arr)', function() {
  it('should return the array with each value incremented by one', function() {
    expect(exercises.incrementByOne([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
    expect(exercises.incrementByOne([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
    expect(exercises.incrementByOne([])).toEqual([]);
  });
});

describe('addItemToArray(arr, item)', function() {
  it('should return the array with the item added to the end', function() {
    expect(exercises.addItemToArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
    expect(exercises.addItemToArray([97, 100, 80, 55, 72, 94], 'Hello')).toEqual([97, 100, 80, 55, 72, 94, 'Hello']);
    expect(exercises.addItemToArray([], true)).toEqual([true]);
  });
});

describe('addItemToFront(arr, item)', function() {
  it('should return the array with the item added to the front', function() {
    expect(exercises.addItemToFront([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
    expect(exercises.addItemToFront([97, 100, 80, 55, 72, 94], 'Hello')).toEqual(['Hello', 97, 100, 80, 55, 72, 94]);
    expect(exercises.addItemToFront([], true)).toEqual([true]);
  });
});

describe('wordsToSentence(words)', function() {
  it('should return a string that has all of the words from the array separated by spaces', function() {
    expect(exercises.wordsToSentence(['LambdaSchool', 'JavaScript', 'Class'])).toBe('LambdaSchool JavaScript Class');
    expect(exercises.wordsToSentence(['LambdaSchool'])).toBe('LambdaSchool');
  });
});

describe('contains(arr, item)', function() {
  it('should return true if the array contains the item', function() {
    expect(exercises.contains([10, 10, 16, 12], 10)).toBe(true);
    expect(exercises.contains([97, 100, 80, 55, 72, 94], 'Hello')).toBe(false);
    expect(exercises.contains([], true)).toBe(false);
  });
});

describe('addNumbers(numbers)', function() {
  it('should add all of the numbers in the array together and return the sum', function() {
    expect(exercises.addNumbers([10, 10, 16])).toBe(36);
    expect(exercises.addNumbers([97, 100])).toBe(197);
    expect(exercises.addNumbers([0])).toBe(0);
  });
});

describe('averageTestScore(testScores)', function() {
  it('should return the average test score', function() {
    expect(exercises.averageTestScore([10, 10, 16, 12])).toBe(12);
    expect(exercises.averageTestScore([97, 100, 80, 55, 72, 94])).toBe(83);
  });
});

describe('largestNumber(numbers)', function() {
  it('should return the largest number', function() {
    expect(exercises.largestNumber([10, 10, 16, 12])).toBe(16);
    expect(exercises.largestNumber([97, 100, 80, 55, 72, 94])).toBe(100);
    expect(exercises.largestNumber([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
  });
});

