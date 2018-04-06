Feynman Writing Prompts.
Lambda School Mini-bootcamp, Lesson 10 Homework
Alex McEvoy
04/03/18


The following are simple descriptions of relevant concepts.

1.) Closure - When we write functions in Javascript, we sometimes want to manage which variables or even parts of the code that those functions have access to. When we have a function inside of another function, many programming languages say that that function (the inner one) only has access to the variables within it's curly braces. It can't see or alter the ones in the function directly outside of it, and it can't access the ones in the global space (aka the space outside of both functions). With closure, we can access variables external to a function whenever we call that function. This allows us to alter and save variables that would normally go out of scope and would normally be lost. This allows us to use closure to store cache variables and utilize callback functions in all sorts of useful ways. 
