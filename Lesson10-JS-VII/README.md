# Lesson 10: Javascript VII (Closure)
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Functional Programming
* Closure

## Functional Programming

As mentioned before, Javascript treats everything deep down as an object. This approach is called **object-oriented programming**. In contrast, there is another approach that treats everything like a function: **functional programming**.

*While Javascript is not a true functional language, it can be treated functionally*.

```js
function addNumbers (x, y) {
    return x + y;
};

const startValue = 4;
const startValue2 = 6;

addNumbers(startValue, startValue2);
```

The above example is not considered to be "functional programming" because we have variables sitting around in the root scope. One of the tenets of functional programming is that everything is a function or is in a function.

We can modify it to this:

```js
function addNumbers (x, y) {
    return x + y;
};

function doMoreMath() {
    const startValue = 4;
    const startValue2 = 6;

    addNumbers(startValue, startValue2);
}
```

This is still not quite functional because while we don't have variables swimming around in the root scope, we see that `doMoreMath` needs to come out and look for `addNumbers` in order to do the function. In cases like that, functions should be passed through as arguments and called back.

```js
function addNumbers (x, y) {
    return x + y;
};

function doMoreMath(callback) {
    const startValue = 4;
    const startValue2 = 6;

    callback(startValue, startValue2);
}

doMoreMath(addNumbers);
```

I feel like this "component-alizes" the code, as in having elemental functions that can be called back in higher order functions to do work, rather than blurting out the entire logic of the program in a TLDR; block. It also seems we can more easily modify operations by simply declaring more elemental functions and changing the callback to directly change how a bigger function operates.

Two tenets of functional programming so far:
* No variables floating in the aether.
* Logic is declared discretely in elemental functions, which are passed through parameters to functions that need them (i.e. *logic is declared within a function or passed through as an argument*).

Javascript, while again object-oriented...ish, is great for functional programming because functions are first-class objects.

## Closure

In JavaScript functions are first-class objects.  What this means is that we can use functions in a very flexible manner.  You've already seen how we can assign functions to variables:

```javascript
    const foo = function() {};
```

(*Be aware that assigning functions to variables is totally NOT a thing in lots of object-oriented languages.*)

We can put functions on objects:

```javascript
    const obj = {};
    obj.foo = function() {};
```

We can put functions in arrays:

```javascript
    const functions = [
        function() {},
        function() {},
    ];
```

We can pass functions into other functions (these are called callback functions):

```javascript
    function foo(cb) {
        cb();
    }

    foo(function() {
        console.log('I am a callback function!');
    });
```

And finally, we can return a function definition from a function:

```javascript
    function outer() {
        return function() {
            console.log('hi!');
        };
    }

    const inner = outer();
    inner(); // logs 'hi'
```

The function that retuns the new function is called a "Higher Order Function" or HOF.  The idea of closure is simply that `inner` that's defined up above is able to look back into `outer` for variables that it needs.  It's scope chain is going to look inside of `outer` before it looks at the global scope.

Here's another example:

```javascript
    function outer() {
        const name = 'Ben';
        return function() {
            console.log(name);
        };
    }
    const name = 'Dan';
    const inner = outer();
    inner(); // logs 'Ben'
```

As you can see from the example above the function `inner` is able to look back into `outer`'s scope to retrieve the `name` variable.
It looks inside of `outer` before it checks the global scope so the name that is printed is `'Ben'` instead of `'Dan'`.

This also applies to the function's parameters:

```javascript
    function makeMultiplier(x) {
        return function(y) {
            return x * y;
        }
    }

    const multiplyByFive = makeMultiplier(5);
    const product1 = multiplyByFive(10);

    const multiplyByTwo = makeMultiplier(5);
    const product2 = multiplyByTwo(7);

    console.log(product1); // logs 50
    console.log(product2); // logs 14
```

In the example above the `x` and the `y` are both set by their respective function calls.  This can be used in many interesting ways.  You can make cache functions, private variables, and you can customize a function's behavior as we did in the example above.  We are able to produce a custom multiplication function.

(*The above process is called "currying". It is common in functional programming.*)


## Additional Resources:

* [Eloquent Javascript: Higher Order Functions](https://eloquentjavascript.net/05_higher_order.html)
* [Understand Closures with Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
* [MDN: Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
