Feynman Writing Prompts.
Lambda School Mini-bootcamp, Lesson 7 Homework
Alex McEvoy
04/02/18


The following are simple descriptions of relevant concepts.


1.) Objects - Objects are like arrays in that they are containers for lots of different variables. They can hold whatever type of information we want, and we can call on them to offer up that information. In how we call up that information however, is where Objects and arrays differ. In an array, we use numbers, or indexes to keep track of where the items are in the array, whether their first second, third etc. In Objects we use keys to keep track of our information. Keys can be thought of like in a dictionary, where we have a whole book of words. The definition of those words is the equivalent to our values in an Object. We use the key (the dictionary word) to look up the value (the dictionary definition). Object also have another feature in that they can have methods. These are basically functions which live inside the confines of an object, and are only accessible through that object. Functions have access to all the values within an object, and can have all the flexibility of normal functions.

2.) Properties - The properties of the object are the key:value pairs described above. They are variables which live inside and object, and to access or change them, we have to access the object itself first. They are all the characteristics of the object that don't perform an action. If the object is a car, for example, the properties could be its color, make, model, how many miles it has, or how many seats.

3.) Methods - These are all the parts of an object that perform actions. They are basically functions that live within the confines of the object and act within that environment. They have access to all of the objects properties, but cannot access things outside of the environment without them being explicitly passed in. Think of methods like a cook trapped in a kitchen. They can make food with whatever ingredients are available in the kitchen, but if they need something from outside the kitchen they need to have it passed in to them. Likewise, they can make food and pass it out of the kitchen. They can even make another cook and pass them out of the kitchen!

4.) for in loop - Sometimes we need a way to cycle through all of the items in an object. This was easy with arrays, since all the items are sorted according to an index, or a number that we can just cycle through using the counter system in a basic for loop. With Objects, however, we need something a little more specialized. a for in loop goes through each item in an object, and singles it out so that we can do stuff with it.

5.) Dot notation vs bracket notation - When accessing elements of an object, we have two options. We can use our familiar bracket notation that we used with arrays, or we can use a new method called dot notation. dot notation uses a period and the name of the property to access that objects property, such as person.age, or dog.name. This syntax is more straightforward and easier to read than bracket notation, plus it indicates clearly that you are accessing an object, and not an array. Bracket notation is useful, however, when we need to access an object property or method using a variable name, like action = doStuff.
person[dostuff]();
