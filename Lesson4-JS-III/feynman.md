# Feynman writing prompts

## Instructions
---
Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Objects
	* Properties
	* Methods
	* for in loop
	* Dot notation vs bracket notation

### Objects
Objects, like arrays, are ways of storing data. In objects, however, you can store pretty much anything - even functions! Objects are designated by curly braces {} and contain things called key value pairs. The key is a label, and the value is a piece of data. Here's what an object may look like:

const newObject = {
    firstName: 'Jeffrey',
    lastName: 'Unknown',
    age: 29,
    increaseAge: function(new) {
        this.age += new;
        return this.age;
    };,
    other: [1, 3, 'go away', 7],
};

### Properties
An object is simply a collection of properties, and a property is an association between key-value pairs in an object. In the example above, firstName is a property in newObject, with a value of 'Jeffrey'.

### Methods
If an object contains a property with a value that is a function, the property is known as a method. It's just another name for a function inside of an object.

### for in loop
This is much like the regular 'for' loop, in that it tells the computer to loop over something for a period of time. The 'something' in this case, is key:value pairs in an object. The loop will iterate over each key in an object, and finish when all keys have been iterated over.

### Dot notation vs bracket notation
Both of these methods allow you to access the values in key:value pairs. For example, to access the 'name' property in 'newObject' object, you could do it like this:

newObject.name;
newObject['name'];

If bracket notation is used, it must be passed a string, number, or variable pointing to a string or number.