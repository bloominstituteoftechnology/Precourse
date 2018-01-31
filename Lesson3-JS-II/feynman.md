# Feynman Writing Prompts

## Instructions
Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* `for`
	* `&&`, `||`, `!`
	* Arrays


### 'for'
'for' tells the computer to repeat a task, over and over again, until a certain condition is met. For example, we could tell the computer to give us every number between 1 and 10, but not any other number. Here's what this would look like:

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

'let i = 1' is where the computer starts. We've told it to start the program at number 1.

'i <= 10' is a condition that the computer checks every time it goes through the task. As 'i' started equal to 1, it's true that i <= 10, so the computer will say 'true' to itself and continue on.

'i++' is the last part of the puzzle. If the previous condition ('i <= 10' in this case) equals true, the computer will run the code between the {} and then hop up to increase i by one. That's what 'i++' means - increase i by one. The computer does this, hops back over to the condition statement ('i <= 10'), checks if it's true, and continues the process.

### &&, ||, !
These symbols tell the computer to compare something and tell us if they're true or false. 

&& means 'and'; it compares two things and gives us a 'true' if **both** of them are true. If will return 'false' if **either** of them are false.

|| means 'or'; it compares two things and gives us a 'true' if **either** of them are true. It will return 'false' if **both** of them are false.

! means 'not'; it tells the computer to give us the opposite of what we gave it. For example, if we gave it a math problem that evaluated to 'true', ! would give us 'false'.

### Arrays
An array is a way of storing information in order. You can put all sorts of information in an array, like a number, string, boolean (true/false), and more. Arrays are designated by []. Here's what one looks like:

const newArray = [1, 'hello', true, 'goodbye', 77];

As mentioned, arrays are **ordered**. That means you can access any piece of data in an array by knowing its index. An index is the way an array counts how many pieces of information are in it. Indexes start at **0, not 1**, so in the above example, 1 is at index 0, 'hello' is at index 1, and so on.