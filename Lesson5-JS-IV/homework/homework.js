// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let product = 1;
  if (arguments.length === 0) {
    return 0;
  } 
  if (arguments.length === 1) {
    return arguments[0];
  }
  for (let i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }
return product;
}

// on Ben's screen during the answers walk-through:
// return args.reduce((memo, num) => memo * num);

function invokeCallback(cb) {
  // invoke cb
  cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  cb(sum);
}
// cb(numbers.reduce((memo, num) => memo + num));

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

// Eventually use this format: arr.foreach((){}); 

// For each iterates over the array but doesn't save the values anywhere.
// Map saves stuff.

/* 
this is also a solution: 
arr.forEach(function (value) {
  cb(value);
}
*/

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  // 
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = cb(arr[i]);
  }
  return newArr;
}
/* 
this is also a solution: 
let newArr = arr.map(cb);
return newArr;
*/

  // create a class constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor

function createUserClass() {
  class User {
    constructor(options) {
      this.username = options.username;
      this.name = options.name;
      this.email = options.email;
      this.password = options.password;   
    }
    sayHi() {
      return 'Hello, my name is {{name}}';
    }
  }
  return User;
}
// Future: use ${this.name} instead of {{name}}.
// Need to use backticks with the ${} syntax.

/* 
----- my notes below -----
 this is a new thing with ES6. "syntactic sugar"?
 to use the class: const user1 = new User('LovesCats27', 'Jen', jen@email.com', 'bestpassword!')
 ^^ that's to use the new class the way it was created in the lesson. for the hw version, just pass it an object.
 to use the method: user1.sayHi();
*/


function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = function() {
    return 'Hello World!';
  };
}

/*
Using "fat arrow function". This is (basically) the same as what I have above in the function. 
http://babeljs.io/learn-es2015/#arrows-and-lexical-this

Constructor.prototype.sayHi = () => 'Hello World';
*/

// !! This is the end of the homework exercises !!

// !! ------------------ !! 
/* The following exercises are extra credit, they are not required as part of the homework. In order to solve these problems you will need to independantly study the concepts of Closure, and Recursion. There are links in the main README file to strt you on your journey.

If you want to attempt these exercises, you will need to access the test.js file in the tests folder, and uncomment the tests pertaining to the exercise you are attempting. Good luck! */


function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  String.prototype.reverse = function() {
    let newStr = this.slice(this.length - 1);
    for (let i = this.length - 2; i >= 0; i--) {
        newStr = newStr + this.slice(i, i+1);
      }
    return newStr;
    }; // end of method
  }

 function nFactorial(n) {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  // factortial n = n * n-1 * n-2 * n-3, etc. until we reach zero. which would be n-n. 
 
  if (n < 0) {  
      return -1;  
  } else if (n === 0) {  
      return 1;  
  } else {
    return n * nFactorial(n-1);
  } 
 }

 // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again

function cacheFunction(cb) {
  let results = {};
  function innerFunc(arg) {
    if (results[arg] === undefined) {
      results[arg] = cb(arg);
    } 
    return results[arg]; 
  }  
  return innerFunc;
}

/* 
For testing in the console. The cache function seems to work, 
but fails one of the tests. No one will answer any questions
about it on Slack, so giving up for now. 

var cb = function(x) {
  console.log(`new calc with ${x}`);
  return x * 2;
};

var jen = cacheFunction(cb);



 */
/*
Reference: Ways to use functions.

// function delcared by itself
// this is a named function
function bar() {
  console.log('hi');
};

// function assigned to variable
// this is an anonymous function
const foo = function() {
  console.log('hi');
};

// function in an object (called a method in this case)
const obj = {
  foo: function() {
    console.log('hi');
  },
};

// function declared in an element of an array
const functions = [
  function() {
    console.log('hi');
  },
];

bar();
foo();
obj.foo();
functions[0]();
*/

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  createUserClass: createUserClass,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
