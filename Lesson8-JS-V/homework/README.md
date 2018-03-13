# Homework #JSV

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* `prototype`
	* Constructors

A prototype is a base model created for an object that will be created many times over. For a website that will haves thousands, millions, or maybe even in the future billions of possible users, the code will be too clogged up and hefty to manage if the programmers needs to go in there and manage a seperate object for each user. What can be done to expedite this process is using a user prototype, which is made to be the base model which contains all the information and features that all users created will also have.

A constructor is an action which creates a new object based on a prototype, or base object. In the example of a website with users, a constructor would be the code that performs the action of creating a new user and inserting all the information specific to that user in the correct spaces of the user template. For example, a user prototype may have the variables firstName and lastName, but they will be blank. A constructor creates a new user with a unique object name, and inserts the information they entered while signing up for the account in those variable spaces to be saved.


2. From the top level of your `Precourse` folder, run `npm test JSV.test.js` to run the automated tests. You will fill out the functions in `homework.js` to make the tests pass.

For more information about Lambda School's six month CS program visit: https://lambdaschool.com
