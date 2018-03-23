## What is a `for` loop?

A `for` loop tells the computer to do one thing a bunch of times. Like, you can say the computer to count to 10 and `console.log()` it, or multiply a number several times to find the exponent.

There are actually different types of loops, but the `for` loop is notable for being particular. When you do a `for` loop, you have to describe how many times the computer will loop it for, but the `for` loop allows you to tell the computer where to start counting, when to stop counting, and even how to count.

```js 
for (count = 0, count <= 10, count += 2) {
    console.log(count);
}
```

The above loop will count and `console.log()` *even numbers* from 0 to 10. This is because we tell the computer to start counting from 0, `count = 0`, and count no higher than 10, `count <=10`. But we also tell to count by 2's, `count += 2`. Conveniently, all these instructions to the computer are all on one line, which makes it easier for you and fellow humans to read and understand.

## What are logical operators?

Logical operators allows us to say "true" or "false" as a whole to a bunch of expressions together. For example, if we need *two*, or more, things to be true for the computer to do something, we can use `&&` to tell the computer just that.

```js
if (grade >= 90 && grade < 94) {
    console.log('Your grade is A-');
```

**Both** expressions must be true before the computer can do the action inside the `if` statement. If one of them is false, nothing happens.

What about if only one of them needs to be true? You can use `||` to tell the computer "or" or "either".

```js
if (10 > 9 || 0 === 100) {
    console.log('Work, work!');
}
```

The computer will output `'Work, work!'` to the console, because one of the conditions is true. That is, if `10 > 9` **OR** `0 === 100` is true, then `console.log('Work, work!');`.

Finally, there's the `!` operator. It means "opposite". It makes what is true, false, and what is false, true. All you have to do is stamp it in front of an expression.

```js
!true // false
!(0 === 100) // true
```

