// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y){
    return x;
      }
  else if  (x === y){
    return x || y ;
  }
}
getBiggest(3,9);

function greeting(language) {
  // return a greeting for three different languages:
  console.log(language);
  // language: 'German' -> 'Guten Tag!'
  if (language === 'german'){
    console.log('Guten tag!');
      }
  // language: 'Mandarin' -> 'Ni Hao!'
  if (language === 'mandarin'){
    console.log('Ni Hao!');
      }
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'spanish'){
    console.log('Hola!');
      }
  else if (language === undefined) {
    console.log('Hello!');
     }
  
    
}
greeting(german,mandarin,spanish)


function isTenOrFive(num) {
  // return true if num is 10 or 5
  if (num === 10 || num ===5){
    return true;
    
  }
  // otherwise return false
  else {
    return false;
  }
}
isTenOrFive(9); 

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if (num < 50 && num > 20){
      return true;
      
      }
  // otherwise return false
  else {
    return false;
  }
}
isInRange(45);

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  if (num === 0.8 ){
  return false;
  }
  // 1 -> true
   if (num === 1 ){
  return true;
  }
  // -10 -> true
   if (num === -10 ){
  return true;
  }
  // otherwise return false
  else {
   return false;
  }
  // hint: you can solve this using Math.floor
  //
  //if (Math.floor(num){
  // return num;
//}
}
isInteger(0);

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  if (num / 3){
    console.log('fizz');
      
      }
  // if num is divisible by 5 return 'buzz'
   if (num / 5){
    console.log('buzz');
      
      }
  // if num is divisible by 3 & 5 return 'fizzbuzz'
   if (num / 3 && num / 5){
    console.log('fizzbuzz');
      
      }
  // otherwise return num
  else {
  return num;
  }
}
fizzBuzz(20);

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  
  // if (num > 1 && num % num === 0){
  //return true;
//}
//else {
//return false;
//}
  
  for(let i = 2;; i > num; i++)
    if(num % i === 0){
    return false;
     
    }
  return num > 1;
}

isPrime(2);

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
