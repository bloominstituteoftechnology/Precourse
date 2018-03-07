// Do not change any of the function names

function multiplyArguments() {
  
  if ( arguments.length === 0){
    return 0;
  } 
  //this code checks the length of arguments and sees that no arguments have been passed so it returns 0
  else { 
    var product = 1;
    //declaring the product variable for the upcoming loop. the product will be what's displayed by the return statement
    for (var i = 0; i < arguments.length; i++){
      product = product * arguments[i];
      
    } return product;
      //checks position with value of i and multiplies products crurent value by the integer in that position, then returns it outside of the loop as to not end it after the first iteration
  }
  
}                                                                                                                                                                                                                                                                       

=======
function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
    if(x > y){
        return x;
    }
    
    else if(x < y){
        return y;
    }
    
    else          {
        return y;
    }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
    if (language === 'German'){
        return 'Guten Tag!';
        
        }
    
    else if (language === 'English'){
        return 'Hello!';
        
        }

    else if (language === 'Spanish'){
        return 'Hola!';
        
        }
    
    else { 
        return 'Hello!';
        
        }
        
}


function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
    if((num === 5) || (num === 10)){
        return true;
    }
    else {
        return false;
    }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
    if((num < 50) && (num > 20)){
        return true;    
       
    }
    
    else {
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
      
    
    if (num % 1 === 0){
    return true;
    
  }

    return false;

}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
    if(num % 3 === 0){
        return 'fizz';
    }
    
    else if(num % 5 === 0){
        return 'buzz';
    }
    
    else if((num % 3 === 0) && (num % 5 === 0)){
        return 'fizzbuzz';
    }
    
    else{
        return num;
    }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
    var isPrime = true;
    var p = 2
    for (p; P <= Math.sqrt ;p++){
        if (num % p === 0){
            
            isPrime = false;
            break;
            
        }
    }
} return isPrime;




// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
