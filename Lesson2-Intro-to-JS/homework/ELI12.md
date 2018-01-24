# Explain It Like I'm 12
 
## Homework: Introduction to Javascript, JSI

### Basic JS Concepts

1. Variables

Variables let you remember a piece of information, and recall it later. In order to bring up this piece of information, you need a name or reference for it first. For example, if you want to remember that Ben has 12 apples, you might create an abbreviated reference (a "Variable" name) such as "BenAppleCount". You can represent this simply as `BenAppleCount = 12`. If you define a variable in this way, it will allow you to use it in a program. (Maybe you want to create an app that keeps track of how many apples people have, for example.)

2. Strings

A string is a set piece of information. It can be a number, a word, a sentence, etc. This is a piece of information, formatted in a consistent way (so case matters!), that you can use in a program. Like we said before, let's say Ben has 12 apples. The number 12 counts as a string if you're using it in an app. Another example: You might start your "Apple Counting" app with a greeting to your users, saying "Hello, User!". The phrase "Hello, User!" is also a string. Note: if you write it as "hello user", this is a totally different string! (Apps are very picky about these kinds of things, so be careful when you're writing your strings and instructions out.)

3. Functions (arguments, `return`)

In JavaScript, a function is an operation that you want your app to do for you. Operations can include things like defining and setting variables, performing math calculations, etc. So you can write a function that says: "What is the total number of apples that my friends and I have?", and the app can calculate this for you if you provide clear instructions to it on how to do this. So you might say, first ask each person how many apples they have. Then once everyone has answered the question, you set up an addition problem for the app to solve. The addition problem you could imagine does something like "Add up the number of apples that Ben, Mary, Sue, Fred, and I have, and return the value". 

Some of the basic parts of a function are: 

- The name of the function: e.g. maybe you call it "AddAllApples" for short;
- How many times to perform the operation: e.g. 1 time total;
- The number and type of 'arguments' to keep track of: You can think of this as "How many people need to answer the AppleCount question?" (5 people), and "What type of information is being tracked here? (whole integer numbers);
- A method for getting the final value: e.g. The program should "`return`" a whole number integer (sum) of everybody's apples.

Here's an example of some of the parts you could include in the "AddAllApples" function:

- Function name? --> AddAllApples
- What to track? --> Number of apples per person
- How many people to ask? --> 5 people
- What are their names? --> Ben, Mary, Sue, Fred, (my name)
- What to do with this information? --> Add up the 5 numbers
- How do you want to get the number back? --> Whole number integer
- Do you want to get back any other information? --> No

4. `if` statements

Let's say you want to make sure everyone gets the same number of apples. And you want your Apple-Picking Robot, "iApple", to share out the apples in your orchard to you and your friends. You would need to consider a few things to get this to work automatically. You need to know how many apples each person has, and you need to compare these numbers with each other. And then you have some conditions to fulfill. For example, iApple is only 'happy' when he's made sure everyone has an equal number of apples. So he needs to run through some checks, and if he finds one person has 15 and everyone else has 12 apples, then he'll go pick and distribute more. You can define this in a program with `if` and `then` statements.

Some of the `if` statements that you could have iApple evaluate include:

- if Person A has Less-than Persons B through E, give Person A one more apple
- if the number of apples that Persons A through E have is Not-Equal (to that of the others), then distribute more apples
- if Persons A-C have 15 apples AND Persons D-E have Less-Than 15, give Persons D-E more apples
- etc.

`else` allows you to define alternatives. So for example, if you first check that everyone has an equal number of apples, and this evaluates to `true`, then you don't need to do anything. You may want to define this: e.g. "`else` iApple go recharge". (Everyone needs rest!)

5. Boolean values (`true`, `false`)

Boolean values are like a 'Yes' or 'No' answer to a 'Yes-or-No Question'. If I ask you "Does Ben have 13 apples?" and you know he has 12, you would answer 'No'. In programming an application, you would simply use the boolean value "`false`" when you evaluate (when you answer) this question. You can also ask and answer a question such as "Is the number of apples that Ben has Less-than-or-Equal-to 13?". In which case, the answer is 'Yes', but in a JavaScript program you would get back the answer in the form of the boolean value "`true`", because 12 is less than or equal to 13.

