```js
function greeting() {
  console.log("Hello there!");
}

function callbackExample(cb) {
  console.log('This is callback example');
  cb(); //cb refers to the function in the cb argument
}

callbackExample(greeting);
// Don't put () in the argument. The callbackExample function will call the callback some time in the function's execution. It's not called in the function's argument.
```
======

```js
const out = (instruction) => console.log(instruction);

function compliment(name) {
    out(`You're just a wonderful human, ${name}!`);
}

function neutralComment(name) {
    out(`You're ok I guess, ${name}`);
}

function insult(name) {
    out(`You smell like you haven't showered in weeks, ${name}`);
}

function giveFeedback(name, cb) {
  cb(name);
}

giveFeedback('George', insult); // "You smell like you haven't showered in weeks, George"
giveFeedback('Alice', compliment); // "You're just a wonderful human, Alice!"
```

In the above JS snippet, you can see how versatile callback functions can be.  You can also put the function directly into the argument instead of declaring the function beforehand.

Notice that the above three functions above `giveFeedback()` are of the same form; that is, each function has one input, `name`, all of them has a `console.log()`, and none of them has a returnable output. For the callback function to work effectively, the functions it can call back should have the same form. Otherwise, things might get weird (e.g. numbers being passed into a callback function that's expecting strings).

```js
// Same form functions: input 1 number, output 1 number.
const increment = number => number + 1;
const triple    = number => number * 3;
const half      = number => number / 2;
// This form is different: input 2 numbers, output 1 number. Using this with the below callback function will result in NaN.
const add       = (x, y) => x + y;


function doMath(number, callback) {
    console.log(`We're doing math!`);
    return callback(number);
}
```
```js
const numbers = [1, 6, 3, 8, 3, 9];

const triple = number => number * 3;

// For loop way
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


// We can use callback functions to use higher-order methods on arrays.

// For Each way. The cb function is called for each index in the array

numbers.forEach(item => console.log(item));

// array.map creates a new array

numbers.map(function(item) {
  return -item;
});  // Outputs array filled with negative versions
// The old array is untouched.

const newArray = numbers.map(triple);
console.log(newArray);

// array.reduce combines all the values in the array into something new (a single output).
// For loop way
let sumSoFar = 0;
for (let i = 0; i < numbers.length; i++) {
  sumSoFar += numbers[i];
}

const sum = sumSoFar;
console.log('Final Result', sum);

// array.reduce way

sumB = numbers.reduce((accum, item) => accum + item);
console.log('Final Result', sumB);

// Notice reduce requires two arguments: the accumulator and the element of the array

// Multiply all the numbers
sumC = numbers.reduce((accum, item) => accum * item);
console.log('Final Result', sumC);


// Return the largest value
sumC = numbers.reduce((accum, item) => Math.max(accum, item));
console.log('Final Result', sumC);

// Remember that you can set the value of the accumulator if necessary. You put a comma after the callback function, and then the value.
```
