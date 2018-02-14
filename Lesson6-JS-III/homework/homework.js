// Do not change any of the function names

function returnFirst(arr) {
    // return the first item from the array
    return arr[0];
}

function returnLast(arr) {
    // return the last item of the array
    return arr[arr.length - 1];
}

function getArrayLength(arr) {
    // return the length of the array
    return arr.length;

}
// ***************
function incrementByOne(arr) {
    // arr is an array of integers  
    // increase each integer by one
    // return the array
    var i = 0;
    for (i = 0; i < arr.length; i++) {
        arr[i.valueOf] = arr[i.valueOf + 1];
    }
    return arr;
}

function addItemToArray(arr, item) {
    // add the item to the end of the array
    // return the array
    arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
    // add the item to the front of the array
    // return the array
    // hint: use the array method .unshift
    arr.unshift(item);
    return arr;
}
// ***************
function wordsToSentence(words) {
    // words is an array of strings
    // return a string that is all of the words concatenated together
    // spaces need to be between each word
    // example: ['Hello', 'world!'] -> 'Hello world!'
    var i = 0;
    for (i = 1; i < words.length; i++) {
        // make a String
        return words;
    }
}
// ***************
function contains(arr, item) {
    // check to see if item is inside of arr
    // return true if it is, otherwise return false
    if (arr.indexOf(item) !== -1) {
        return true;
    } else return false;
}

function addNumbers(numbers) {
    // numbers is an array of integers.
    // add all of the integers and return the value
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function averageTestScore(testScores) {
    // testScores is an array.  Iterate over testScores and compute the average.
    // return the average
    var sum = 0;
    var average = 0;
    for (var i = 0; i < testScores.length; i++) {
        sum += testScores[i];
        average = sum / testScores.length;
    }
    return average;
}
// ***************
function largestNumber(numbers) {
    // numbers is an array of integers
    // return the largest integer
    var largestNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < Math.max(numbers)) {
            i++;
        } else if (numbers[i] === Math.max(numbers)) {
            largestNum = numbers[i];
        }
    }
    return largestNum;
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