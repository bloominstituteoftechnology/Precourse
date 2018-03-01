# Homework #JSIII

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Arrays


Arrays are a container of variables within Javascript. For example if you have a grocery list in an array you would type the items into the list this way: 
`const groceryList = ['coffee', 'pinapple', 'avocados', 'kimchi'];` This will index your grocery list. The first item is indexed at 0, though, and not 1. You can use a `for` loop to list out what is contained in your array and you may add and subtract various things to and from an array, but only from the first and last spot within the array list. When you add to the first index spot of an array it will shift all of this to be one higher in your list index to make room for the new item. The newest item will always be indexed at 0. If you remove from the beginning of the list all of the items with shift to an index of one less than the were before. For example if you remove 'coffee' that resides at the 0 index spot, 'pinapple' as well as the other listed items, will shift one to the left and 'pinapple' will now be in the index 0 postion. This is the same for adding and removing at the end of a list. To do this you would use these "methods":

`studentsNames.push ('turkey');` This will add this item to the end of your array
`studentsNames.pop ();` This will remove the last item from the end of an array - it doesn’t read what’s in the parenthesis - you cannot pop specific items from an array just the last item in the list.
`studentsNames.shift ();` This will eliminate the first item and shift all of the items to the left one space 
`studentsNames.unshift (’sauerkraut');` This will add an item to the front of an array and shift everything over to the right one index space over to the right.



2. 3. From the top level of your `Precourse` folder, run `npm test JSIII.test.js` to run the automated tests. You will fill out the functions in `homework.js` to make the tests pass.


For more information about Lambda School's six month CS program visit: https://lambdaschool.com
