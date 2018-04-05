Feynman Writing Prompts.
Lambda School Mini-bootcamp, Lesson 8 Homework
Alex McEvoy
04/03/18


The following are simple descriptions of relevant concepts.

1.) prototype - Classes in Javascript are like creating a blueprint for a robot, potentially with a few properties and methods built in, and a few behind the scenes abilities, or methods. These behind the scenes features of a class all live within what we call the prototype. The prototype of a class is a shared area of code, where all the instances of a class can access. Think of it like a hidden closet where we store all of our tools. Every time we create a new instance of a class, or create a new object using that class, that object has access to the whole closet full of tools. The benefit of having a closet, where all the objects can go get a tool, is that we don't have to give every object their own set of tools, they can just share the ones in the closet. This is the same as not copying the same code, again and again for each instance of an object, and just writing it once, for all to use.

2.) Constructors - We briefly mentioned constructors above, but what are they? In JavaScript, a constructor is essentially a function which creates a new instance of an object, according to select rules. The rules are the assignments laid out in the constructor. Another way to say it might be that the constructor is both the blueprint for the class, and the machine which uses the blueprint to create a new object. The constructor assigns the objects properties, and defines it's methods (at least the ones not in the prototype. )
