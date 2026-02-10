const input = document.getElementById("input");
const button = document.getElementById("button");
const groceryList = document.getElementById("groceryList");

let editItem = null;

button.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") return;

  if (editItem !== null) {
    editItem.querySelector("span").textContent = text;
    button.textContent = "Add Item";
    editItem = null;
  } else {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      input.value = span.textContent;
      button.textContent = "Update Item";
      editItem = li;
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      li.remove();
      if (editItem === li) {
        editItem = null;
        button.textContent = "Add Item";
        input.value = "";
      }
    };
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    groceryList.appendChild(li);
  }

  input.value = "";
});
