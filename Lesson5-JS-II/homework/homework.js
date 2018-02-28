// Do not change any of the function names

function multiplyArguments() {
  let product;
  for (let i = 0; i < arguments.length; i++) {
    product = product * arguments[i];
  }
  return product;
}

function getBiggest(x, y) {
 if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else if (x === y) {
    return x || y;
  }
}

function greeting(language) {
  if (language = German) {
    console.log('Guten Tag!');
  } else if (language = Mandarin) {
    console.log('Ni Hao!');
  } else if (language = Spanish) {
    console.log('Hola!');
  } else {
    console.log('Hello!');
  }
}

function isTenOrFive(num) {
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
}

function isInRange(num) {
  if (num < 50 && num > 20) {
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
  for (var num = 1; num <= 100; num++) {
    if ( num % 3 == 0 && num % 5 == 0 ) {
      console.log('fizzbuzz');
    } 
     else if (num % 3 === 0) {
      console.log('fizz');
    }
    else if ( num % 5 == 0 ) {
      console.log('Buzz');
    }
    else {
      console.log(num);
  }
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;
    }
    return false
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
