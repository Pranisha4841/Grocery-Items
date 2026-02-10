const input = document.getElementById("input");
const button = document.getElementById("button");
const groceryList = document.getElementById("groceryList");

let editItem = null;

button.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") return;

  const now = new Date();
  const dateStr = now.toLocaleString();

  if (editItem !== null) {
    const span = editItem.querySelector("span");
    span.textContent = text + " (" + editItem.dataset.date + ")";
    button.textContent = "Add Item";
    editItem = null;
  } else {
    const li = document.createElement("li");

    li.dataset.date = dateStr;

    const span = document.createElement("span");
    span.textContent = text + " (" + dateStr + ")";
    li.appendChild(span);

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

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    groceryList.appendChild(li);
  }

  input.value = "";
});
