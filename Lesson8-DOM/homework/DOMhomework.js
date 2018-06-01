/* STEP 1: There is a span element currently on the page with the innerHTML of 'This app was created by:',
           Using a querySelector, select the span by it's id ('createdBy'). Then using the innerHTML method,
           add your name to the end of the current innerHTML*/

//Uncomment and add your code:
let created = document.querySelector('span#createdBy');
created.innerHTML += " Christopher Espiritu";

function Todo(description){

/* 
  STEP 2: Create a class constructor called 'Todo' this function should take one argument, the description of the todo.
    add two values to the class: this.description which should be set equal to the description passed to the class, and 
    this.complete which should be set to false. 
*/
  this.description = description;
  this.complete = false;

}

/* STEP 3: Add a completeTodo method to the prototype of Todo. It will not take any arguemnts. Inside the function set the
           Todo's complete to true*/
           
Todo.prototype.completeTodo = function(){
  this.complete = true;
};
/* STEP 4: initiate an array called 'toDoItems'. In this array you should have one new object of the class Todo. */
let toDoItems;
toDoItems = [];
toDoItems.push(new Todo('Finish precourse'));

function buildTodo(todo, index) {
/*
  STEP 5: This function, buildTodo, will take an object of class Todo as it's first argument and 
          a numerical index as it's second.
           
          Inside this function should:
            1.) Create a new 'div' element. Set this to a variable 'todoShell'
            2.) Give todoShell a class of 'todoShell'.
              
            3.) Create a new 'span' element. Set this to a variable 'todoText'
            4.) Using the item passed in, set the todoText innerHTML to the value of 'description'.
            5.) Set the id of todoText to the value passed pby the index argument.
            6.) Using an if statement, check to see if the 'complete' value on the object passed as the first argument 
                  is true. If it is, give todoText a class of 'completeText'. If it is not, do not giv eit a class.
            7.) Append child todoText to todoShell
            8.) return todoShell
*/
    let todoShell = document.createElement('div');
    todoShell.className = "todoShell";
    let todoText = document.createElement('span');
    todoText.innerHTML = todo.description;
    todoText.id = index;
    todoText.onclick = completeTodo;
    if(todo.complete){
      todoText.className = "completeText";
    }
    todoShell.appendChild(todoText);
    return todoShell;
}

function buildTodos(todos) {
  /* 
  STEP 6: This function will build and return an array of todo element. It will take an array of objects of the Todo class as it's only argument.
          Using the map method on the array passed in, use the 'buildTodo' function as the callback passed to map. 
          Return the new mapped array.
  */
 return todos.map((todo, index) => {
   return buildTodo(todo, index);
 });
}

function displayTodos() {
  /* 
    STEP 7: Now that we can build an array of todo elements, we want to make these elements appear on the screen, 
            to do this we will create a 'displayTodos' function.
            1.) Select the id todoContainer.
            2.) Set the innerHTML of the element from (1) to and empty string. (This will let us refresh the elements, and display the new todos)
            3.) Using the buildTodos function pass it the array toDoItems as it's only argument.
            4.) Using the result of (3), loop over the array appending each element to the container selected in (1).

            5.) at the very end of this file, the line before the comment "DO NOT CHANGE ANY CODE BELOW THIS LINE", call this function.

            You can now load your html file in your broswer and see your work so far.
  */
 let todoContainer = document.querySelector('#todoContainer');
 todoContainer.innerHTML = "";
 let todos = buildTodos(toDoItems);
  todos.forEach(t => {
    todoContainer.appendChild(t);
  });
  
}





function addTodo() {
                     /* 
    STEP 8: This function, 'addTodo' will add a new Todo to the array of todos.
            NOTE: We have not learned about input HTML elements yet, so we will give you a little more code to go on here.
            'newTodo' is an text input element. All text input elements have a property called 'value', this value will be whatever is typed into 
            the text box on the page.
  
            1.) Using the value property on newTodo, create an new Todo object and pass the value as the description.
            2.) add the object from (1) into the toDoItems array.
            3.) Set the value of newTodo to an empty string (this will clear the text in the box allowing the user to enter another item).
            4.) Call displayTodos to refresh the todos displayed
  */

  //UNCOMMENT THE NEXT LINE
  let newTodo = document.querySelector('#todoInput');
  toDoItems.push(new Todo(newTodo.value));
  newTodo.value = "";
  displayTodos();
  
}

/* 
  STEP 9: In this step we will fire addTodo everytime the 'ADD' button is clicked.
          1.) Select the element with the id 'addButton'
          2.) Add a 'click' event listener to this element, passing it the addTodo function as a callback

*/

//UNCOMMENT THE NEXT LINE
let button;
button = document.getElementById('addButton');
button.onclick = addTodo;


function completeTodo(event) {
  /* 
    STEP 10: Finally in this step we will define the function to run when we want to compelte a todo, and add that function to the click event
             listener on the todo element
            
            Note: We have not covered the argument every event listener receives, the 'event' object. There is a lot of data in this object, 
            including event type, which element called it, what the values of that element are, etc. In this exercise we will use it to find the 
            index of the item that called it. We have given you that code, study it to make sure you understand what is happening.
  
            1.) Using the index supplied, call completeTodo on the item which called it from toDoItems.
            2.) call displayTodos to refresh to items on the screen.
            3.) In the buildTodo function add a 'click' event listener to the 'todoText' element, and pass this function as the callback.
  */
  //UNCOMMENT THE NEXT LINE
  let index = event.target.id;
  toDoItems[index].completeTodo(); // 1
  displayTodos(); // 2
}

/* STEP 11: Make sure ALL tests pass */


// **********************************************EXTRA CREDIT:********************************************** //

/*    1.) Research 'checkbox' input types. And apply that research to the buildTodo function:
        a.) Create a checkbox in the buildTodo function. A
        b.) Give the checkbox the id of the index, and remove the id of the index from todoText
        c.) Give the checkbox the 'click' event listener of completeTodo, and remove the event listener from todoText
        d.) Give the checkbox the class of 'completeCheckbox'
        e.) Inside of the current 'if' statement in the buildTodo function, if true, set the attribute, 'checked' to true on the checkbox.
        f.) Append this checkbox on the todoShell element.
*/
// ********************************************** ----------- ********************************************** //



// Call displayTodos here <-----
displayTodos();
// ---------------------------- DO NOT CHANGE ANY CODE BELOW THIS LINE ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    Todo: Todo,
    buildTodos: buildTodos,
    buildTodo: buildTodo,
    completeTodo: completeTodo,
    displayTodos: displayTodos,
    addTodo: addTodo
  };
}
