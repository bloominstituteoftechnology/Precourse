// Do not change any of the function names

// 1)
function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

// 2)
function returnLast(arr) {
  // return the last item of the array
        return arr[arr.length - 1];
}

// 3)
function getArrayLength(arr) {
    return arr.length;
  // return the length of the array
}

// 4)
function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
      // let s = 0;
    const inc = arr.map(function(x) {
      return x + 1;
    }
  );
    return inc;
}

// 5)
function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array 
      arr.push(item);
      return arr;
      
}

// 6)
function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
        arr.unshift(item);
        return arr;
}

// 7)
function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
        words = words.join(' ');
        return words;
  
}

// 8)
function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
      let container = arr.includes(item);
      return container;
    
    }

// 9)
function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
        let s = 0;
        for (let i = 0; i < numbers.length; i++) {
            s += numbers[i];
        }
        return s;
}

// 10)
function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
        let s = 0;
        for (let i = 0; i < testScores.length; i++) {
          s += testScores[i] / testScores.length;
        }
        return Math.round(s);
}

// 11)
function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
          let s = Math.max.apply(null, numbers);
          return s;

}

//  12)
function multiplyArguments(x) {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it    
      let p = 1;
      if (x === undefined) {
          p = 0;
      }
    
      for (let i = 0; i < arguments.length; i++) {
          p *= arguments[i];
      }
      return p;
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
