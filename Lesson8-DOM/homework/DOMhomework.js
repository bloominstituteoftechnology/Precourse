let created = document.querySelector('#createdBy');
created.innerHTML += ' Terry Whitney';

function Todo(desc){
  this.description = desc;
  this.complete = false;
}

Todo.prototype.completeTodo = function(){this.complete = true;}

let newTodo = new Todo;
let toDoItems = [newTodo];

function buildTodo(todoObj, index) {
  let todoShell = document.createElement('div');
  todoShell.className = 'todoShell';
  let todoText = document.createElement('span');
  todoText.innerHTML = todoObj.description;
  todoText.id = index
  if (todoObj.complete) {
    todoText.className = 'completeText';
  }
  todoText.addEventListener('click', completeTodo())
  todoShell.appendChild(todoText);
  return todoShell;
}

function buildTodos(todoObjects) {
  return todoObjects.map(buildTodo);
}

function displayTodos() {
  let container = document.querySelector('#todoContainer');
  container.innerHTML = '';
  let builtTodos = buildTodos(toDoItems);
  for (let i=0; i<builtTodos.length; i++) {
    container.innerHTML += builtTodos[i];
  }
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
  let newTodoObj = new Todo;
  newTodoObj.description = newTodo.value; 
  toDoItems.push(newTodoObj);
  newTodo = '';
  displayTodos()
}

/* 
  STEP 9: In this step we will fire addTodo everytime the 'ADD' button is clicked.
          1.) Select the element with the id 'addButton'
          2.) Add a 'click' event listener to this element, passing it the addTodo function as a callback

*/

//UNCOMMENT THE NEXT LINE
let button = document.querySelector('#addButton');
button.addEventListener('click', addTodo());

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
  todoItems[index].completeTodo();
  displayTodos();
}


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

displayTodos()

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
