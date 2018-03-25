Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Objects
	* Properties
	* Methods
	* for in loop
	* Dot notation vs bracket notation

## What are objects?

Objects are of another data type. When making one of your own in Javascript, they're similar to arrays with a few distinguishing features:

* You denote them with curly brackets, `{}`.
* When putting info into an object, you'd have to pair each piece of information with a name that describes it. This name is called a "property" or a "key".

```js
const meObj = {
    name: 'Ron',
    age: null,
    city: 'Los Angeles',
};
```

In an array, you'd use a number, an *index*, to get a value. But in objects, we would use those properties to grab those values. For example, you tell the computer `meObj.name` to get the object's name, `'Ron'`, or `meObj.city` to get `'Los Angeles'`.

The use of names instead of numbers is a small change, but results in a big difference between arrays and objects. Arrays are good for lots of similar data that you might want to sort or do work on, like test scores of all students in a class. But objects are good for varying bits of data about one thing, like a student and her name, address, phone number, and grade.

## What are properties?

As mentioned above, properties are the names paired with data in the object. The data paired with properties are called "values". Again, arrays have numbers that links data, but in objects, there's a "property-value pair".

Properties are useful because they describe and organize the information they're paired to. To illustrate, if you put the values in `meObj` into an array, ` meArr = ['Ron', null, 'Los Angeles'];`, it's hard to tell what those values mean. You can kinda guess it's about a person, but what does the `null` stand for anyways? But in objects, those values now have something that helps you understand them: `name`, `age`, and `city`. 

## What are methods?

Methods are just functions. They are actions or operations the computer does for you. What makes them different from functions is that they do those actions on *objects*. 

In other words, methods need an object to do stuff. Without it, the method doesn't work. 

```js
const meObj = {
    sayHello: function() {
        console.log(`Ron says, 'Hi!'`);
    },
};

sayHello(); // Computer goes, "Umm, that's not a function I know of."
meObj.sayHello(); // Ron says, 'Hi!'
```

As shown above, going `sayHello()` doesn't work, because `sayHello()` is a method from `meObj`. So you have to mention `meObj` whenever you want to do `sayHello()`. You do that by telling the computer, "`meObj.sayHello()`".

(*Functions that need to work with other things, like strings and arrays, are also called methods. Examples are `splice()`, `map()`, and `match()`. You pair them the same way, like `arr.map()`. They're also called methods because deep deep down inside, everything in Javascript is an object. ...I think Diandra can handle that explanation better than I can.*)

## What's a `For ... In` loop?

It's a specific type of loop that's best to use with objects. This kind of loop was made because it was difficult for other loops to work with objects. For example, the `for` loop is great for arrays, partly because the variable used to count and limit the loops can also be used to grab values from each index every time it loops. But remember, *properties* (*names*), not *indices* (*numbers*) link data in objects, so doing a `for` loop with objects is harder.

Fortunately, that's where the `For ... In` loop comes in.

```js
for (let key in meObj) {
    console.log(key, meObj[key]);
}
```

The line `let key in meObj` means let this variable `key` be a property in the object `meObj`. Then the computer will do the action inside the loop on *each* property in the object. In this case, the action is logging to the console `key`, the property's name, and `meObj[key]`, the value paired with that property in `meObj`.

The `For ... In` loop can work with other data types (*because everything is a bloody object*), but it's generally not a good idea to do it with other types.

## What is dot notation and bracket notation? What's the difference?

These two notations are different ways to reference information in objects. The dot notation takes the object name and the property and puts them together with a `.`, like `meObj.name`. In contrast, bracket notation works like how you reference indices in an array. You would go `meObj['name']` to access the same value.

Both do the same thing, but have some differences:
* In bracket notation, the actual name of the property is in quotes. You don't need to do that in dot notation.
* `meObj.name` will literally look for property `name` in `meObj`. If you have a variable referencing the property name, like `const dude = 'name'`, `meObj.dude` will absolutely get you nowhere. 
    * In bracket notation, you can use variable references in brackets, so `meObj[dude]` will get you the value of `name` from `meObj`.