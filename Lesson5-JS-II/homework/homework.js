// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  for(let i = 0; i <= arguments.length; i++) {
    if(arguments[i] > 0){
  
       return arguments[i] * arguments[i];
  
      }
  
      else if(arguments.length === 0){
  
          return arguments.length;
      }
  
    }  
  }
  
  multiplyArguments();
  
  
  
  

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if ( x > y){
    console.log("x is biggest");
  
}if (x < y){
  console.log("y is biggest");
  
}if(x===y){
  console.log("they are the same");
}
}
getBiggest(12,11);
        


  function greeting(language) {
    // return a greeting for three different languages:
    // language: 'German' -> 'Guten Tag!'
    // language: 'English' -> 'Hello!'
    // language: 'Spanish' -> 'Hola!'
    // if language is undefined return 'Hello!
    if (true) {
      console.log('German ==== Guten Tag!');
  } else if (true) {
      console.log('Hello!');
  } else if (true) {
      console.log('Hola!');
  }
  }
  greeting();




function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10) {
    return( 'true!');
}if (num === 5){
   console.log(true);
} else  {
  return(false);
}
}
 isTenOrFive(11);

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if (num < 50){
    
    return (true);
  }
    if (num < 20){
      
      return(true);

    } else{
      return (false);
    }
  }

isInRange(61);

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (num === 1){
    console.log(true);
  }if (num === 0.8){
    console.log(false);
  }if (num === -10){
    console.log(true);
  }else {
    console.log(false);
  }
   }      
          
       isInteger(0.8); 


function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  function fizzy(n) {
    if (n % 15 === 0) {
      return "FizzBuzz";
    }
    if (n % 3 === 0) {
      return "Fizz";
    }
    if (n % 5 === 0) {
      return "Buzz";
    }
    return n.toString();
  }
  
  for (let i = 1; i <= 20; i++) {
    console.log(fizzy(i));
  }
}
fizzBuzz();

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers

    if (num === 2) {
      return true;
          }
    else if(num > 1){
      
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }
  
  console.log(isPrime(121));


// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
};
