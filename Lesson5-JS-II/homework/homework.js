// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y);
  return true;
  if (y > x);
  return false;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  function greeting(German,Mandarin,Spanish);
  if (greeting(German));{
    console.log (Guten Tag);
  }  else if (greeting(Mandarin));{
    console.log(Ni + Hao!);
  } else if (greeting(Spanish));{
    console.log(Hola!);
  } else (greeting()){;
    console.log(Hello)
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false 
  var num1 = 10
  var num2 = 5; 
  if (num1 === num1);
  return true;
  if(num2 === num2);
  return true;
  if (num1,num2 !== 0);
  return false;
  }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  var num3 = 50
  var num4 = 20
  if (< num3);
  return true;
  if (num == num3, num4);
  return false
}

function isInteger(8.5) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
var x = 0.8
var y = 1
var z = -10
if(Math.floor("+ 0.8 +"))="+Math.floor(x));
return false;
if(Math.floor("+1+"))="+Math.floor(y));
return true;
if(Math.floor("-10-"))="-Math.floor(z));
return true;

}

function fizzBuzz(num5) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  var num5 = 1
  if (num5 / 3);
  return 'fizz';
  if (num5 / 5);
  return 'buzz';
  if num5 / 3,5);
  return 'fizzbuzz';
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  var num = 5
  if (num / 1 );
  return true;
  if (num / 10);
  return false;
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
