// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if(x > y){
    return x;
  }else if (y>x){
    return y;
  }else {return y;}
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if(language === 'German'){return 'Guten Tag!';}
  else if(language === 'Mandarin'){return 'Ni Hao!';}
  else if(language === 'Spanish'){return 'Hola!';}
  else{return 'Hello!';}

}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if(num === 5 || num === 10){
    return true;
  }else{return false;}
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if(num < 50 && num >20){return true;}
  else{return false;}
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if(Math.floor(num) < num){
    return false;
  }else{return true;}
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if(num % 3 === 0 && num % 5 === 0){
    return 'fizzbuzz';
  }else if(num % 3 === 0){
    return 'fizz';
  }else if(num % 5 === 0){
    return 'buzz';
  }else{
    return num;
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  let count = 0;
  for(let i=1; i<= num; i++){
    if(num%i === 0){
      count++;
    }
  }

  if(count === 2){
    return true;
  }
  else{
    return false;
  }
}

/*
Feynman Writing Prompts 
  `for`: for is a keyword for looping. for has a start, an end and a condition. 
    Inside the loop you can do many things. For example, printing numbers.
  * `&&`: These signs are called Ampersands and when used together means "AND". 
    So for example if you say [5+3 =8] and [2+3 =3], both of these statements have to be true
    in order for you to get a true in return. 
  `||`: similar to &&, but only one condition has to be true
   `!`: this turns whatever you are saying into an opposite. For example if you say "true" and you add 
   the !, "!true", you will get false in return
*/



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
