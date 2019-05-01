// Do not change any of the function names

function returnFirst(arr) {
    return arr[0];
}

function returnLast(arr) {
    return arr[arr.length - 1];
}

function getArrayLength(arr) {
    return arr.length;
}

function incrementByOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
    }
    return arr;
}

function addItemToArray(arr, item) {
    arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
    arr.unshift(item);
    return arr;
}


function wordsToSentence(words) {
    let output = '';
    for (let i = 0; i < words.length; i++) {
        output = output + words[i];
        if (i < (words.length - 1)) {
            output = output + ' ';
        }
    }
    return output;
}


function contains(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

function addNumbers(numbers) {
    let sum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}



function averageTestScore(testScores) {
    let sum = testScores[0];
    for (let i = 1; i < testScores.length; i++) {
        sum = sum + testScores[i];
    }
    let avg = sum / testScores.length;
    return avg;
}


function largestNumber(numbers) {
    let big = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (big < numbers[i]) {
            big = numbers[i];
        }
    }
    return big;
}


function multiplyArguments() {
    let product = 1;
    for (let i = 0; i < arguments.length; i++) {
        product = product * arguments[i];
    }
    if (arguments.length === 0) {
        return 0;
    }
    return product;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
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
    multiplyArguments,
};