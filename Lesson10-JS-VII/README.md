# Lesson 10: Javascript VII (Closure)
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Closure

## Closure

In JavaScript functions are first-class objects.  What this means is that we can use functions in a very flexible manner.  You've already seen how we can assign functions to variables:

```javascript
    const foo = function() {};
```

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


## Additional Resources:

* [Eloquent Javascript: Higher Order Functions](https://eloquentjavascript.net/05_higher_order.html)
* [Understand Closures with Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
* [MDN: Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
