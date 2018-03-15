const html = require('fs')
  .readFileSync('./Lesson12-DOM/homework/index.html')
  .toString();

document.documentElement.innerHTML = html;

const {
  ToDo,
  buildToDo,
  buildToDos,
  addToDo,
  completeToDo,
  toDoItems,
} = require('../DOMhomework.js');
let desc, newToDo;

describe('Put your name on it.', () => {
  it('Put your name on it!', () => {
    const nameLength = document.querySelector('#createdBy').innerHTML.length;
    expect(nameLength).toBeGreaterThan(24);
  });
});

describe('ToDo Class', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html;
    desc = 'Create ToDo';
    newToDo = new ToDo(desc);
  });
  
  it('creates a ToDo', () => {
    expect(newToDo.description).toEqual(desc);
    expect(newToDo.complete).toEqual(false);
  });

  it('adds completeToDo to the prototype of ToDo', () => {
     expect(typeof ToDo.prototype.completeToDo).toBe('function');
  });

  it('completeToDo method changes complete to true', () => {
    newToDo.completeToDo();
    expect(newToDo.complete).toBe(true);
  });
});

describe('toDoItems array', () => {
  it('should have an array called \'toDoItems\'', () => {
    expect(Array.isArray(toDoItems)).toBe(true);
  });
});

describe('buildToDo function', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html;
    desc = 'Create ToDo';
  });

  it('creates an HTML toDo from a ToDo Object', () => {
    const newToDo = new ToDo(desc);
    const toDoHTML = buildToDo(newToDo);
    expect(toDoHTML).not.toBeUndefined();
    expect(toDoHTML.className).toEqual('toDoShell');
  });
});

describe('buildToDos function', () => {
  it('exists, and is a function', () => {
    expect(typeof buildToDos).toBe('function');
  });

  it('returns an array of ToDos', () => {
    const newToDo = new ToDo('Create New ToDo');
    const builtToDo = buildToDo(newToDo, 0);
    expect(buildToDos([])).toEqual([]);
    expect(buildToDos([newToDo])).toEqual([builtToDo]);
  });
});

describe('addToDo function', () => {
  it('is a function', () => {
    expect(typeof addToDo).toBe('function');
  });

  it('adds a ToDo to the toDoItems array', () => {
    document.querySelector('#toDoInput').value = 'Create new ToDo';
    addToDo();
    expect(toDoItems.length).toBeGreaterThan(0);
  });
});

describe('completeToDo function', () => {
  it('is a function', () => {
    expect(typeof completeToDo).toBe('function');
  });

  it('marks an item in the toDoItems array as complete', () => {
    const e = { target: { id: 1 } };
    toDoItems.push(new ToDo('Create new toDo'));
    completeToDo(e);
    expect(toDoItems[1].complete).toBeTrue;
  });
});
