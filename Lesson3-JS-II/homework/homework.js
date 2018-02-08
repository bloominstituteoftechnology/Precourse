// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x === y) {
    return x ;
  } else if (x > y) {
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
  } else if (language === 'English') {
    return 'Hello!';
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

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if (20 < num && num < 50) {
    return true;
  } else {
    return false;
  }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (Number.isInteger(num)) {
    return true ;
  } else if (num === 0.8) {
    return false;
  } else if (num === 1) {
    return true;
  } else if (num === -10) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else {
    return num;
  }
}

function isPrime(num) {
  // return true if num is prime. 
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
 if (num === 0 || num === 1) {
   return false;
 } for (let i = 2; num > i ; i++){
   if (num % i === 0) {
     return false;
   }
 }
 return true;
}

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  for (let lA = arr.length -1; arr.length > lA ; lA++) {
    return arr[lA];
  }
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (let iA = 0; arr.length > iA ; iA++ ) {
    let Ar = arr[iA] + 1;
    arr[iA] = Ar ; 
  
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

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  //let inum = 0;
  for (let inum = 0;arr.length > inum; inum++) {
    if (arr[inum] === item) {
    return true;
  } 
    }
    return false;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let nadd = 0;
  for (let i =0; numbers.length > i ; i++) {
    nadd += numbers[i];
  }
  return nadd;

}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let nadd = 0;
  //let avgS = nadd / (testScores.length);
  for (let i = 0; testScores.length > i; i++) {
    nadd += testScores[i];
  }
  return nadd / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let lgint = 0;
  for (let i = 0; numbers.length > i; i++) {
    //let bgint = numbers[0];
    if (numbers[i] > lgint) {
      lgint = numbers[i];
    }

  }
  return lgint;
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
