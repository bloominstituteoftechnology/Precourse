// Do not change any of the function names

function multiplyArguments() {
   let product = 1;
   if (arguments.length === 0) {
      return (0);
   }
   for (let i = 0; i < arguments.length; i++) {
      product = product * arguments[i];
   }
   return (product);
}

function getBiggest(x, y) {
   if (x > y) {
      return (x);
   } if (y > x) {
      return (y);
   } else if (x ===y) {
      return (x || y);
   }
   
}

function greeting(language) {
   if (language === 'German') {
      return ('Guten Tag!');
   } if (language === 'English') {
      return ('Hello!');
   } if (language === 'Spanish') {
      return ('Hola!');
   } else {
      return ('Hello!');
   }
}
  
function isTenOrFive(num) {
   if (num === 10 || num === 5) {
      return (true);
   } else {
      return (false);
   }
}

function isInRange(num) {
   if (num < 50 && num > 20) {
      return (true);
   } else {
      return (false);
   }
}

function isInteger(num) {
   if (num >= 1) {
      return (true);
   } if (num <= -1) {
      return (true);
   } if (num === 0) {
      return (true);
   } else {
      return (false);
   }
}

function fizzBuzz(num) {
   if (num % 3 === 0 && num % 5 === 0) {
          return ('fizzbuzz');
       } else if (num % 5 === 0) {
          return ('buzz');
       } else if (num % 3 === 0) {
       return ('fizz');
       } else {
          return (num);
       }
}

function isPrime(num) {
   if (num <1 || num === 1) {
      return (false);
   } else if (num === 2) {
      return (true);
   } else {
      for (let x = 2; x < num; x++) {
         if (num % x === 0) {
            return (false);
         }
      }
      return (true);
   }
}



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
