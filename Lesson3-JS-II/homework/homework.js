// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
    if (x >= y) {
      return x;
    } else {
      return y;
    }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
    if (language === 'German') {
      return 'Guten Tag!';
    } else if (language === 'Spanish') {
      return 'Hola!';
    } else {
      return 'Hello!';
    }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
    if (num === 10 || num === 5) {
      return true;
    } else {
      return false;
    }
}

//better way: return num === 10 || num === 5;

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
    if (num < 50 && num > 20) {
      return true;
    } else {
      return false;
    }
}
//better: return num < 50 && num > 20;

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
    if (num === Math.floor(num)) {
      return true;
    } else {
      return false;
    }
}
//better: return num === Math.floor(num);

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
    let fizz = num / 3;
    let buzz = num / 5;
    if (fizz === Math.floor(fizz) && buzz === Math.floor(buzz)) {
        return 'fizzbuzz';
    } else if (fizz === Math.floor(fizz)) {
      return 'fizz';
    } else if (buzz === Math.floor(buzz)) {
      return 'buzz';
    } else {
      return num;
    }
}

//another way: if (num % 3 === 0 && num % 5 === 0) {
//return 'fizzbuzz';
//} else if (num % 3 === 0) {
//    return 'fizz';
//} else if (num % 5 === 0) {
//    return 'buzz';
//} else {
//    return num;
//}
//}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers

    //my answer below is incorrect; it returns true for non-prime numbers with prime number divisors. such as 121 and 529
//    for (let i = 2; i <= 9; i++) {
//      if (num === 0 || num === 1) {
//        return false;
//      } else if (num % i !== 0) {
//        return true;
//      } else {
//        return false;
//      }
//    }
//}

//correct answer:
        if (num === 0 || num === 1) {
            return false;
        }
        if (num === 2) {
            return true;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
    return true;
}

function returnFirst(arr) {
    // return the first item from the array
//incorrect:    return arr.shift();
//}

//correct:
    return arr[0];
}


function returnLast(arr) {
  // return the last item of the array
//incorrect:    return arr.pop();
//}

    //correct:
    return arr[array.length - 1];

function getArrayLength(arr) {
  // return the length of the array
    return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
    for (let i = 0; i < arr.length; i++) {
      arr[i] += 1;
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

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
   return words.join(' ');
}

//manual method:
    //let sentence = '';
    //for (let i = 0; i < words.length; i++) {
    //sentence += words[i];
    //if (i + 1 !== words.length) {
    //sentence += words[i];
    //}
    //}
    //return sentence;
    //}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
//delete:    let check = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
//delete            check += 1;
//delete        }
//delete    }
//delete    if (check > 0) {
        return true;
//delete "else {"    } else {
//swap this line and next        return false;
    }
}

//return arr.includes(item);

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
    let value = 0;
    for (let i = 0; i < numbers.length; i++) {
        value += numbers[i];
    }
    return value;
}


//use the function above to solve this one: return addNumbers(testScroes) / testScrores.length;
function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
    let value = 0;
    for (let i = 0; i < testScores.length; i++) {
        value += testScores[i];
    }
    return value / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
    let big = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > big) {
            big = numbers[i];
        }
    } return big;
}

//instead of "let big = 0" teacher used "let big = numbers[0]" rest is the same

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
