// Do not change any of the function names

const returnFirst = (arr) => arr[0];
const returnLast = (arr) => arr[arr.length - 1];
const getArrayLength = (arr) => arr.length;
const incrementByOne = (arr) => arr.map(x => ++x);
const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
};
const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
};
const wordsToSentence = (words) => words.join(' ');
const contains = (arr, item) => arr.includes(item);
const addNumbers = (nums) => nums.reduce((a, b) => a + b);
const averageTestScore = (testScores) => testScores.reduce((a, b) => a + b) / testScores.length;
// const largestNumber = (nums) => nums.reduce((a, b) => a > b ? a : a = b);
// const largestNumber = (nums) => nums.sort((a, b) => b - a)[0];
const largestNumber = (nums) => Math.max(...nums);

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber,
};
