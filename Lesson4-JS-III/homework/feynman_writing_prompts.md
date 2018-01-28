# Feynman Writing Prompts Lesson 4

## Objects

Objects can be associated with the real world definition of objects in that they really are "objects". Technically in JavaScript, objects are just a collection of key value pairs. Objects can be created using `{}`

```javascript 
const me = {}
```

## Properties

On the other hand properties are what the object "contains", for example:

```javascript
const me = {
	name: 'Chris',
	age: 22
}
```
Note: Properties can be any data type.

## Methods

If properties are what the object contains, methods are what the object can do
```javascript
const me = {
	name: 'Chris',
	age: 22,
	// Method
	printName: function(){
		// the 'this' keyword references the current instance
		return this.name;
	},
}
```

## for in loop

The for-in loop is functionally the same with the for-loop when iterating for instance with lists, an example would be iterating over the keys(properties) in the object

```javascript
// me is the object created above
for(let key in food){
	// prints the current key, the first would be "name"
	console.log(key); 
	// prints the VALUE of the current object
	// the first case would be "Chris"
	console.log(food(key));
}
```

## Dot notation vs bracket notation

The Dot notation is how you access object properties and methods, the bracket notation is essentially the same, but in a way better. Better in the sense that some key/property can be spaced/symbol separated

For instance:

```javascript
const me = {
	"my-full-name": 'Chris',
}
// This won't work
console.log(me.my-full-name);
// This on the other hand will
console.log(me['my-full-name']);
```
