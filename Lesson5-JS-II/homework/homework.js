// Do not change any of the function names

function multiplyArguments() {
  let sum = 1;
  if (arguments.length === 0) {         // use the arguments keyword to multiply all of the arguments together and return the product
    return 0;                           // if no arguments are passed in return 0
   }                                    // if one argument is passed in just return it
   else if (arguments.length === 1) {
     let i = 0;                          // *** Note this works but i dont like it *** //
     sum = sum * arguments[i];
     return sum;
   }
   else {
     for(let i = 0; i < arguments.length; i++){
      sum = sum * arguments[i];
    }
    return sum;
   }
  }

function getBiggest(x, y) {
  if (x === y) {                              // x and y are integers.  Return the larger integer
    return x;
    }
    else if (x > y) {                         // if they are the same return either one
      return x;
    }
    else {
      return y;
    }
  }
   

function greeting(language) {
  if (language === 'German') {                // return a greeting for three different languages:
     return 'Guten Tag!';                     // language: 'German' -> 'Guten Tag!'
   }                                          // language: 'Mandarin' -> 'Ni Hao!'
   else if (language === 'Mandarin') {        // language: 'Spanish' -> 'Hola!'
    return 'Ni Hao!';                         // if language is undefined return 'Hello!'
   }
   else if (language === 'Spanish') {
     return 'Hola!';
   }
   else {
    return 'Hello!';
   }
 }

function isTenOrFive(num) {
  if (num === 10 || num === 5) {              // return true if num is 10 or 5
   return true;                               // otherwise return false
  }
  else {
     return false;
   }
  }

 function isInRange(num) {
   if (num < 50 && num > 20) {                // return true if num is less than 50 and greater than 20
     return true;                             // otherwise return false
   }
   else {
    return false;
  }  
}

function isInteger(num) {
  if (num === 0) {
    return true;
  }
  else if (Math.floor(num) === 0) {           // return true if num is an integer
    return false;                             // 0.8 -> false
  }                                           // 1 -> true
  else {                                      // -10 -> true
    return true;                              // otherwise return false
  }                                           // hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  let threeFlag = (num % 3);
  let fiveFlag = (num % 5);
  if (threeFlag === 0 && fiveFlag === 0) {    // if num is divisible by 3 return 'fizz'
    return 'fizzbuzz';                        // if num is divisible by 5 return 'buzz'
  }                                           // if num is divisible by 3 & 5 return 'fizzbuzz'
  else if (threeFlag === 0) {                 // otherwise return num
    return 'fizz';
  }
  else if (fiveFlag === 0) {                             
    return 'buzz';
  }
  else {
    return num;
  }
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {             // return true if num is prime.
   if (num % i === 0) {                        // otherwise return false
     return false;                            // hint: a prime number is only evenly divisible by itself and 1
   }                                          // hint2: you can solve this using a for loop
  }                                           // note: 0 and 1 are NOT considered prime numbers
  return num > 1;
 }
 


// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
