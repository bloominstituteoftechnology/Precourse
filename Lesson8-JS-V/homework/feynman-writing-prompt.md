Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* `prototype`
	* Constructors

### What is `prototype`?

In Javascript, you can set up "Classes", which are like templates for objects. For example, if you want to make a whole bunch of objects representing students, you can individually set `name`, `grade`, `testScores`, etc. for each student, or you can create a class that will set up the student object for you, with the the properties you need.

In each of those objects, you can also add a method, like perhaps an `avgTestScore()` method. You can define this method in the `Student` class, and all objects born out of this class will have this method as part of the object. The problem arises if this method is exactly the same across all `Student` objects; every `Student` object will have the same exact method in it, and the computer's memory will fill up with duplicate instructions to do one thing. This is kind of wasteful.

This is what `prototype` addresses. `prototype` is a shared resource that all objects of a class have access to. If we add the `avgTestScore()` method to the `Student`'s `prototype`, we only tell the computer once, and the computer will have one instruction set for `avgTestScore()`, but all objects from `Student` can use it.

### What are constructors?

A constructor is a function which sets up a class, a template for objects. A constructor function can set up properties for the object. You can also set up the function so that when you tell the function any information when you call the function, the function will pair that information to properties to make a fully decked-out object.

```js
const Wizard = function(name, level, magicSpells) {
	this.name = name;
	this.level = level;
	this.magicSpells = magicSpells;
}
// The above constructor function sets up the Wizard class. We can make an object like so:
const morlin = new Wizard(`Morlin`, 3, [`Fire`, `Magic Missle`]);
```

Instead of typing out properties in objects all day long, we can set up a template with a constructor function, then use that function to fill in all the data.
