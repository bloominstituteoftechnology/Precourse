

const toDoItems = [];


const dostuff = document.getElementById('createdBy');
dostuff.append(' Max Washington');



function ToDo (description) {
  this.description = description;
  this.complete = false;
}


ToDo.prototype.completeToDo = function() {
  this.complete = true;
};


function buildToDo(ToDo, index) {
 
    const toDoShell = document.createElement('div');
    toDoShell.className = 'toDoShell';
    const toDoText = document.createElement('span');
    toDoText.innerHTML = ToDo.description;
    toDoText.id = index;
    if (ToDo.complete === true) {
      toDoText.className = 'completeText';
      toDoShell.appendChild(toDoText);

    }
    return toDoShell;
}



function buildToDos(toDos) {
  const makeToDos = toDos.map(buildToDo);
  return makeToDos;
}

function displayToDos() {
  // code here
  const toDoContainer = document.querySelector('#toDoContainer');
  toDoContainer.innerHTML = '';
  const arr = buildToDos(toDoItems);
  arr.forEach(function(element) {
    toDoContainer.appendChild(element);
  });

}


function addToDo() {

  const finish = new ToDo(document.querySelector('#toDoInput').value);
  toDoItems.push(finish);
  document.querySelector('#toDoInput').value = '';
  displayToDos();
}

const addBut = document.querySelector('#addButton');

addBut.addEventListener('click', addToDo);


function completeToDo(event) {
  const index = event.target.id;

  toDoItems[index].completeToDo();
  displayToDos();

}



displayToDos();


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