```js
function countDown(start) {
  if (start < 0) {
    return;
  }
  //count down to 0
  console.log(start);
  countDown(start - 1);
}

countDown(2);
// 2 1 0

// countDown is called
// start: 2
// base case is false
// log 2

  // countDown is called
  // start: 1
  // base case is false
  // log 1
  
    // countDown is called
    // start: 0
    // base case is false
    // log 0
    
      // countDown is called
      // start: -1
      // base case is true
      // return;
      
    // no more commands (return)
    
  // no more commands (return)
  
// no more commands (return)

////////

// What about if you just switch two statements together?

function countWhat(start) {
  if (start < 0) {
    return;
  }
  //count down to 0...?
  countWhat(start - 1);
  console.log(start);
}

countWhat(2);
// 2 1 0

// countDown is called
// start: 2
// base case is false

  // countDown is called
  // start: 1
  // base case is false
  
    // countDown is called
    // start: 0
    // base case is false
    
      // countDown is called
      // start: -1
      // base case is true
      // return;
      
    // log 0
    // no more commands (return)
    
  // log 1
  // no more commands (return)
  
// log 2
// no more commands (return)

// Switching the two statements together means the recursion happens before the logging.
// Remember, the recursion isn't done once the if conditional is true. This is ESPECIALLY apprent in this case.
// After the initial conditional return, you'll pop up right after you left off in the last copy of the function. You will proceed to log the value of the start variable of the copy, then return out since there's no more instructions left
// Which then you'll pop up right after your left off in the last copy before that. And so on and so forth.
// And now countDown has become countUp
```
**Study the crap out of the below**

```js
function sum(start, sumSoFar) {
  console.log('start', start);
  console.log('sumSoFar', sumSoFar);
  
  sumSoFar = sumSoFar || 0;
  // same as if (sumSoFar === undefined) { sumSoFar = 0; }
  
  if (start < 1) {return sumSoFar;}

  sumSoFar += start;
  
  const recursionResult = sum(start - 1, sumSoFar);
  return recursionResult;
}

sum(3);
// 3 + 2 + 1

// sum is called
// start: 3, sumSoFar: undefined
// sumSoFar === undefined is true, so sumSoFar = 0;
// base case is false
// sumSoFar = 0 + 3
  // sum is called
  // start: 2, sumSoFar: 3
  // sumSoFar === undefined is false. nothing happens (|| leave it alone)
  // base case is false
  // sumSoFar = 0 + 3 + 2
    // sum is called
    // start: 1, sumSoFar: 5
    // sumSoFar === undefined is false. nothing happens (|| leave it alone)
    // base case is false
    // sumSoFar = 0 + 3 + 2 + 1
      // sum is called
      // start: 0, sumSoFar: 6
      // sumSoFar === undefined is false. nothing happens (|| leave it alone)
      // base case is true
      // return sumSoFar (6)
    // recursionResult: 6
    // return 6
  // recursionResult: 6
  // return 6
// recursionResult: 6
```

So... why do this mess at all?

Well, there are some things out there that can be worked out with recursion but not with loops.

The best example of that is tree structures.

```js
{
    name: 'Enrique',
    children: [
        {
            name: `Haydee`,
            children: [
                { name: 'Diandra', children: [] },
                { name: 'Austin', children: [] },
            ]
        }
    ],
}
```

If you wanted to extract all the children from this sprawling tree structure object, an iterative loop would be bad for this. However, recursion would do this well.

------

Here's more information about using `||` in variable assignment.

> This is made to assign a default value, in this case the value of y, if the x variable is falsy.
> The boolean operators in JavaScript can return an operand, and not always a boolean result as in other languages.
> The Logical OR operator (`||`) returns the value of its second operand, if the first one is falsy, otherwise the value of the first operand is returned.
> For example:

```js
"foo" || "bar"; // returns "foo"
false || "bar"; // returns "bar"
```

> Falsy values are those who coerce to `false` when used in boolean context, and they are `0`, `null`, `undefined`, an empty string, `NaN` and of course `false`.

From [Stack Overflow](https://stackoverflow.com/a/3088161).