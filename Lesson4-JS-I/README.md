# Lesson 4: Introduction to Javascript
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Introduction to Javascript
* Variables
* Strings, Numbers, and Booleans
* Math
* Introduction to Functions
* Control Flow and Comparison Operators
* Introduction to Node and NPM

## Introduction to Javascript

 If we imagine a web page as a house, the HTML makes up the materials (wood, brick, and concrete), CSS is how we put all of those materials together, and Javascript is the electricity, plumbing and gas. It's what makes the web page "run". Javascript was originally designed to be used purely on the front end as a way for web developers to add functionality to their web pages, and in its early days it did just that. Recently, the introduction of the "V8 engine" by Google has improved the speed and functionality of JS. That led to the development and release of exciting new front-end Javascript frameworks and eventually Node.js, a way to run Javascript on a server (back-end). This new development has led to a resurgence of Javascript. Javascript is one of the world's most widely used programming languages. We now find Javascript used on front-end, back-end, mobile development, IoT, and really anywhere a traditional programming language would be used. Recently, the newest version of the Javascript language was released (ES6), we will be focusing on and using ES6 in this course, and in the Lambda School full CS course. Keep in mind, Javascript != Java. Although they share similar names (this was, unfortunately, considered a feature by Javascript's early pioneers) that is where the similarities end.

## Variables

At the heart of Javascript are variables. A variable is a way to store the value of something to use later. (A note for those with previous programming knowledge: Javascript is a loosely typed language, a variable can be set (and reset) to any type, we do not need to declare its type when initiating the variable.)

The anatomy of a variable is first the keyword, a space, the name we are giving the variable, an equal sign, the value we are assigning the variable and then the semi-colon.

There are three ways to declare a variable.
```javascript
    var firstName = 'John';
    let lastName = 'Smith';
    const favoriteFood = 'Taco';
```

### var

`var` is the ES5 way of declaring a variable. This is a generic variable keyword.

### let

`let` is a new ES6 variable keyword, this will assign a variable much like `var`, but with a little bit different behavior. Most notably, it differs by creating "block level scope".

### const

`const` is also new in ES6. A `const` is a variable that will not be able to be changed. This is short for "constant".

### console.log

Another concept we will talk about right away is 

```javascript
    console.log();
```

This very simple method will allow us to print to the console anything we put between the parentheses.

## Strings, Numbers, and Booleans

These are the most basic data types in Javascript. 

### Strings

Strings are blocks of text, they will always be defined with quotation marks around them, either single or double. Any text with quotes around it is a string. 

```javascript
    const dog = 'fido';
```
### Numbers

Numbers are just that, numbers. Numbers do NOT have quotes around them. They can be negative as well. Javascript does have a limitation on the size of a number (+/- 9007199254740991), but only very rarely will that limitation come up. 

```javascript
    const answer = 42;
    const negative = -13;
```

### Boolean

Booleans come from low level computer science. It is a concept that powers binary code and the very core of computers. You may have seen binary code in the past (0001 0110...), this is boolean logic. It essentially means you have two choices, on or off, 0 or 1, true of false. In Javascript we use Booleans to mean true or false. This may seem simple at first but can get complicated later on.

```javascript
    const iLoveJavascript = true;
```

## Math

Math operators work in javascript just as they would on your calculator.

### + - * / =

```javascript
    1 + 1 = 2
    2 * 2 = 4
    2 - 2 = 0
    2 / 2 = 1
```

### %

Something you may not have seen before is the Modulo (`%`), this math operator will divide the two numbers and return the remainder.

```javascript
    21 % 5 = 1;
    21 % 6 = 3;
    21 % 7 = 0;
```

## Global objects and methods

Javascript has a number of built in objects for us to use. We have already seen, and have been using, the console object and it's method `log`. Another one of these objects is `Math`. `Math` has a number of methods on it just like `console` has `log`. To add to this, some of our data types also have built in methods.

### Math.pow

We can use the `pow` method on `Math` to return a number risen to an exponent. It will take two numbers.

```javascript
    Math.pow(2,2) = 4;
    Math.pow(3,2) = 9;
    Math.pow(3,3) = 27;
```

### Math.round , Math.floor, Math.ceil

`Math` also has methods that will round numbers for us. `.round` will round a number to the nearest whole number. `.floor` will always round a number down to the nearest whole number. `.ceil` will always round up to the nearest whole number. 

```javascript
    Math.round(6.5) = 7;
    Math.round(6.45) = 6;
    Math.floor(6.999) = 6;
    Math.ceil(6.0001) = 7;
```

### .length

The string data type has a built in method called `.length` . Any string we call this on will return the amount of characters in that string.

```javascript
    const cat = 'kitty';
    console.log(cat.length); // 5
```

We will see many other built it in methods on other data types throughout this course. 

## Introduction to Functions

Now that we have variables set we need functions to compute them, change them, do something with them. There are three ways we can build a function.

```javascript
    function myFunc() {}
    const anotherFunc = function () {};
    const yetAnother = () => {};
```

We will be using the first way in this lesson, and talk about the other ways in future lessons. 

### Anatomy of a Function

```javascript
    function myFunc() {}
```

A function will start with the `function` keyword, this tells whatever is running your program that what follows is a function and to treat it as such. After that comes the name of the function, we like to give functions names that describe what they do. Then comes an open and a close parentheses. And finally, open and close brackets. In between these brackets is where all of our function code will go.

```javascript
    function logsHello() {
        console.log('hello');
    }

    logsHello();
```

In this example we declare a function `logsHello` and we set it up to `console.log` `'hello'`. We can then see in order to run this function, we need to write the name and parentheses. This is the syntax to run a function. A function always needs parentheses to run.

### Arguments

Now that we can run a basic function, we are going to start passing it arguments. 

```javascript
    function logsHello(name) {
        console.log('Hello, ' + name);
    }

    logsHello('Dan');
```

If we add a variable to the parentheses when we declare the function we can use this variable within our function. We initiate the value of this variable by passing it into the function when we call it. So in this case `name = 'Dan'`. We can pass other variables into this as well:

```javascript
    function logsHello(name) {
        console.log( `Hello, ${name}`);
    }

    const myName = 'Dan';
    logsHello(myName);
```

We can add multiple arguments by placing a comma in between them:

```javascript
    function addsTwoNumbers(a, b) {
      const sum = a + b;
      return sum;
    }

    addsTwoNumbers(1, 5); // 6
```
### Return statement and Scope

In the last example we introduced the `return` statement. We will not `console.log` everything that comes out of a function. Most likely we will want to return something. In this case it is the sum of the two numbers. Think of the return statement as the only way for data to escape a function. Nothing other than what is returned can be accessed outside of the function. Also note, that when a function hits a return statement, the function immediately stops what it is doing and returns.

```javascript
    function dividesTwoNumbers(a, b) {
      const product = a / b;
      return product;
    }

    dividesTwoNumbers(6, 3); // 2
    console.log(product); // undefined
```

If we tried to `console.log` something that we declared inside of the function it would return `undefined` because we do not have access to it outside of the function. This is called scope. The only way to access something inside of the function is to return it. 

We can also set variables to equal what a function returns.

```javascript
    function subtractsTwoNumbers(a, b) {
      const difference = a - b;
      return difference;
    }

    const differenceValue = subtractsTwoNumbers(10, 9); 
    console.log(differenceValue); // 1
    console.log(difference); // undefined
```

We can see that difference is set inside of the function. The variable inside the function only belongs inside the function. 

## Control Flow and Comparison Operators

In this example we are going to use control flow and comparison operators. Control flow is a way for our function to check to see if something is `true`, and either running the code supplied if it is, or moving on if it is not. For this we will use the `if` keyword:

```javascript
    function canDrive(age) {
        if (age > 15) {
            return true;
        }

        return false;
    }

    canDrive(16); // true
```

Here we are taking a number (`age`) and checking to see if the statement is `true` (`16 > 15`), it is, so we will return `true`, and the function will stop. If it is not, it will skip that code and the function will return `false`.

The "Greater Than" symbol ( `>` ) you see in the last example is called a Comparison Operator. Comparison Operators evaluate two items and return either `true` or `false`. These operators are: `<` , `<=`, `>`, `>=`, `===`, `!==` . We will learn more about these operators in the next lesson.

## Introduction to Node and NPM

Node.js is a runtime environment developed originally for use on backend servers. We will need to install it on our machines in order to complete the exercises over the next four days. To install Node please click here: [Download and install Node.js](https://nodejs.org/en/download/). Node comes shipped with "NPM". NPM is a package manager for javascript packages and we will be using it throughout our time at Lambda School. Once you have installed Node.js, you do not need to do anything else to install NPM. 

## Please open the homework folder and complete the assignment described in the README file

## Additional Resources

* [Codecademy: Learn Javascript](https://www.codecademy.com/learn/learn-javascript)
* [Udacity: Intro to Javascript](https://www.udacity.com/course/intro-to-javascript--ud803)
* [MDN: Official Javascript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
