// Do not change any of the function names

function getBiggest(x, y) {
  if (x >= y){
      return(x);
    }else{
      return (y);
    }
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language == 'German'){
    return('Guten Tag!');
  }else if (language == 'Mandarin'){
    return('Ni Hao!');
  }else if (language =='Spanish'){
    return('Hola!');
  }else{
    return('Hello!');}
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num == 5 || num ==10){
    return(true);
  }else {
    return(false);
  }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if (num < 50 && num > 20){
    return(true);
  }else{
    return(false);
  }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (Number.isInteger(num)){
    return(true);
  }else{
    return(false);
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if(Number.isInteger(num/3) && Number.isInteger(num/5)){
    return('fizzbuzz');
  }else if (Number.isInteger(num/5)){
    return('buzz');
  }else if(Number.isInteger(num/3)){
    return('fizz');
  }else {
    return(num);
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num < 2) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;
  for (let i = 3; i * i <= num; i += 2)
      if (num % i == 0) return false;
  return true;
  
}



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
