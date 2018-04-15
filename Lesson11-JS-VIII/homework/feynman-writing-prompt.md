# Feynman Writing Prompts 

Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Recursion

## What is Recursion?

Recursion is, at the very heart of it, the operation of a function that calls itself over and over again until it doesn't. 

The form of recursion feels like very much like a loop, and indeed you could do recursion in place of a loop if you'd like (*and virtually vice-versa*). But the engine that drives the behavior is vastly different from loops.

In a loop, the instructions within the loop gets repeated over and over again. The number of times it loops can be set with a counter variable, like with `for` loops, or is determined by the size of the object in the case of object/array/string methods. 

But recursion is different. Every time the function calls itself, it creates a new copy of the function, a function in its own scoped universe, which calls itself, and creates a new copy of the function, which calls itself, and creates a new copy of the function, and on and on. Once the stop condition (i.e. *base case*) is reached (*you did put a stop conditional in, right?*), each copy of the function resolves itself, with all of these function universes resolving and collapsing into a, hopefully, `return`'ed output.

The idea of a function calling itself and effectively looping without a varying (*mutating*) counter variable like in loops is one of the reasons why recursion is employed extensively in functional programming. It can also solve certain problems that normal loops can't, though that is far beyond my current ken.


