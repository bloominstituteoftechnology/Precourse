## What are arrays?

Generally, we assign one 'thing', or value, to a variable, like a name, or a number, or simple operation. This is good a lot of the time, but sometimes we might have a list of names, or a bunch of numbers we want to add together. Typing all that every time you want a function to do operations on these values would be a bit too much. But even putting each value into a variable would be tiresome too:

```js
let strA = "No";
let strB = "one";
let strC = "should";
let strD = "live";
let strE = "this";
let strF = "way.";
```

Because of this, people thought of "data structures": ways of arranging data in simpler ways that makes sense to us. One of these data structures is **the array**. The array holds a bunch of values in a "box", which can be assigned together to a variable and can be worked on as a whole, like adding numbers to all of them, or combining them together to make a giant string.

```js
const array = [1, 2, 3];
```

Instead of having multiple variables to map to each value, or worse just typing all of it out every time, we can assign multiple values to a single variable `array`. 

We can access individual values in the array with `arrayName[index]`

```js
const names = ['Ron', 'Andrei', 'Colt', 'Amy', 'Sandy'];
goodName = names[4] + ' ' + 'Cheeks'; // goodName is now 'Sandy Cheeks'
```

`index` refers to the position of the value in the array, like a mailbox number in a row of mailboxes. The first cubby in the box is index 0, because computers love counting from 0. So if you want to get Sandy's name, you would go `names[4]`, which means go to `4`th index from array `names` and get whatever is in there, `Sandy`.