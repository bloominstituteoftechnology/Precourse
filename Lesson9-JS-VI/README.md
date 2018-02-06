# Lesson 9: Javascript VI (Callbacks)
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Callbacks
* More Array Methods

## Callbacks

A very important concept in Javascript is the ability to pass a function as an arguments to another function. These functions are called `callbacks`. These functions can be called anytime and passed arguments within the function. We will soon discover why callbacks are so important to Javascript. Convention is to use the `cb` argument variable as your callback.

```javascript
    function saysHelloToUser(user) {
        return 'Hello ' + user + '!';
    }

    function saysGoodbyeToUser(user) {
        return 'Goodbye ' + user + '!';
    }

    function createGreeting(user, cb) {
        return cb(user);
    }

    createGreeting('Dan', saysHelloToUser); // 'Hello Dan!'
    createGreeting('Dan', saysGoodbyeToUser); // 'Goodbye Dan!'
```

## More Array Methods

We already know about and use array methods, `.push`, `.pop`, `.shift`, `.unshift`, and `.length`. But there are a lot more methods available to us natively on an array. The methods we are going to talk about here are called higher order methods, because they take callbacks as arguments. 

### .forEach

`.forEach` is a built in for loop on every array. `.forEach` takes a callback as its only argument, and iterates over every item in the array and calls the callback on it. The callback can take two arguments, the first is the item itself, the second is the index of the item, this argument is optional. 

```javascript
    const cars = ['Ford', 'Chevrolet', 'Toyota', 'Tesla'];

    // We can write the callback function itself in the parentheses as an anonymous function
    cars.forEach(function(item, index) {
        console.log(item);
    });

    // Or we can instantiate a function to be used as a callback.
    // Also, we do not need to use the index argument, if you don’t need it, feel free to leave it out.
    function printNames(item) {
        console.log(item);
    }

    // And call that function in the forEach parentheses
    cars.forEach(printNames);
```

### .reduce

`.reduce` will run a loop on our array with the intention of reducing each item into one item that is returned. As it's first argument it takes a callback that takes two arguments, first an 'accumulator' (the result of the reduce method until now), and the second is the item it is currently on. The callback must ALWAYS contain a return statement. Reduce also takes an optional second argument, which would be the starting accumulator. If the starting accumulator is not supplied reduce will start at the first item of the array. `.reduce` will always return the accumulator when it is done iterating through the items.

```javascript
    const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const words = [ 'Hi,', 'my', 'name', 'is', 'Dan'];

    // We can write the anonymous function directly into the .reduce parentheses
    // If we leave out the starting item, it will always start at the first item.
    const sums = nums.reduce(function(acc, item){
        return acc + item;
    });

    // We can write a function outside of the .reduce parens (to be used multiple times later)
    function multiplyTwoNumbers(a, b) {
        return a * b;
    }
    const products = nums.reduce(multiplyTwoNumbers);

    // .reduce works on any data types. 
    // In this example we set a starting accumulator
    const sentence = words.reduce(function(acc, item) {
        return acc + ' ' + item;
    }, 'Sentence:');

    console.log(sums); // 45
    console.log(products); // 362880
    console.log(sentence); // 'Sentence: Hi, my name is Dan'
```
### .map

`.map` is used when we want to change every item in an array in the same way. `.map` takes a callback as its only argument. Like the `.forEach` method, the callback has the optional arguments item and index. Unlike `.reduce`, `.map` will return the entire array.

```javascript
    const nums = [2, 3, 4, 5];

    function multiplyByThree(item) {
        return item * 3;
    }


    const double = nums.map(function(item) {
        return item * 2;
    });

    const triple = nums.map(multiplyByThree)

    console.log(double); // [ 4, 6, 8, 10 ]
    console.log(triple); // [ 6, 9, 12, 15 ]
```

## Please open the homework folder and complete the assignment described in the README file

## Additional Resources:

* [Understanding Callback Functions and How to Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* [Eloquent Javascript: Higher Order Functions](https://eloquentjavascript.net/05_higher_order.html)
* [MDN: Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
* [MDN: Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
