# Objects

Objects are collections of data that aren't strict on the order of the data, but how the data is paired together.

## Example

```javascript
let object = {breakfast: "apple", lunch: "sandwich", dinner: "steak"};
let anotherObject = {
  a: 2,
  b: 3,
  c: 5
 }
```

Objects associate two values in which some key allows us to access a specific value that is associated with that key.

# Properties

An object is JavaScript contains key:value pairs and these are called properties.  

# Methods

The values of an object can be functions.  We call these object-based functions "methods".

## Example

```javascript
let objWithMethod = {
	name: "Fred",
    age: 33,
    sayNameAndAge: function() {
    	console.log(`Hi! My name is ${this.name} and I am ${this.age} years old!`);
    }
}
```

# for in loop

Use this to access the properties of the object in a stepwise fashion.

## Example Using objWithMethod from above

```javascript
for (let key in user) {
	console.log(key);
    console.log(user[key]);
}
//printed to the console:
// --> name
// --> "Fred"
// --> age
// --> 33
// sayNameAndAge
// function() {console.log(`Hi! My name is ${this.name} and I am ${this.age} years old!`);}
```

# Dot vs. Bracket Notation

Dot notation uses this syntax `objWithMethod.name` will return "Fred"
Bracket Notation uses this syntax `objWithMethod['name']` and will return "Fred"

***NOTE: You must use a string or number with bracket notation or a variable that points to a string or number or it will not work.***
