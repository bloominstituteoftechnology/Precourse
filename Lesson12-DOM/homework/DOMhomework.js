/* 
  STEP 0: Create an empty array called 'toDoItems'.
*/

// code here

/* 
  STEP 1: There is a span element currently on the page with the innerHTML of 'This app was created by:',
          Using a querySelector, select the span by it's id ('createdBy'). Then using the innerHTML property,
          add your name to the END of the current innerHTML.
*/

// code here

/* 
  STEP 2: Create a class called 'ToDo'.  The constructor should have one string parameter called description, the description of the toDo.
          Add two properties to the class: 'description' which should be set equal to the description passed to the constructor, and 
          'complete' which should be set to false. Hint: use the 'this' keyword in the constructor function.
*/

function ToDo () {
  // code here
}

/* 
  STEP 3: Add a method called 'completeToDo' to the prototype of the ToDo class. 
          It will not take any arguemnts. 
          Inside the function set the ToDo's 'complete' property to true.
*/

// code here

/*
  STEP 4: This function, buildToDo, will have two parameters.  The first is an object of class ToDo and 
          the second is a numerical index.
           
          Inside this function it should:
            1.) Create a new 'div' element. Set this to a variable 'toDoShell'.
            2.) Give 'toDoShell' a class (for CSS) of 'toDoShell'.
            3.) Create a new 'span' element. Set this to a variable called 'toDoText'.
            4.) Using the toDo item passed in, set the 'toDoText' innerHTML to the value of the 'description' property on the toDo object.
            5.) Set the id of 'toDoText' to the value of the index argument.
            6.) Using an if statement, check to see if the 'complete' property on the object passed as the first argument 
                  is set to true. If it is, give 'toDoText' a CSS class of 'completeText'. If it is not, do not give it a class.
            7.) Append child 'toDoText' to 'toDoShell'
            8.) return toDoShell
*/

function buildToDo(todo, index) {
  // code here
}

/* 
  STEP 5: This function will build and return an array of toDo elements. It will take an array of objects of the ToDo class as it's only argument.
          Using the map method on the array passed in, use the 'buildToDo' function you wrote above as the callback passed to map. 
          Return the new mapped array.
*/

function buildToDos(toDos) {
  // code here
}

/* 
  STEP 6: Now that we can build an array of toDo elements, we want to make these elements appear on the screen, 
          to do this we will create a 'displayToDos' function.
          1.) Select the element with the id 'toDoContainer'.  Save this to a variable: 'toDoContainer'.
          2.) Set the innerHTML of 'toDoContainer' to an empty string. (This will let us refresh the elements, and display the new toDos)
          3.) Using the buildToDos function pass it the array toDoItems as it's only argument.
          4.) Using the result of (3), loop over the array appending each element to 'toDoContainer'.
          5.) at the very end of this file, the line before the comment "DO NOT CHANGE ANY CODE BELOW THIS LINE", call this function.

          You can now load your html file in your broswer and see your work so far.
*/

function displayToDos() {
  // code here
}

/* 
  STEP 7: This function, 'addToDo' will add a new ToDo to the 'toDoItems' array.
          NOTE: We have not learned about input HTML elements yet, so we will give you a little more code to go on here.
          'newToDo' is an text input element. All text input elements have a property called 'value', this value will be whatever is typed into 
          the text box on the page.

          1.) Using the value property on 'newToDo', create an new ToDo object using the ToDo class and pass the value as the description.
          2.) add the object from (1) into the toDoItems array.
          3.) Set the value of newToDo to an empty string (this will clear the text in the box allowing the user to enter another item).
          4.) Call displayToDos to refresh the toDos displayed
*/

function addToDo() {
  // code here
}

/* 
  STEP 8: In this step we will fire addToDo everytime the 'ADD' button is clicked.
          1.) Select the element with the id 'addButton'
          2.) Add a 'click' event listener to this element, passing it the addToDo function as a callback
*/

// cod here

/* 
  STEP 9: Finally in this step we will define the function to run when we want to compelte a toDo, and add that function to the click event
            listener on the toDo element
          
          Note: We have not covered the argument every event listener receives, the 'event' object. There is a lot of data in this object, 
          including event type, which element called it, what the values of that element are, etc. In this exercise we will use it to find the 
          index of the item that called it. We have given you that code, study it to make sure you understand what is happening.

          1.) Using the index supplied, call completeToDo on the item which called it from toDoItems.
          2.) call displayToDos to refresh to items on the screen.
          3.) In the 'buildToDo' function add a 'click' event listener to the 'toDoText' element, and pass this function as the callback.
*/

function completeToDo(event) {
  // UNCOMMENT THE NEXT LINE
  // const index = event.target.id;
  // code here
}

/* STEP 10: Make sure ALL tests pass */


// **********************************************EXTRA CREDIT:********************************************** //

/*    1.) Research 'checkbox' input types. And apply that research to the buildToDo function:
        a.) Create a checkbox in the buildToDo function. A
        b.) Give the checkbox the id of the index, and remove the id of the index from toDoText
        c.) Give the checkbox the 'click' event listener of completeToDo, and remove the event listener from toDoText
        d.) Give the checkbox the class of 'completeCheckbox'
        e.) Inside of the current 'if' statement in the buildToDo function, if true, set the attribute, 'checked' to true on the checkbox.
        f.) Append this checkbox on the toDoShell element.
*/
// ********************************************** ----------- ********************************************** //


// Call displayToDos here (Step 6)<-----


// ---------------------------- DO NOT CHANGE ANY CODE BELOW THIS LINE ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
