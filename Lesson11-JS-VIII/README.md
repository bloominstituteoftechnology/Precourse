# Lesson 11: Javascript VIII (Recursion)
(Attention: These are the class notes for the [Lambda School](http://www.lambdaschool.com) pre-course instruction workshop. This is meant to serve as an accompaniment to the class)

In this lesson we will cover: 

* Recursion

## Recursion

In the previous assignment we discussed the flexibility that we have with functions in JavaScript.  Another cool aspect about functions is that we can invoke a function from inside of itself.  This is called recursion.  Recursion is a type of iteration similar to `for` and `while` loops.

The code below is an example of recursion.  Don't actually run this code though because it will produce an infinite loop.  Just like with `for` loops, if we don't have something that stops the iteration the cyle will continue forever.  In the case below the function `foo` will continue to call itself until the program crashes.

```javascript
    function foo() {
        foo(); // caution: this will produce an infinite loop
    }
```

The same basic pieces of a `for` loop apply to a recursive function:

```javascript
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    // prints 1, 2, 3, 4, 5
```

There are three parts to the code above: 
1. In the code above we have a variable `i` that we will use to keep track of how many iterations we have run.  
2. We also have a truth condition that needs to be checked between each iteration.  The code will run as long as it is true.
3. We are moving towards a condition where the loop stops.  `i++` is doing this part.

Recursion needs to use the same three parts but it is written differently.

```javascript
    function looper(n) {
        if (n > 5) return;
        console.log(n);
        looper(n + 1);
    }
    looper(1);
    // prints 1, 2, 3, 4, 5
```

The code above will have the same result as the `for` loop used up above.  It also has the same three pieces of the `for` loop as shown above.
1. `n` is the variable we are using to keep track of our iteration.
2. Instead of a truth condition that must be `true` to keep going like in our `for` loop we have a base case.  The base case says "stop when `false`".
3. We move towards satisfying the base case by modifying `n`.

Everything that can be writter recursively can be written iteratively (with a `while` loop or a `for` loop).  There are cases where a recursive
solution is simpler and easier to write than an iterative solution.  Recursive functions are generally used when working with various data structures
like trees, linked lists, or graphs.  Programming is all about tradeoffs and different approaches have different advantages.  For now we recommend that
you generally stick to iteration but it is good to understand how to write recursive solutions.

## Additional Resources:

* [Eloquent Javascript: Functions](https://eloquentjavascript.net/03_functions.html) - Scroll to the section titled "Recursion"
