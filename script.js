
const inputField = document.getElementById("input");
const todosList = document.getElementById("todos");


function addTodo() {
  const inputValue = inputField.value; 

  if (inputValue !== "") {
    const listItem = document.createElement("li");


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);


    listItem.appendChild(document.createTextNode(inputValue));


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    listItem.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    listItem.appendChild(editButton);


    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        listItem.classList.add("completed");
      } else {
        listItem.classList.remove("completed");
      }
    });


    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });
    editButton.addEventListener("click", function () {


        const editEntry=document.createElement("input")
        const doneButton=document.createElement("button")
        doneButton.textContent= "Done"
        doneButton.addEventListener("click", function(){


            listItem.textContent=editEntry.textContent


        })

    });


    todosList.appendChild(listItem);


    inputField.value = "";
  }
}


document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo(); 
});


document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo(); 
});
