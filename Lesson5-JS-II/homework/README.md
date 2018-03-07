# Homework #JSII

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* `for`
	* `&&`, `||`, `!`

	A for is a type of looping code. It basically runs "for as long as" the conditions you give it are being met.
	
	&& is the and operator. You can give an if statement multiple conditions to meet, but if you list them with && such as (this && this), both this and this need to be true.

	|| is the or operator. Similar in functioning to the and operator in that you can use it to incorporate different conditions for the if statement to look to meet, but in this case either statement can return true for the code to run. For example (this || that) needs to be true, they dont both need to be met, just one.

	! is the not operator. This one is a bit different from && and ||. Not basically flips around the boolean value that the condition will return. For example (!true) will return false because you are saying its (not true). As an expansion of that example if you write (!(10 === 10)) it will return false, because even though 10 normally equals 10, you are flipping that truth with the ! operator

2. From the top level of your `Precourse` folder, run `npm test JSII.test.js` to run the automated tests. You will fill out the functions in `homework.js` to make the tests pass.

For more information about Lambda School's six month CS program visit: https://lambdaschool.com
