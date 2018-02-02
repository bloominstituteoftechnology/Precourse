document.querySelector('#createdBy').innerHTML += ' Terry Whitney';

function Todo(description){
  this.description = description;
  this.complete = false;
}
Todo.prototype.completeTodo = function(){this.complete = true;}

let toDoItems = [];

function buildTodo(todoObj, index) {
  console.log('buildTodo',todoObj,index);
  let todoShell = document.createElement('div');
  todoShell.className = 'todoShell';
  let todoText = document.createElement('span');
  todoText.innerHTML = todoObj.description;
  todoText.id = index;
  if (todoObj.complete) {
    todoText.className = 'completeText';
  }
  todoText.addEventListener('click', completeTodo)
  todoShell.appendChild(todoText);
  return todoShell;
}
function buildTodos(todoObjs) {
  console.log('buildTodos',todoObjs);
  return todoObjs.map(buildTodo);
}

function displayTodos() {
  console.log('displayTodos');
  let container = document.querySelector('#todoContainer');
  container.innerHTML = '';
  let builtTodos = buildTodos(toDoItems);
  
  for (let i=0; i<builtTodos.length; i++) {
    container.innerHTML += builtTodos[i].innerHTML;
    console.log(container.innerHTML);
  }
}

function addTodo() {
  console.log('clicked, addTodo');
  let newTodo = document.querySelector('#todoInput');
  let newTodoObj = new Todo;
  newTodoObj.description = newTodo.value; 
  toDoItems.push(newTodoObj);
  newTodo.value = '';
  displayTodos()
}

let button = document.querySelector('#addButton');
button.addEventListener('click', addTodo);

function completeTodo(event) {
  console.log('completeTodo');
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
