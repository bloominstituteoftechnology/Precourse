# Lesson 3: Javascript II (Control Flow, Comparison Operators, 'for' Loops, and Arrays)
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Comparison Operators (continued)
* Control Flow (continued)
* Logical Operators
* Introduction to Arrays
* 'for' Loops

## Comparison Operators (continued)

In the last lesson we touched on Comparison Operators, we will go a little more in depth as to how they work and then introduce a close relative of Comparison Operators, Logical Operators.

In the last lesson we introduced our comparison operators, ( > >= < <= === !==). These operators work just as they would in a math class, greater than, less than, etc. We use these operators to evaluate two expressions. As the computer runs the code the operator will return either a true (if the statement is true) or a false. 

```javascript
    1 > 2;     //false
    2 < 3;     //true
    10 >= 10;  //true
    100 <= 1;  //false
```

The "triple equals" ( === ) must not be confused with a single equal sign (which indicates assigning a value to a variable). The triple equal will compare everything about the two items, including type, and return if they are exactly equal or not:
(Something to note: there is a "double equals" ( == ) which will compare two items, but it will NOT take into account their types (1 == "1" //true). Due to this, it is considered bad practice to use the double equal. We would like to see you always using the triple, and you will always see us using it.)

```javascript
    1 === 1;          //true
    1 === '1';        //false
    'cat' === 'cat';  //true
    'cat' === 'Cat';  //false
```

The last comparison operator we would like to introduce you to has two parts to it. 

First is the "NOT" (!) when you see this it will mean that we are asking the opposite of the expression (we will revisit the NOT operator later in this lesson).

With that in mind, we can introduce the "not equals" ( !== ). This will return true if the items are NOT equal to each other, in any way. This, like the triple equal, takes type into account.

```javascript
    1 !== 1;          //false
    1 !== '1';        //true
    'cat' !== 'cat';  //false
    'cat' !== 'Cat';  //true
```

## Control Flow (continued)

In the last lesson we learned about the "if" operator. We can use "if" to check and see if an expression is true, if it is, run some code. If it is not, skip the code and keep running the program. 

```javascript
    if (1 + 1 === 2){
        console.log("The expression is true!");
    }
```

To add on to if, we can also use the "else if" and "else" statements. These statements must be used with "if" and must come after it. These statements will be evaluated if the initial "if" returns false. We can think of the "else if" as another "if" statement that has been chained (we can have as many else if statements we want). Only one "if" or "else if" statement code block will be run. If at any time a statement returns true, that code will be run and the rest will be skipped:

```javascript
    if (false){
        console.log("This will be skipped!");
    } else if (true){
        console.log("This code will be run");
    } else if (true){
        console.log("This code will NOT be run");
    }
```

The "else" statement will always come at the end of an if-else if chain, and will act as a default. If none of the expressions returned true, the "else" code block will be run no matter what. If any of the previous if - else if expressions are true, the else statement code block will not be run.

```javascript
    if (false){
        console.log("This will be skipped!");
    } else if (false){
        console.log("This code will NOT be run");
    } else {
        console.log("This code will be run");
    }
```

## Logical Operators

We can also combine two equality expressions and ask if either of the are true, both of them are true, or neither of them are true. To do this we will use Logical Operators.

### &&

The first logical operator we will look at is the "AND" operator. It is written with two ampersands (&&). This will evaluate both expressions and will return true if BOTH expressions are true. If one (or both) of them is false this operator will return false:

```javascript
    if (100 > 10 && 10 === 10){
        console.log("Both statements are true, so this code will be run");
    }
    
    if (10 === 9 && 10 > 9){
        console.log("One of the statements is false, so the && will return false, this code will not be run");
    } 
```

### ||

The next is the "OR" operator. It is written with two vertical bars (||). It will determine if one of the expressions is true. It will return true if one (or both) of the expressions is true. It will return false if BOTH expressions are false:

```javascript
    if (100 > 10 || 10 === 10){
        console.log("Both statements are true, so this code will be run");
    }
    
    if (10 === 9 || 10 > 9){
        console.log("One of the statements is true so the || will return true, this code will be run");
    } 

    if (10 === 9 || 1 > 9){
        console.log("Both of the statements are false, so the || will return false. This code will not be run.");
    } 
```

### !

The last logical operator is the "NOT" operator. It is written as a single exclamation mark (!). We saw this operator earlier when determining equality (!==). As before, the NOT operator will return the opposite boolean value of what is passed to it:

```javascript
    if(!false){
        console.log("The ! will return true, because it is the opposite of false. This code will be run");
    }

    if(!(1 === 1)){
        console.log("1 does equal 1, so that expression returns true. The ! operator will then return the opposite of that. This code will NOT run.");
    }
```

### Notes About Logical Operators

A couple things to note about logical operators.

* The expressions are evaluated in order, and the computer will skip any redundant expressions. In an && statement, if the first expression if false, the second expression will not be evaluated because BOTH expressions need to be true. Same for the || statement. If the first expression is true, the second will not be evaluated because there only needs to be one true statement to fulfill the requirements of the operator.

* Use parentheses. As we saw in the second ! operator example, we used parentheses to evaluate what was inside of the parentheses FIRST, then applied the ! operator. We can wrap ANY expression in parentheses and it will be evaluated before evaluating the expression as a whole. 

## Introduction to Arrays

In the previous lesson we discussed the 3 basic data types (strings, numbers, and booleans), and how to assign those data types to variables. We discussed how a variable can only point to a single string, number, or boolean. In many cases though we want to be able to point to a collection of data types. For example what if we wanted to keep track of every student's name in this class using a single variable, "studentsNames". We can do that using Arrays. We can think of arrays as storage containers for collections of data. Building an array is simple, declare a variable and set it to []. We can then add however many strings, numbers, or booleans as we want to the container (comma separated), and access those items whenever we want.

```javascript
    let studentsNames = ["Dan", "Maria", "Sara", "Raj"];
```


### .length

Just like the String data type has a built in .length method, so does the array. In fact the array has a lot of useful built in methods (we will be discussing those in later lessons). Just like the string .length counts the characters, array .length will return the number of items in an array:

```javascript
    let studentsNames = ["Dan", "Maria", "Sara", "Raj"];

    console.log(studentNames.length);  //4
```

### Accessing Items in an Array

We can access an item at anytime in an array, we just need to call the item by its position in the array. Items are given a numerical position (index) according to where it is in the array, in order. An array's numerical order ALWAYS starts at 0, so the first item is in the 0 index, the second in the 1 index, the third in the 2, and so on (this can be tricky at first, but just remember arrays always start at 0). 

```javascript
    let studentsNames = ["Dan", "Maria", "Sara", "Raj"];
                           0       1        2      3
```

In order to access the item, we will type the name or the array variable, followed by brackets containing the numerical assignment.

```javascript
    let studentsNames = ["Dan", "Maria", "Sara", "Raj"];

    console.log(studentNames[1]);  //"Maria"
```

To access the last item in the array, we will use the .length method. In our studentsNames array, the length is 4. We know the first item is always going to be 0, and every item after is shifted over one number. So in our example the last item has an index of 3. Using our length method we will show how it is done when we don't know the number of items in an array:

```javascript
    let studentsNames = ["Dan", "Maria", "Sara", ... ,"Raj"];

    console.log(studentNames[studentNames.length - 1]);  //"Raj"
```

### Assignment

We can assign and reassign any index in the array using the bracket/index and an =. 

```javascript
    let studentsNames = ["Dan", "Maria", "Sara", "Raj"];

    studentNames[0] = "Ryan";

    console.log(studentNames);  //["Ryan", "Maria", "Sara", "Raj"]
```
### .push & .pop

Two more very useful built in array methods are .push and .pop. These methods refer to the adding and removing of items from the array after it's initial declaration.

.push adds an item to the end of the array, incrementing it's length by 1. (.push returns the entire array)

```javascript
    let studentsNames = ["Dan", "Maria", "Sara", "Raj"];

    studentNames.push("Ryan");

    console.log(studentNames);  //["Dan", "Maria", "Sara", "Raj", "Ryan"]
```

.pop removes the last item in the array, decrementing the length by 1. (.pop returns the "popped" item)

```javascript
    let studentsNames = ["Dan", "Maria", "Sara", "Raj"];

    studentNames.pop();

    console.log(studentNames);  //["Dan", "Maria", "Sara"]
```

### .unshift & .shift

.unshift and .shift are exactly like .push and .pop, except they operate on the first item in the array. .unshift(item) will put a new item in the first position of the array, and .shift() will remove the first item in the array.

```javascript
    let studentsNames = ["Dan", "Maria", "Sara", "Raj"];

    studentNames.unshift("Ryan");

    console.log(studentNames);  //["Ryan", "Dan", "Maria", "Sara", "Raj"]

    studentNames.shift();

    console.log(studentNames);  //["Dan", "Maria", "Sara", "Raj"]

```

### Notes on Arrays

Because Javascript is not a strongly typed language, arrays do not need to be typed either. Arrays in Javascript can contains multiple different data types in the same array. 

## for Loops

Most software runs on loops, evaluating expressions over and over again until it either returns what we are looking for, or stops after a certain time. Javascript has two looping expressions built in to it and today we will look at the first one, the "for" loop. 

"for" loops have a unique syntax, similar to the "if" statement, but slightly more complex. First we have the "for" keyword, followed by parentheses and then open and close braces. Within the parentheses we will need three things. First, we must declare a variable, this is what the loop will be looping over. Then we will have a conditional expression, the loop will continue happening until this statement is false. Third, we will increment our variable. All three of these statements are separated by a semi-colon.

```javascript
    for( let i = 0     ; i < 10                 ; i++          ){
     //| declare a var | conditional expression | increment var|
        console.log(i);
    }
```

In this example we see that we initially set our "counter" variable to 0, the loop will run and each time it gets to the end, it will increase the counter by one. The for loop will then evaluate the conditional expression. If it is true, it will run again, if it is false it will stop running.

Most of the time, for loops are used to iterate over all of the items in an array. Using the index access technique we can access each item in the array. To do this, we use the .length method as the stopping point for the loop.

```javascript
    let studentsNames = ["Dan", "Maria", "Sara", "Raj"]

    for( let i = 0; i < studentNames.length; i++){
        console.log(studentNames[i]);
    }

    //"Dan"
    //"Maria"
    //"Sara"
    //"Raj"
```

### The ++ operator

We saw in the last two examples the "++" operator. This is Javascript shorthand for "Set the value of the variable to it's current value plus one". There are a few more of these variable math/assignment shorthand expressions, we will visit them in upcoming lessons.

### Infinite Loops. 

It is possible to get your loop stuck in what we call an "Infinite Loop". You must make sure there is a way for the loop to end, take for example this loop:

```javascript
    for(let i = 0; i >= 0; i++){
        console.log(i)
    }
```
Because our conditional expression will ALWAS be true (i will never be less than 0) this loop will essentially run forever. This will break your program, and may crash your web browser, or computer.  

## Please open the homework folder and complete the assignment described in the README file

## Additional Resources

* [MDN: Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
* [MDN: Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [MDN: Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
* [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [MDN: for Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
