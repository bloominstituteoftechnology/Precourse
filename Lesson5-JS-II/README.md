# Lesson 5: Javascript II (Control Flow, Comparison Operators, `for` Loops)
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Undefined and Null
* Comparison Operators (continued)
* Control Flow (continued)
* Logical Operators
* `for` Loops
* `arguments`

## Undefined and Null

There are a couple of Javascript objects that don't really fit into any type. Those are the values `undefined` and `null`. You will get `undefined` when you are looking for something that does not exist like a variable that does not have a value yet. `undefined` simply means what you are asking for does not exist. 

```javascript
    console.log(unkownVar); // undefined
```

`null` is an object that we, the developers, set when we want to tell other developers that the item they are looking for exists, but there is no value associated with it. While `undefined` is set by the Javascript language, `null` is set by a developer. If you ever receive `null`, know that another developer set that value to `null`

```javascript
    let phoneNumber = '123-456-7890';
    phoneNumber = null;

    phoneNumer; // null
```

One last thing to note, neither `undefined` nor `null` are strings, they are written just as they are with no quotes around them, like a boolean.

## Truthiness

In these lessons we have talked a lot about the boolean values, `true` and `false`. When using an `if` statement or another statement that expects a boolean value (such as the `!`, NOT), and the expression given is not a boolean value, Javascript will do something called type coercion and transform whatever it is given to a boolean value. This is known as truthy and falsey. Every data type has a truthiness to it. Here are some examples:

```javascript
    // items that are coerced to true
    true 
    1
    ' '
    [] // an array, you'll learn more about this later
    {} // an object, you'll learn more about this later
    function() {}

    // items that are coerced to false
    false
    0
    undefined
    null
    ''
```

## Comparison Operators (continued)

In the last lesson we touched on Comparison Operators, we will go a little more in depth as to how they work and then introduce a close relative of Comparison Operators, Logical Operators.

In the last lesson we introduced our comparison operators, (`>` `>=` `<` `<=` `===` `!==`). These operators work just as they would in a math class, greater than, less than, etc. We use these operators to evaluate two expressions. As the computer runs the code the operator will return either a `true` (if the statement is true) or a `false`. 

```javascript
    1 > 2;     // alse
    2 < 3;     // true
    10 >= 10;  // true
    100 <= 1;  // false
```

The "triple equals" ( `===` ) must not be confused with a single equal sign (which indicates assigning a value to a variable). The triple equal will compare everything about the two items, including type, and return if they are exactly equal or not:
(Something to note: there is a "double equals" ( `==` ) which will compare two items, but it will NOT take into account their types (`1 == '1' // true`). Due to this, it is considered bad practice to use the double equal. We would like to see you always using the triple, and you will always see us using it.)

```javascript
    1 === 1;          // true
    1 === '1';        // false
    'cat' === 'cat';  // true
    'cat' === 'Cat';  // false
```

The last comparison operator we would like to introduce you to has two parts to it. 

First is the "NOT" (`!`) when you see this it will mean that we are asking the opposite of the expression (we will revisit the NOT operator later in this lesson).

With that in mind, we can introduce the "not equals" ( `!==` ). This will return true if the items are NOT equal to each other, in any way. This, like the triple equal, takes type into account.

```javascript
    1 !== 1;          // false
    1 !== '1';        // true
    'cat' !== 'cat';  // false
    'cat' !== 'Cat';  // true
```

## Control Flow (continued)

In the last lesson we learned about the `if` operator. We can use `if` to check and see if an expression is `true`, if it is, run some code. If it is not, skip the code and keep running the program. 

```javascript
    if (1 + 1 === 2) {
        console.log('The expression is true!');
    }
```

To add on to `if`, we can also use the `else if` and `else` statements. These statements must be used with `if` and must come after it. These statements will be evaluated if the initial `if` returns `false`. We can think of the `else if` as another `if` statement that has been chained (we can have as many else if statements we want). Only one `if` or `else if` statement code block will be run. If at any time a statement returns `true`, that code will be run and the rest will be skipped:

```javascript
    if (false) {
        console.log('This will be skipped!');
    } else if (true) {
        console.log('This code will be run');
    } else if (true) {
        console.log('This code will NOT be run');
    }
```

The `else` statement will always come at the end of an if-else `if` chain, and will act as a default. If none of the expressions returned `true`, the `else` code block will be run no matter what. If any of the previous `if` or `else if` expressions are `true`, the `else` statement code block will not be run.

```javascript
    if (false) {
        console.log('This will be skipped!');
    } else if (false) {
        console.log('This code will NOT be run');
    } else {
        console.log('This code will be run');
    }
```

## Logical Operators

We can also combine two equality expressions and ask if either of the are true, both of them are true, or neither of them are true. To do this we will use Logical Operators.

### &&

The first logical operator we will look at is the "AND" operator. It is written with two ampersands (`&&`). This will evaluate both expressions and will return true if BOTH expressions are true. If one (or both) of them is false this operator will return false:

```javascript
    if (100 > 10 && 10 === 10) {
        console.log('Both statements are true, so this code will be run');
    }
    
    if (10 === 9 && 10 > 9) {
        console.log('One of the statements is false, so the && will return false, this code will not be run');
    } 
```

### ||

The next is the "OR" operator. It is written with two vertical bars (`||`). It will determine if one of the expressions is `true`. It will return `true` if one (or both) of the expressions is `true`. It will return `false` if BOTH expressions are `false`:

```javascript
    if (100 > 10 || 10 === 10) {
        console.log('Both statements are true, so this code will be run');
    }
    
    if (10 === 9 || 10 > 9) {
        console.log('One of the statements is true so the || will return true, this code will be run');
    } 

    if (10 === 9 || 1 > 9) {
        console.log('Both of the statements are false, so the || will return false. This code will not be run.');
    } 
```

### !

The last logical operator is the "NOT" operator. It is written as a single exclamation mark (`!`). We saw this operator earlier when determining equality (`!==`). As before, the NOT operator will return the opposite boolean value of what is passed to it:

```javascript
    if (!false) {
        console.log('The ! will return true, because it is the opposite of false. This code will be run');
    }

    if (!(1 === 1)) {
        console.log('1 does equal 1, so that expression returns true. The ! operator will then return the opposite of that. This code will NOT run.');
    }
```

### Notes About Logical Operators

A couple things to note about logical operators.

* The expressions are evaluated in order, and the computer will skip any redundant expressions. In an `&&` statement, if the first expression is `false`, the second expression will not be evaluated because BOTH expressions need to be `true`. Same for the `||` statement. If the first expression is `true`, the second will not be evaluated because there only needs to be one `true` statement to fulfill the requirements of the operator.

* Use parentheses. As we saw in the second `!` operator example, we used parentheses to evaluate what was inside of the parentheses FIRST, then applied the `!` operator. We can wrap ANY expression in parentheses and it will be evaluated before evaluating the expression as a whole. 


## for Loops

Most software runs on loops, evaluating expressions over and over again until it either returns what we are looking for, or stops after a certain time. Javascript has two looping expressions built in to it and today we will look at the first one, the "for" loop. 

`for` loops have a unique syntax, similar to the `if` statement, but slightly more complex. First we have the `for` keyword, followed by parentheses and then open and close braces. Within the parentheses we will need three things. First, we must declare a variable, this is what the loop will be looping over. Then we will have a conditional expression, the loop will continue happening until this statement is `false`. Third, we will increment our variable. All three of these statements are separated by a semi-colon.

```javascript
    for (let i = 0     ; i < 10                 ; i++          ) {
    // | declare a var | conditional expression | increment var|
        console.log(i);
    }
```

In this example we see that we initially set our `counter` variable to 0, the loop will run and each time it gets to the end, it will increase the counter by one. The for loop will then evaluate the conditional expression. If it is `true`, it will run again, if it is `false` it will stop running.

### The ++ operator

We saw in the last two examples the `++` operator. This is Javascript shorthand for "Set the value of the variable to it's current value plus one". There are a few more of these variable math/assignment shorthand expressions, we will visit them in upcoming lessons.

### Infinite Loops. 

It is possible to get your loop stuck in what we call an "Infinite Loop". You must make sure there is a way for the loop to end, take for example this loop:

```javascript
    for (let i = 0; i >= 0; i++) {
        console.log(i);
    }
```
Because our conditional expression will ALWAS be `true` (`i` will never be less than 0) this loop will essentially run forever. This will break your program, and may crash your web browser, or computer.

## Arguments object

When we pass arguments to a function they are contained in an array-like data structure called `arguments`. `arguments` is available to us anywhere within the function and contains all of the arguments passed to it. While it is array like, it does not have all of the properties of an array. One property it does have is the method `.length`. When we are given a function with an unknown number of arguments, we can use `.length` and a `for` loop to iterate over all of the arguments:

```javascript
    function sumAllTheNumbers() {
        let sum = 0;

        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }

        return sum;
    }

    sumAllTheNumbers(2, 5, 3, 4, 7, 9, 1, 0, 7, 7, 7);  // 52
```

## Please open the homework folder and complete the assignment described in the README file

## Additional Resources

* [MDN: Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
* [MDN: Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [MDN: Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
* [MDN: for Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
