var html = require('fs')

.readFileSync('./Lesson8-DOM/homework/index.html')

.toString();;



document.documentElement.innerHTML = html;



let {

Todo,

buildTodo,

buildTodos,

addTodo,

completeTodo,

toDoItems

} = require('../DOMhomework.js');

let desc, newTodo;



describe('Put your name on it.', () => {



it('Put your name on it!', () => {

let nameLength = document.querySelector('#createdBy').innerHTML.length;

expect(nameLength).toBeGreaterThan(24);

});

});



describe('Todo Class', () => {



beforeEach(() => {

document.documentElement.innerHTML = html;

desc = 'Create Todo';

newTodo = new Todo(desc);

});



it('creates a Todo', () => {

expect(newTodo.desc).toEqual(desc);

expect(newTodo.complete).toEqual(false);

});



it('adds completeTodo to the prototype of Todo', () => {

expect(typeof Todo.prototype.completeToDo).toBe('function');

});



it('completeToDo method changes complete to true', () => {

newTodo.completeToDo();

expect(newTodo.complete).toBe(true);

});



});



describe('toDoItems array', () => {

it('should contain at least one item of the ToDo class', () => {

expect(toDoItems.length).toBeGreaterThan(0);

});

});

describe('buildTodo function', () => {



beforeEach(() => {

document.documentElement.innerHTML = html;

desc = 'Create Todo';

});



it('creates an HTML todo from a Todo Object', () => {

let newTodo = new Todo(desc);

let todoHTML = buildTodo(newTodo);

expect(todoHTML).not.toBeUndefined();

expect(todoHTML.className).toEqual('todoShell');

});

});





describe('buildTodos function', () => {



it('exists, and is a function', () => {

expect(typeof buildTodos).toBe('function');

});



it('returns an array of Todos', () => {

let newTodo = new Todo('Create New Todo');

let builtTodo = buildTodo(newTodo, 0);

expect(buildTodos([])).toEqual([]);

expect(buildTodos([newTodo])).toEqual([builtTodo]);

});

});



describe('addTodo function', () => {



it('is a function', () => {

expect(typeof addTodo).toBe('function');

});



it('adds a Todo to the toDoItems array', () => {

document.querySelector('#newTodoToAdd').value = 'Create new Todo';

addTodo();

expect(toDoItems.length).toBeGreaterThan(0);

});

});



describe('completeTodo function', () => {



it('is a function', () => {

expect(typeof completeTodo).toBe('function');

});



it('marks an item in the toDoItems array as complete', () => {

let e = { target: { id: 1 } };

toDoItems.push(new Todo('Create new todo'));

completeTodo(e);

expect(toDoItems[1].complete).toBeTrue;

});

});
