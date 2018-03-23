var toDoItems = [];
const createdBy = document.getElementById("createdBy")
createdBy.innerHTML = createdBy.innerHTML + " Christina Kopecky";

function ToDo (description) {

  this.description = description;
  this.complete = false;
  
  }

  ToDo.prototype.completeToDo =  function() {
    this.complete = true;
    return this.complete;
  };

      function buildToDo(toDo, index) {
        var toDoShell = document.createElement("div");
        toDoShell.classList.add ('toDoShell');
        var toDoText = document.createElement("span")
        toDoText.innerHTML = ToDo.description;
        toDoText.id = index;
        if (toDo.complete === true) {
          toDoText.classList.add("completeText");
        }
        toDoShell.appendChild(toDoText)
        return toDoShell;
        }

        function buildToDos(toDos) {
          var arr = toDos.map(buildToDo)
          return arr;
          // document.addEventListener('click', completeToDo());
        }


        function displayToDos() {
        var toDoContainer = document.querySelector('#toDoContainer');
        toDoContainer.innerHTML = "";
        }
        var result = buildToDos(toDoItems);
        for (let i = 0; i < result.length; i++) {
        toDoContainer.appendChild(result[i]);
        }

    function addToDo() {
      var newToDo = document.getElementById('toDoInput');
      var description = newToDo.value;
      var todo1=new ToDo(description);


      toDoItems.push(todo1);

      description = "";
      
      }
displayToDos();


var button = document.getElementById("addButton");
button.onclick=  addToDo();


function completeToDo(event) {
  // UNCOMMENT THE NEXT LINE
  const index = event.target.id;

  toDoItems[index].completeToDo();
  displayToDos();
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
