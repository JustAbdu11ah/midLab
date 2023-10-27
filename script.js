
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


    todosList.appendChild(listItem);


    inputField.value = "";
  }
}


document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo(); 
});