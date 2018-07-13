// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let multiple = arguments[0];
  if (arguments.length === 0) {
    return 0;
  } else {
    for (let i=1; i<arguments.length; i++){
      multiple = multiple * arguments[i];
    }
    return multiple;
  }
  
}
//multiplyArguments();

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x < y){
    return y;
  }else {
    return x;
  }
}
//getBiggest(-2,-2);

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'German'){
    return 'Guten Tag!' ;
  } else if (language === 'Mandarin') {
    return 'Ni Hao!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
}
//greeting('German');

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  let TenOrFive = (num === 10 || num === 5);
  return TenOrFive;
}
//isTenOrFive(0);

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  let InRange = (num<50 && num>20);
  return InRange;
}
//isInRange(21);

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  let floorVSnum = (num === Math.floor(num));
  return floorVSnum;

}
//isInteger(1.3);

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0){
    return 'fizz';
  } else if (num % 5 === 0){
    return 'buzz';
  } else {
    return num;
  }
}
//fizzBuzz(7);

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  let primeIsTrue = false;
  if (num>1){
    primeIsTrue = true;
    let i=num-1;
      while (i>1 && primeIsTrue === true){
        primeIsTrue = (num % i !== 0) ;
        i--;
      }
  }
  return primeIsTrue;
}
//isPrime(31);


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