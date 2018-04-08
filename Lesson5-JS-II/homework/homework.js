// Do not change any of the function names

function multiplyArguments(num) {
  for (let i = 0; i < arguments.length; i++){
      num = num * arguments[i];
    }
      return num;
    }
      multiplyArguments(null);
      
// use the arguments keyword to multiply all of the arguments together and return the product
// if no arguments are passed in return 0
// if one argument is passed in just return it



function getBiggest(x, y) {
  if(x >= y) {
    return x;
  } else {
    return y;
  }
  }
    getBiggest(11,11);
  
  // x and y are integers.  Return the larger integer
  // if they are the same return either one




  
function greeting(language) {
  
    if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'Guten Tag') {
    return 'German';
  } else if (language === 'Mandarin') {
    return 'Ni Hao!';
  } else if (language === 'Ni Hao') {
    return 'Mandarin'; 
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else if (language === 'Hola') {
    return 'Spanish'; 
  } else if (language === 'French') {
    return 'Bonjour!';
  } else if (language === 'Bonjour') {
    return 'French'; 
  } else if (language === 'Italian') {
    return 'Bonjourno!';
  } else if (language === 'Bonjourno') {
    return 'Italian';
  } else if (language === 'Portuguese') {
    return 'Bom Gia!';
  } else if (language === 'Bom Gia') {
    return 'Portuguese';
  } else if (language === 'Hello') {
    return 'English';
  } else {
    return 'Hello!';
  }
  }   greeting('Ni Hao');
       
//THIS ALSO WORKS IF THE GREETING IS INPUT. THE RETURN IDENTIFIES THE LANGUAGE USED IN THE GREETING//
    //ITALIAN, PORTUGUESE AND FRENCH TOO//
    // this module also functions as a language identifier..
    // returns a greeting for 7 different languages:
    // language: 'German' -> 'Guten Tag!'
    // language: 'Mandarin' -> 'Ni Hao!'
    // language: 'Spanish' -> 'Hola!'
    // language: 'Italian' -> 'Bonjourno!'
    // language: 'French' -> 'Bonjour!'
    // language: 'Portuguese' -> 'Bom Gia!'
    // if language is undefined return 'Hello!'





    function isTenOrFive(num) {
      if (num === 5 || num === 10) { 
      return true;
    } else {
      return false;
    }
    }
      isTenOrFive(4);





function isInRange(num) {
    if(num > 20 && num < 50){
    return true;
  } else 
    return false;
  } 
    isInRange(20.1);
  
  // return true if num is less than 50 and greater than 20
  // otherwise return false





  function isInteger(num) {
    if(Math.floor(num) - num === 0) {
    return true;
  } else 
    return false;
  } 
    isInteger(100); 
  
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor




  function fizzBuzz(num) {
    if(num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz';
    } else if(num % 5 === 0) {
      return 'buzz';
    } else if(num % 3 === 0) {
      return 'fizz';
    } else
      return num;
    }
      fizzBuzz(60);
  
    // if num is divisible by 3 return 'fizz'
    // if num is divisible by 5 return 'buzz'
    // if num is divisible by 3 & 5 return 'fizzbuzz'
    // otherwise return num





    function isPrime(value) {
      for(var i = 2; i < value; i++) {
          if(value % i === 0) {
              return false;
          }
          }
              return value > 1;
          }
              isPrime(17);
    
    // return true if num is prime.
    // otherwise return false
    // hint: a prime number is only evenly divisible by itself and 1
    // hint2: you can solve this using a for loop
    // note: 0 and 1 are NOT considered prime numbers



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
