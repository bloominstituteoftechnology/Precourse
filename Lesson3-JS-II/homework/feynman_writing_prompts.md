# Feynman Writing Prompts

## For
In programming when you want to iterate something we use `for loops`. If we want to iterate and print the numbers 1 to 5 for instance we would do this:

```javascript
for(let c = 1; c  <= 5; c++){
	console.log(i)
}
```

## &&, ||, and !

AND (`&&`), OR (`||`) and NOT (`!`) operators are used in conjunction in evaluating conditions, common usage are for the if statements, for-loops, and while loops.

**&&** - evaluates true if and only if both expressions are true
**||** - Evaluates true if one of the expression is true
**!** - Flips the current boolean value. An example would be

```javascript
let theValueisTrue = !false;
```

## Arrays

Arrays are essentially a list of something, in real life arrays can be like your bookshelf, a bookshelf can be sorted, searched through and most of all is a collection of books!

An example of an array

```javascript
let myBookshelf = ['Harry Potter', 'Lord of the Rings', 'Head First Java', 'Head First Design Patterns'];
```

### Accessing Arrays

`myBookshelf[0];` This returns the string 'Harry Potter' 

### Basic array methods
```javascript

// Inserts at the end of the array
myBookshelf.push('Eloquent JavaScript');
// Insert at the front of the array
myBookshelf.unshift('The Mystic');

// Removes the last element
let lastElement = myBookshelf.pop();
// Removes the first element
let firstElement = myBookshelf.shift();
```