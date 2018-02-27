// Do not change any of the function names

function multiplyArguments() {
    if (arguments.length === 1) {
      return 1;
    }
    else if (arguments.length === 0) {
      return 0;
    }
    else if (arguments.length >= 2) {
    let product = 1;
    }
    for (i=0; i<arguments.length; i++) {
    let product = product*argument[i];
    return product;
    }
}

function getBiggest(x, y) {
  if (x===y) {
    return x
  }
  else if (x>y) {
    return x;
  }
  return y;
}

function greeting(language) {
  if (language === 'German' || 'german'){
    return 'Guten Tag!';
  }
  else if (language === 'Mandarin' || 'mandarin'){
    return 'Ni Hao!';
  }
  else if (language === 'Spanish' || 'spanish'){
    return 'Hola!';
  }
  return 'Hello'
}

function isTenOrFive(num) {
  if (num === 5 || 10) {
    return true;
  }
    return false;
}

function isInRange(num) {
  if (num>20 && num<50){
    return true;
  }
    return false;
}

function isInteger(num) {
  if (Math.floor(num) === num) {
    return true;
  }
    return false;
}

function fizzBuzz(num) {
  if (num%3 === 0){
    return 'fizz';
  }
  else if (num%5 === 0){
    return 'buzz';
  }
  else if ( num%3 === 0 && num%5 === 0){
    return 'fizzbuzz';
  }
    return num;
    
}

function isPrime(num) {
  for (i=2; i<num; i++){
    if(num % i === 0){
     return false;
    }
    return true;
  }

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
