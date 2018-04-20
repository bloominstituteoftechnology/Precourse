// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length -1] ;
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length ;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1 ;
  }
  return arr ;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item) ;
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item) ;
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let newString = [] ;
  for (let i = 0; i < words.length; i++ ) {
    newString = newString + ' ' + words[i] ;     
  }
  //.TRIM REMOVES WHITE SPACE FROM FRONT & REAR 
  return newString.trim() ;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if (arr.includes(item)) {
    return true ;
  } else {
    return false ;
  }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  const functionalProgrammingSum = numbers.reduce( function(total, amount) {
    return total + amount ;
  });
  return functionalProgrammingSum ;
} //YAY!!

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average

  //LET'S GET BACK TO BASICS, AWAY FROM FUNCTIONAL PROGRAMING, FOR NOW...
  let avg = 0;
  for (let i = 0; i < testScores.length; i++) {
    avg = avg + testScores[i] ;
  }
  return avg / testScores.length ;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  
  // THIS BELOW WORKS AS A for LOOP.  LETS TRY reduce
  /*
  let largestInt = 0 ;
  for (let i = 0; i < numbers.length; i++) {
    if (largestInt < numbers[i] && largestInt !== numbers[i]) {
      largestInt = numbers[i];
    }
  }
  return largestInt;
  */
  let numbersMax = numbers.reduce(function(a, b) {
    return Math.max(a, b) ;
  });
  return numbersMax ;
} //NICE..!

function multiplyArguments() {
  let myArgs = 1;
  // if no arguments are passed in return 0
  if (arguments.length === 0) {
    return 0;
  // if one argument is passed in just return it
  } else if (arguments.length === 1) {
      return arguments[0];
  } else {
  // use the arguments keyword to multiply all of the arguments together and return the product
      for (let i = 0; i < arguments.length; i++) {
        myArgs = myArgs * arguments[i] ;
    }
  // console.log(myArgs);
  return myArgs;
  }
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
