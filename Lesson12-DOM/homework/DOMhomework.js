/* 
  STEP 0: Create an empty array called 'toDoItems'.
*/

const toDoItems = [];

const newSpan = document.querySelector('#createdBy');
newSpan.innerHTML += ' Marshall Lanners';

function ToDo (description) {
 // code here
 this.description = description;
 this.complete = false;
}

ToDo.prototype.completeToDo = function(){
 this.complete = true;
}

function buildToDo(todo, index) {
 // code here
 let toDoShell = document.createElement('div');
 toDoShell.className = 'toDoShell';

 let toDoText = document.createElement('span');

 toDoText.innerHTML = todo.description;
 toDoText.id = index;

 toDoText.addEventListener('click', completeToDo)

 if(todo.complete === true){
   toDoText.className = 'complete';
 }

 toDoShell.appendChild(toDoText);
 return toDoShell;
}

function buildToDos(toDos) {
 // code here
 return toDos.map(buildToDo);
}

function displayToDos() {
 // code here
let toDoContainer = document.getElementById('toDoContainer');
toDoContainer.innerHTML = '';
const newArr = buildToDos(toDoItems);

for (let i = 0; i < toDoItems.length; i++){
 toDoContainer.appendChild(newArr[i]);
}
}


function addToDo() {
 // code here
 const newToDo = document.querySelector('#toDoInput');
 toDoItems.push(newToDo.value);
 newToDo.value = '';
 displayToDos();
}

let addButton = document.querySelector('#addButton');
addButton.addEventListener('click', addToDo);

function completeToDo(event) {
 // UNCOMMENT THE NEXT LINE
 const index = event.target.id;
 // code here
 toDoItems[index].completeToDo();
 displayToDos();
}


displayToDos();

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
