// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
arr = [1,2,3,4,5,6,7,8];
  return arr[0];
}



function returnLast(arr) {
  // return the last item of the array
arr = [1,2,3,4,5,6,7,8];
  return arr[arr.length - 1];
}



function getArrayLength(arr) {
  // return the length of the array
arr = [1,2,3,4,5,6,7,8];
  return arr.length;
}


function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  
  for (let i=0; i < arr.length; ++i) {
   arr[i]+-1;
  }
 return(arr);
}



function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array

arr = [1,2,3,4,5,6,7,8];
  arr.push(9);

return(arr);

}


function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr = [2,3,4,5,6,7,8];
  arr.unshift(1);

return(arr);

}



function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  
  let string1, string2, string3, stringConcatenated;
  string1='LambdaSchool ';
  string2='JavaScript ';
  string3='Class ';
  
  stringConcatenated = string1 + string2 + string3;
  document.write (stringConcatenated);
     /*
     let string=[0];
     for (let i=0; i<string.length; i++);
     */
    
    return stringConcatenated;
}


function contains(arr, item) {
 // check to see if item is inside of arr
 // return true if it is, otherwise return false
[1,2,3,4,5,6,7,8];
 for (let i=0; i<arr.length; i++) {
  if (arr[i]===item) {
    return true;
  }
  else {
    return false;
  }
} 
}


function addNumbers(array) {
  // numbers is an array of integers.
  // add all of the integers and return the value
    for (
    var
      index = 0,              // The iterator
      length = array.length,  // Cache the array length
      sum = 0;                // The total amount
      index < length;         // The "for"-loop condition
      sum += array[index++]   // Add number on each iteration
  );
  return sum;
}



function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average

  let total = 0;
  for (let i= 0; i< testScores.length; i++) {
      total += testScores[i];
  }
let avg = total / testScores.length;
return avg;
}




function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let largest=0;
  
  for (let i=0;i < numbers.length; i++) { 
    if(numbers[i] > largest) {
    largest= numbers[i];
    }
    
    } 
    return largest;
  }



function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it

//use arguments keyword to multiply all arguments
let product = 1;  

  //iterate over the array and determine the arguments to be multiplied
  for (let i=0; i<arguments.length; i++) {
    product *= arguments[i];
  }
  //if only one argument is passed in, return that argument
  if(arguments.length === 1) {
    return arguments;
  }
  //if no arguments are passed in, return 0
  else if(arguments.length === 0) {
    return 0;
}
  //if all of the above fail, return the product of all the arguments
  else {
               
  return product;  
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
