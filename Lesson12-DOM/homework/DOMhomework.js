const toDoItems = [];

document.querySelector('#createdBy').innerHTML += ' Frank';

class ToDo {
  constructor(description) {
    this.description = description;
    this.complete = false;
  }
  completeToDo() {
    this.complete = true;
  }
}

const buildToDo = (todo, index) => {
  const toDoShell = document.createElement('div');
  toDoShell.className = 'toDoShell';
  const toDoText = document.createElement('span');
  toDoText.innerHTML = todo.description;
  toDoText.id = index;
  toDoText.addEventListener('click', completeToDo);
  if (todo.complete) toDoText.class = 'completeText';
  toDoShell.appendChild(toDoText);
  return toDoShell;
};

const buildToDos = toDos => toDos.map((toDo, i) => buildToDo(toDo, i));

const displayToDos = () => {
  const toDoContainer = document.getElementById('toDoContainer');
  toDoContainer.innerHTML = '';
  const result = buildToDos(toDoItems);
  result.forEach(item => toDoContainer.appendChild(item));
};

const addToDo = () => {
  const newToDo = new ToDo(document.querySelector('#toDoInput').value);
  toDoItems.push(newToDo);
  document.querySelector('#toDoInput').value = '';
  displayToDos();
};

document.querySelector('#addButton').addEventListener('click', addToDo);

const completeToDo = (event) => {
  const index = event.target.id;
  toDoItems[index].completeToDo();
};

displayToDos();

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
