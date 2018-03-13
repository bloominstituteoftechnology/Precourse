# Homework: Introduction to Javascript, JSI

## Instructions
---
1. Feynman Writing Prompts - In a seprate text file that you create, write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Variables
	* Strings
	* Functions (arguments, `return`)
	* `if` statements
	* Boolean values (`true`, `false`)

	A variable is something which holds information. A variable often has a name, and that name is used in code to indicate in short where the information it holds goes acting like a placeholder. This is especially useful as wel can change the values within variables through our code. For example, the variable "name" might hold the world 'cyndi' that is a user. In the program cyndi may decide that she wants to change the spelling of her name to 'cindy'. She changes the variable "name" and it now holds her newly spelled name without having to go through all of the code and change this information individually.

	A string is a value that can be held by a variable that usually indicates it is a word, or made up using characters. For instance, the string 'John' allows the name 'John' to be written out using the alphabet and it be saved as a value inside of a variable. An interesting thing about strings, though, is you can also write numbers as being strings, as in the program reads them as characters like in the alphabet, not a numerical value. Strings are useful for writing out information that will be displayed to the user, and writing a number as a string can make things easier if you are not intending to use that number for any sort of calculations. For example, 'Today it will be 23 degrees' is much easier to write out than 'Today it will be' + 23 + ' degrees.'

	A function is an action that is programmed in Javascript that makes something happen. A function, similar to variable, has a name, so that it can be easily referenced and called upon when the action needs to be performed. For example, the function "addNumbers();" can be called upon to call on a function we wrote that adds numbers you enter into it. Functions are great because you can code actions that need to be done multiple times, such as calculations, and simply call on them to do the action with the information you have rather than having to write out complex code each time something needs to be done. 

		Arguements are pieces of information, such as variables, or even other functions, that are given to a function from the outside (global) code for it to use within the function you are writing. For example, if you want the addNumbers function we referenced earlier to take a variable called "firstNumber" that the user entered earlier in the code, you can give it to addNumbers as a arguement within the brackets. function addNumbers(firsNumber) {};

		Return is an action that is performed within a function. If you are doing something within a function that you want to use outside of that function in the rest of your program, then you need to use return. Functions have a thing called scope, which means things that are created within the function only exist within the function unless it is somehow given to the rest of the code to be used globally. Return is used to do exactly this, is pass off what was created in a function to the code that called upon it from the outside.
	
	If statements perform an action that can have multiple conditional outcomes. You can basically tell the code "if this happens, make this other thing happen." and you can set up a specific thing that will result from that condition. An if statement can be followed by if else, and else, which can only come after an if statement because they give alternative conditions and actions to the one you set up in the if statement. A good statement to exemplify how an if statement works is like asking your friend to order food from a place where you aren't sure of the menu, and you say "If (If statement) they have cookies and cream icecream, get me that. If they don't have cookies and cream but they do have mint flavor (if else), then get me that instead. If they don't have either (else), just get me a vanilla ice cream."

	A boolean is a value that is either true or false, nothing else. It is similar to a computer in how a computer on the most basic level of programming is made up of 0 and 1. A boolean is either or, like a light switch that is either on or off. It is a value that is used for statements that need to be either one of two things, true or false. Are the lights on? True if on, False if they are off. Is the sky blue? True. Is the sky blue at night? False.


2. Install Node and NPM.  NPM comes packaged with Node. https://nodejs.org/en/download/

3. From the top level of your `Precourse` folder, run `npm test JSI.test.js` to run the automated tests.  At first all of the tests will be broken.  You will fill out the functions in `homework.js` to make the tests pass.


For more information about Lambda School's six month CS program visit: https://lambdaschool.com
