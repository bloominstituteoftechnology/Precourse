## Feynman Writing Prompts 

Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Callback Functions

### What are Callback Functions?

A callback function is a function that is used as an argument to another function, and is called and used by that other function. In other words, when you teach the computer how to do something, by making a function, you tell the computer what it needs to know in order to do it, like numbers, strings, or whatever (*i.e. paramaters*). Sometimes, you tell the computer how to do another action as part of what it needs to know to do the current one. That would be kind of like what a callback function is.

```js
const sumOfTwoNum = (numbA, numbB) => numbA + numbB;

const heyWeAreAddingConsecutively = (number, cb) => {
	console.log(`We're adding ${number} and the next consecutive number, ${number + 1}, together!!!`);
	console.log('Answer is', cb(number, number + 1));
};

console.log(heyWeAreAddingConsecutively(42, sumOfTwoNum));
// -> We're adding 42 and the next consecutive number, 43, together!!! Answer is 85

////////////

const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce(sumOfTwoNum));
// -> 15
```

In the above, we have a function called `sumOfTwoNum` that tells the computer to add two numbers together.

In the next function, `heyWeAreAddingConsecutively`, there's a function that's supposed to add a number and a number + 1 together. But if you look in the body of the function, there's nothing that actually tells the computer how to add these two numbers together. No worries, because the function has a `cb` parameter that accepts a function as an argument. There, we can tell the computer how to add so it can do what we want it to. Now, we already told the computer how to add with the function `sumOfTwoNum`, so instead of telling this new function how to do the same thing again, we just tell it that it needs to know `sumOfTwoNum`.

In the body of `heyWeAreAddingConsecutively`, we instruct the function to use `sumOfTwoNum` through the parameter `cb`. So, since we told the function `cb` is `sumOfTwoNum`, it will look at `cb(number, number +1)` and make it into `sumOfTwoNum(number, number +1)`.

Finally, we have a `reduce` function that aims to take all of the values in the array and spit out one value. It does this by having a running value, which is called the `accumulator`, and a value from the array, and does an operation. The result of the operation is updated to the `accumulator`, the running total, then it compares that with the next value of the array, and does an operation again. It keeps doing this until it has gone through all the values of the array. 

The thing with `reduce` is that the operation it does can be done a couple of ways, so the function requires you to give it a callback function: a function that tells it what to do with the `accumulator` and the value reduce is working with. For example, you can type right in the paranthesis of `reduce`: `(function(a, b) {return a * b;})`, and `reduce` will put the `accumulator` as `a` and the array value as `b`, and multiply all of the values of the array together as it works through the array. 

Or you can have it sum all the values in the array together by giving it a function telling it how to add. Ah, but we already have a function that tells it how to add. So we don't have to repeat ourselves, and we can just do this:

```js
arr.reduce(sumOfTwoNum);
``` 