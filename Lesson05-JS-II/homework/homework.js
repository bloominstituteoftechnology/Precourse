// use the arguments keyword to multiply all of the arguments together and return the product
// if no arguments are passed in return 0
// if one argument is passed in just return it
+
}

+
function getBiggest(x, y) {
// x and y are integers.  Return the larger integer
 // if they are the same return either one
+  if (x > y) {
+    return x;
+  } else if (x < y) {
+    return y;
+  } else if (x === y) {
+    return y;
+   }
   }

function greeting(language) {

// language: 'Mandarin' -> 'Ni Hao!'
// language: 'Spanish' -> 'Hola!'
// if language is undefined return 'Hello!'
+
+
+ if (language === 'Mandarin') {
     return 'Ni Hao!';
+ } else if (language === 'Spanish') {
     return 'Hola!':
+ } else {
+   return 'Hello!';
+ }
 }

function isTenOrFive(num) {
// return true if num is 10 or 5
// otherwise return false
+if (num === 10 || num === 5) {
+  return true;
+} else {
+ return false;
+}
+
 }

function isInRange(num) {
   // return true if num is less than 50 and greater than 20
  // otherwise return false
+ if (num < 50 && num > 20) {
+  return true;
+ } else {
+   return false;
+ }
  }

function isInteger(num) {


  // -10 -> true
 // otherwise return false
 // hint: you can solve this using Math.floor
+ if (num === Math.floor(num) ) {
+   return true;
+ } else {
+  return false;
+ }
 }

function fizzBuzz(num) {
   // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
+
+ if (num % 3 === 0 && num % 5 === 0) {
+   return 'fizzbuzz';
+ } else if (num % 3 === 0) {
+   return 'fizz'
+ } else if (num % 5 === 0) {
+   return 'buzz'
+ } else {
+   return num;
+}
+
 }


function isPrime(num) {

   // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
 // note: 0 and 1 are NOT considered prime numbers
+
+ if (num < 1 || num === 1) {
+     return false;
+ }
+   else if (num === 2) {
+   return true;
+  } else {
+    for (var x = 2; x < num; x++) {
+// num 3; 2 < 3 = true; 2 + 1 = 3; 3 % 3 = 0;
+
+   if (num % x === 0) {
+     return false;
+ }
+ }
+     return true;
+ }
 }



+
 // Do not modify code below this line.
// --------------------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
