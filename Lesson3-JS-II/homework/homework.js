// Do not change any of the function names

function getBiggest(x, y) {
    
    return x > y ? x : y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
    let greeting = 'Hello!';
    
    if (typeof language != 'undefined') {
        if (language.toUpperCase() === 'GERMAN') {
            greeting = 'Guten Tag!';
        
        }
        else if (language.toUpperCase() === 'SPANISH') {
        greeting = 'Hola!';
        
        }
    }

 
    return greeting;
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
    return num === 10 || num === 5 ? true : false;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
    return num > 20 && num < 50 ? true : false;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
    return Math.floor(num) === num;
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
    var result;
    
    if (num % 3 === 0 && num % 5 === 0) {
            result = 'fizzbuzz';
        }
    else if (num % 3 === 0)
        {
            result = 'fizz';
        }
    else if (num % 5 === 0) {
        result = 'buzz';
    }
    else
        {
            result = num;
        }
    
    return result;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
    let root = Math.sqrt(num);
    let ceilRoot = Math.ceil(root);
    let k = ceilRoot > root ? ceilRoot: root + 1;
    let result = true;
    
    if (num === 1 || num === 0) {
        result = false;
    }
    else {
        for (let i = 2; i < k; i++) {
            
            if (num % i === 0) {
            result = false;
        }
    }
        
    }

    
    return result;
    
}

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

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
    arr.forEach((value, index) => arr[index]++);
    
    return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
    arr[arr.length] = item;
    return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
    arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
    return words.join(' ');
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
    return arr.includes(item);
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
    let result = 0;
    numbers.forEach((value) => result += value);
    
    return result;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
    let result = 0;
    testScores.forEach((value) => result += value);
    result = result / testScores.length;
    
    return result;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
    let result = numbers[0];
    numbers.forEach((value) => result = result < value ? value : result);
    
    return result;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
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
  largestNumber: largestNumber
};
