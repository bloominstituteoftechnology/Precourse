// Do not change any of the function names

// Arrays: in javascript and many other low level languages. (not to include spanish ;) Array) 
// could be thought of as a group of items, things, numbers, strings. these things are stored 
// under one name or one place.
// you could think of a array as your house, it stores people, multiple people!
// the house is the array and the people, you and the others in it that it stores and the 
// items in it are the varibles or you could say diffrent items in that array

function returnFirst(arr) {
    // return the first item from the array
    return (arr [0]);
}

function returnLast(arr) {
    // return the last item of the array
    return (arr[arr.length - 1]);
}

function getArrayLength(arr) {
    // return the length of the array
    return (arr.length);
}

function incrementByOne(arr) {
    // arr is an array of integers  
    // increase each integer by one
    // return the array
    arr = arr.map(function (val) { return ++val; });
    return(arr);
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
    // return the array
    arr.push(item);{
        return arr;}
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
    // hint: use the array method .unshift
    arr.unshift(item);{
    return arr;}
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
    // example: ['Hello', 'world!'] -> 'Hello world!'
    return (words.join(' '));
}

function contains(arr, item) {
  // check to see if item is inside of arr
    // return true if it is, otherwise return false
//array.includes());
    return (arr.includes(item));
}

function addNumbers(numbers) {
    // numbers is an array of integers.
    // add all of the integers and return the value]
        var wayne = 0;
        for (let i = 0; i < numbers.length; i++) {
            wayne = wayne + numbers[i];
        }
        return wayne;
    }

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
    // return the average
    var wayne = 0;
    var wally = testScores.length;
    for (let i = 0; i < testScores.length; i++) {
        wayne = wayne + testScores[i];
    }
    return (wayne / wally);
}

function largestNumber(numbers) {
  // numbers is an array of integers
    // return the largest integer
    // https: //medium.freecodecamp.org/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1
    return (Math.max.apply(null, numbers));
  
}

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
