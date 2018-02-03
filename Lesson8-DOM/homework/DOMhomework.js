/* STEP 1: There is a span element currently on the page with the innerHTML of 'This app was created by:',
           Using a querySelector, select the span by it's id ('createdBy'). Then using the innerHTML method,
           add your name to the end of the current innerHTML*/

//Uncomment and add your code:
const created = document.querySelector('#createdBy');
created.innerHTML += ' Jonathan Schwartz';

function Todo(description){

  this.description = description;
  this.complete = false;
}

  Todo.prototype.completeTodo = function(){
    this.complete = true;
  };



let newObject = new Todo('Work on Practice Problems');
let toDoItems = [];
toDoItems.push(newObject);


function buildTodo(todoObject, index) {
    const todoShell = document.createElement('div');
    todoShell.className = 'todoShell';
    let todoText = document.createElement('span');
    todoText.innerHTML = todoObject.description;
    todoText.id = index;

    if (todoObject.complete){
      todoText.className = 'completeText';
    }
  todoShell.appendChild(todoText);
    todoText.addEventListener('click', completeTodo);

    return todoShell;

}

function buildTodos(todoArray) {

  return todoArray.map(buildTodo);

}

function displayTodos() {
  let todoContainer = document.querySelector('#todoContainer');
  todoContainer.innerHTML = '';
  let result = buildTodos(toDoItems);

  for (let i = 0; i < result.length; i++){
    todoContainer.appendChild(result[i]);
  }

}





function addTodo() {
   let newTodo = document.querySelector('#todoInput');
   let newestTodo = new Todo(newTodo.value);
   toDoItems.push(newestTodo);
   newTodo.value = '';
   displayTodos();

}

let button = document.querySelector('#addButton');
button.addEventListener('click',addTodo);



function completeTodo(event) {
  let index = event.target.id;
  toDoItems[index].completeTodo();
  displayTodos();
}


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
