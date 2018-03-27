// Do not change any of the function names

function getBiggest(x, y) {
  return Math.max(x,y);
}

function greeting(language) {
  if (language === 'German'){
    return 'Guten Tag!';
  } else if (language === 'Mandarin'){
    return 'Ni Hao!';
  } else if (language === 'Spanish'){
    return 'Hola!';
  } else {
    return 'Hello!';
  }
 
}

function isTenOrFive(num) {
  if (num === 10 || num === 5 ){
  return true;
  } else {
    return false;
  }
}

function isInRange(num) {
  if (num > 20 && num < 50){
    return true;
  } else {
    return false;
  }
}

function isInteger(num) {
  if (Math.floor(num) === num){
     return true;
  } else {
    return false;
  }
}

function fizzBuzz(num) {
  if(num % 3 === 0 && num % 5 !== 0){
    return 'fizz';
  } else if (num % 5 === 0 && num % 3 !== 0){
    return 'buzz';
  } else if (num % 3 === 0 && num % 5 === 0){
    return 'fizzbuzz';
  } else {
    return num;
  }
}

function isPrime(num) {
  if (num === 0 || num === 1){
    return false;
  }else if (num === 2){
   return true;
 } else {
     for ( let i =2 ; i <= Math.sqrt(num); i++){
       if (num % i === 0){
       return false;
     } else {
       return true;
     }
   }
  }
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
