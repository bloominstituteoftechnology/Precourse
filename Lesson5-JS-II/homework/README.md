# Homework #JSII

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* `for`
	* `&&`, `||`, `!`

`for` is a statement that creates a mechanism that searches through information to find out what's inside- this mechanism is called a loop. To use this statement, you when need to create some rules for searching that data and that would be defined after the `for`  statement. You would write `for` and then a parenthesis. Then there are three rules that you would define for the loop to run through the information to obtain what you are looking for. First is called "initialization" and this rule tell the computer where to start looking. The second rule is called the "condition" and this tells the computer when and where to stop looking for the information. So with the first and second rule you are defining the paramenters for where you're looking for the information within a particular "data set." The last rule is telling the computer how to supply the information. This is called the "final expression." If you have a "data set" of everyone's name in a class, you would want the "final expression to tell you all the names in a sequential order (ex. like the first person's name, second person's name, and so on) and so you would define that to `1++` which would tell the computer to list one name after another. 

`&&`, `||`, `!` You would use these statements to compare two separate logical values. When you use these you will either get an answer of "true" or "false." For example, say you have one comparison operator of "6 > 7" this, we know, is false. Say we have, also "7 > 6", which we know is true. To compare both of these at once using the `&&`- this is asking whether or not both of them are true. If they aren't both true, which our examples arent, then it will return an answer of false. If they are both true, then it will supply us will a true answer. The `||`operator compares the two and if either one of them are true, then it answers true- just like out first example. The `!`operator converts whatever is behind it to be the opposite. For example if you have "!(7 > 2)" even though originally we know that 7 is indeed greater than 2 and it would render to be true, the `!`swaps to answer to be opposite. So "!(7 > 2)" would be false. This goes for any true/false value, so if it is "!(200 > 4)" it would render to be true.

2. From the top level of your `Precourse` folder, run `npm test JSII.test.js` to run the automated tests. You will fill out the functions in `homework.js` to make the tests pass.

For more information about Lambda School's six month CS program visit: https://lambdaschool.com
