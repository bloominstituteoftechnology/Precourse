# Lesson 7: Javascript IV (Objects)
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Introduction to Objects
* Methods
* for...in Loops
* The `this` Keyword
* Objects in Javascript

## Introduction to Objects

In the last lesson we introduced Arrays. Arrays are containers that hold collections of data. In this lesson we will introduce another data container, the Object. Objects and arrays are similar in some ways and very different in others. Where arrays hold multiple items related to each other, Objects will hold a lot of information about one thing. Objects are instantiated by using braces (`{}`). 

```javascript
    const newObj = {};
```

### Key:Value pairs

Unlike arrays that have index valued items, objects use a concept called key:value pairs. The key is the identifier and the value is the value we want to save to that key. The syntax is "key: value". Objects can hold many key:value pairs, they must be separated by a comma (no semi-colons inside of an object!). Keys are unique in an object, there can be only one key of that name. Although, multiple keys can have the same value. Values can be any Javascript type, string, number, boolean, array, function or even another object. In this demo we will create a user object.

```javascript
    const user = {
        username: 'dan.frehner',
        password: 'abc123',
        lovesJavascript: true,
        favoriteNumber: 42,
    };
```

### Accessing Values

Once we have key:value pairs we can access those values by calling the object name and the key. There are two different ways to do this, dot notation and bracket notation. 

With dot notation we can just call the object name, a dot, and the key name. Just as we call the `.length` property on an array (hint: the length property is a key:value pair):

```javascript
    user.lovesJavascript; // true
    user.username;        // dan.frehner
```

Bracket notation is just like calling an item on an array, although with brackets we MUST use a string or number, or variable pointing to a string or number. Each key can be called by wrapping it with quotes:

```javascript
    const passString = 'password';
    user['lovesJavascript']; // true
    user['username'];        // dan.frehner
    user[passString];        // abc123
```

In the wild you will see brackets almost always being used with variables. 

### Assigning Values

Assigning values works just like accessing them. We can assign them, when we create the object, with dot notation, or with bracket notation:

```javascript
    const newUser = {
        isNew: true,
    }

    const loveJSString = 'lovesJavascript';

    newUser.username = 'new.username';
    newUser['password'] = '12345';
    newUser[loveJSString] = true;
```

## Removing Properties

If we want to remove a property we can do it using the `delete` keyword:

```javascript
    const newObject = {
        removeThisProperty: true,
    };

    delete newObject.removeThisProperty;
```

It is rare we will see the use of the `delete` keyword, many find best practice to be setting the value of a keyword to `undefined`. It will be up to you when the time comes.

## Methods

In objects, values can be set to functions. Functions saved on an object are called methods. We have used plenty of methods so far throughout this course. `.length`, `.push`, `.pop`, etc, are all methods. We can set a key to a name, and the value to a function. Just like other times we call methods, we will call this method using dot notation and trailing parentheses (note: we can call a method with arguments just as we would a normal function):

```javascript
    const newObject = {
        sayHiMethod: function() {
            console.log('Hi Everyone!');
        },
    }

    newObject.sayHiMethod(); // Hi Everyone!
```

## for...in Loops

Sometimes we want to iterate over each key:value pair in our object. With arrays we used a standard for loop and an index number variable. Objects do not contain numerical indexes so the standard loop will not work for objects. Javascript has a second type of for loop built in called the "for...in" loop. It is slightly different syntax, it starts the same but in the parentheses we will declare a variable, the keyword `in`, and the name of the object. This will loop over each key in the object and finish when all of the keys have been iterated over. We can use this key, and bracket notation, in our for loop to access the value associated with that key.

```javascript
    const user = {
        username: 'dan.frehner',
        password: 'abc123',
        lovesJavascript: true,
        favoriteNumber: 42,
    };

    for (let key in user){
        console.log(key);
        console.log(user[key]);
    }

    // username
    // 'dan.frehner'
    // password
    // 'abc123'
    // lovesJavascript
    // true
    // favoriteNumber
    // 42
```

## The 'this' Keyword

Objects have a self referential keyword that may be applied in each object called `this`. When called inside of an object it is referring to that very object. `this` can be used to access other keys in the same object, and is especially useful in methods:

```javascript
    const user = {
        username: 'dan.frehner',
        password: 'abc123',
        lovesJavascript: true,
        favoriteNumber: 42,
        userSaysHi: function(){
            console.log( this.username + ' says hi!');
        },
    };

    user.usersaysHi(); // 'dan.frehner says hi!'
```

Note: the `this` keyword can sometimes be one of the more difficult topics in Javascript. We are using it very basically here, but the topic gets much more complex very soon. 

## Objects in Javascript

In this lesson we learned what Objects are and the many ways to access values, call methods, and assign values. Many of these techniques looked very familiar, as if we had used them in virtually every aspect of our learnings so far. There is a pattern here, that is because EVERYTHING in Javascript is an Object. Arrays are just objects with numerical keys, Strings are objects under the hood with built in methods, functions are actually objects with their own special properties, the entire Javascript runtime is an object (`window` in a browser, or `global` in Node.js). The more you work with Javascript the more this will start to make sense to you. Just remember, everything is an object. 

## Please open the homework folder and complete the assignment described in the README file

## Additional Resources:

* [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [MDN: for...in Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
