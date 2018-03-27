# Lesson 6: JavaScript III (`for` Loops continued, and Arrays)
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Introduction to arrays
* `for` loops with arrays

## Introduction to Arrays

In the previous lesson we discussed the 3 basic data types (strings, numbers, and booleans), and how to assign those data types to variables. We discussed how a variable can only point to a single string, number, or boolean. However, in many cases we want to be able to point to a collection of data types. For example, what if we wanted to keep track of every student's name in this class using a single variable, `studentsNames`? We can do that using Arrays. We can think of arrays as storage containers for collections of data. Building an array is simple - declare a variable and set it to []. We can then add however many strings, numbers, or booleans we want to the container (comma separated), and access those items whenever we want.

```javascript
    const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];
```

### .length

Just like the String data type has a built-in `.length` method, so does the array. In fact the array has a lot of useful built-in methods that we will be discussing in later lessons. While the string `.length` counts the characters of a string, array `.length` will return the number of items in an array:

```javascript
    const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];

    console.log(studentsNames.length);  // 4
```

### Accessing Items in an Array

We can access items in an array by calling its position in the array. Items are given a numerical position (index) according to where they are in the array. An array's numerical order ALWAYS starts at 0, so the first item is in the 0 index, the second in the 1 index, the third in the 2, and so on (this can be tricky at first, but just remember arrays always start at 0). 

```javascript
    const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];
                           0       1        2      3
```

In order to access the item, we will type the name or the array variable, followed by brackets containing the index.

```javascript
    const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];

    console.log(studentsNames[1]);  // 'Maria'
```

In our `studentsNames` array, the length is 4. We know the first item is always going to be 0, and every item after is shifted over one number. So in our example the last item has an index of 3.  To dynamically access the last item in the array, we will use the `.length` method.  Using our length property we will show how it is done when we don't know the number of items in an array:

```javascript
    const studentsNames = ['Dan', 'Maria', 'Sara', ... ,'Raj'];

    console.log(studentsNames[studentsNames.length - 1]);  // 'Raj'
```

### Assignment

We can assign and reassign any index in the array using the bracket/index and an =. 

```javascript
    const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];

    studentsNames[0] = 'Ryan';

    console.log(studentsNames);  // ['Ryan', 'Maria', 'Sara', 'Raj']
```
### .push & .pop

Two more very useful built-in array methods are `.push` and `.pop`. These methods refer to the adding and removing of items from the array after its initial declaration.

`.push` adds an item to the end of the array, incrementing its length by 1. (`.push` returns the new length)

```javascript
    const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];

    studentsNames.push('Ryan');
    
    console.log(studentsNames);  // ['Dan', 'Maria', 'Sara', 'Raj', 'Ryan']

    let x = studentsNames.push('Jack');
    console.log(studentsNames): // ['Dan', 'Maria', 'Sara', 'Raj', 'Ryan', 'Jack'];
    console.log(x); // 6
```

`.pop` removes the last item in the array, decrementing the length by 1. (`.pop` returns the "popped" item)

```javascript
    const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];

    studentsNames.pop();
    console.log(studentsNames);  // ['Dan', 'Maria', 'Sara']

    let poppedName = studentsNames.pop();
    console.log(studentsNames); // ['Dan', 'Maria']
    console.log(poppedName); // Sara
```

### .unshift & .shift

`.unshift` and `.shift` are exactly like `.push` and `.pop`, except they operate on the first item in the array. `.unshift(item)` will put a new item in the first position of the array, and `.shift()` will remove the first item in the array.

```javascript
    const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];

    studentsNames.unshift('Ryan');

    console.log(studentsNames);  // ['Ryan', 'Dan', 'Maria', 'Sara', 'Raj']

    studentsNames.shift();

    console.log(studentsNames);  // ['Dan', 'Maria', 'Sara', 'Raj']
```

## for Loops

Most of the time, `for` loops are used to iterate over all of the items in an array. Using the index access technique we can access each item in the array. To do this, we use the `.length` method as the stopping point for the loop.

```javascript
    const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];

    for (let i = 0; i < studentsNames.length; i++) {
        console.log(studentsNames[i]);
    }

    // 'Dan'
    // 'Maria'
    // 'Sara'
    // 'Raj'
```

## Arguments object

When we pass arguments to a function they are contained in an array-like data structure called `arguments`. `arguments` is available to us anywhere within the function and contains all of the arguments passed to it. While it is array-like, it does not have all of the properties of an array. One property it does have is the method `.length`. When we are given a function with an unknown number of arguments, we can use `.length` and a `for` loop to iterate over all of the arguments:

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

* [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [MDN: for Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
