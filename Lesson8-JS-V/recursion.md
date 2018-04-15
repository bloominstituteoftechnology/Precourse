## Resources people mentioned

1. CSX (csx.codesmith.io)
2. Python Tutor

# Recursion

Resurcision is a manner of repeating code. It is an alternative to looping.

* Looping is best for envisioning the entire body of work.
* Recursion
    * Recursion can be adaptable. If you need to do further process an input, you can call the function again.

```js
function recurseThruTown(meX, meY, endX, endY) {
    if (meX === endX && meY === endY) enterBuilding();
    if (meX > endX) {return recurseThruTown(meX - 1, meY, endX, endY)}
    if (meX < endX) {return recurseThruTown(meX + 1, meY, endX, endY)}
    if (meY > endY) {return recruseThruTown(meX, meY - 1, endX, endY)}
    if (meY < endY) {return recurseThruTown(meX, meY + 1, endX, endY)}
}
```
## Why learn Recursion?
* Intuitive
    * We already think recursively in everyday life
* Fundamental part of computer science
    * Lower level languages use recursion extensively
    * As you know, functional programming loves this stuff
* Functional programming mindset
    * Treat data as immutable
    * Treat functions as stateless (*another way of saying pure functions?*)

## What happens when a function invokes another function?

Remember: callback functions

```js
function foo() {
    return bar();
}
```

MTG stack resolution: bar() resolves first, then foo() resolves.

Recursion is when the callback function is itself.
* With no conditional return, the function will recurse infinitely, like an infinite loop.

Base case
* The conditional case that stops the recursion(*i.e. stops invoking other functions*).
* We move toward the base case by comparing where we are and with the base case, and modifying the argument as necessary.

## Common themes in recursion

* Solve a problem by repeatedly breaking it down into similar, smaller problems.
    * In the walking blocks example, we make our trip across town by walking a corner and re-envisioining th e trip as one block shorter.
* Eventually reach a problem that is simple to solve. (*Resolving the base case*)
* Combine all of the smaller solutions to solve the bigger problem. 

## Example: Recursive Sum Function

What's our inputs?
* Number
What's our output?
* Another number
What's the relationship between the input and the output?
* Another number is the sum of of all the digits up to number.

Let's code that

```js 
rSum(n) {

}
```

What's our base case?
When "number" = "0". We don't want to add negative numbers forever.

```js
let sum = 0;

rSum(n) {
    if (n === 0) {return sum;}
    sum += n; /* sum = sum + n;* */
    rSum(n-1); // should I return or should I go?
    // Return is not needed, because a global variable holds the sum
}
```
Solution 1: Global Tracker
* This is the solution that you stumble upon in when you do this yourself. 
    * Relying on a global variable to keep track of the running total of SUm.
    * If you rely on the global variable, further function calls will use the memory of the global variable set by earlier function calls, and screw with the result. (*i.e. total is NOT 0 when the function is called, and the result is screwed*)

Remember:
* The last call to the recursive function (the one that triggers the base case) is the first one to complete
* The initial function call is the last to complete.

------

```js
var total = 0;

function sumRange(num) {
    if (num === 0) return total;
    total += num;
    return sumRange(num - 1);
}
```
Execution context

First function call 
sumRange 
Memory: Num = 3

Second function call
sumRange
sumRange(num-1)
Memory: Num = 2

Third function call
sumRange
sumRange(num -1)
Memory: Num = 1

Fourth function call
sumRange
sumRange(num -1)
Memory: Num = 0
Base Case Reached

Global memory:
total = 0
total = 6 (after second funtional call)
sumRange = (f) => // function definition placed in memory

Call Stack
5:
4:
3:
2:
1:
0: sumRange(3);

------

## How do I approach a base case if input is not a number?

### Getting to non-numeric base cases
* Array or string
    * Move index to beginning or end
    * Chip away until length is 0 or 1.

```js
const arr = [1, 2, 3];

recursiveLog(arr) {
    if (arr.length === 0) {/* Do nothing */}
    console.log(arr[0]);
    recursiveLog(arr.slice(1)); 
    //if you shift, return will be [1]. if you slice [1], you will return [2,3]
    // Slice also does not mutate the original array, but creates a copy of the array
}
```

## Solution 2: Use Parameters as Storage

```js
function sumRange(num, total = 0) {
    if (num === 0) return total;
    return sumRange(num -1, total + num);
}

sumRange(3);
```

Instead of using outside variables, we use the parameters to store values. This prevents reliance on mutable variables in the global scope.

## Solution 3: Add Total in Return Statement

```js
function sumRange(num) {
    if (num === 0) return 0;
    return num + sumRange(num - 1);
}

sumRange(3);
```

Using parameters as storage might minimize the size of the call stack

## Review
* A function is called
* New execution context is created
* Invocation pushed to Call Stack
* Code in function body runs
* Function calls itself
* Repeat until base case is hit
* Return back down the call stack

Recursion might be more memory intensive, as it may consume more memory to handle the call stack. 

## Advanced Topics

* Recursive functions are often nested in other (non-recursive) functions to be used as helper functions
* Tail-call optimization (supported in ES6) prevents a growing call stack. Implementation depends on browser.
* Multiple recursion (more than one recursive call in the function) can be used to solve more complex problems.

### Fibonacci Sequence Example (Multiple Recursion)

Fibonacci 
1   2   3   4   5   6   7
1   1   2   3   5   8   13

#### Naive Solution

```js
fib(n) {
    if (n < 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
```

### Another Use Case for Multiple Recursion

```js
arr = [4, 5, 6]
obj = {
    a: 1,
    b: {a: 3},
    c: arr;
}
```

codesmith.io/hardparts/5mxj



Recursion is good for flattening objects and tree-like structures.