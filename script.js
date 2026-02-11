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
    const spanText = editItem.querySelector(".item-text");
    const spanDate = editItem.querySelector(".item-date");
    spanText.textContent = text;
    spanDate.textContent = new Date().toLocaleString();
    button.textContent = "Add Item";
    editItem = null;
  } else {
    const li = document.createElement("li");

    const spanText = document.createElement("span");
    spanText.className = "item-text";
    spanText.textContent = text;

    const spanDate = document.createElement("span");
    spanDate.className = "item-date";
    spanDate.textContent = dateStr;

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = function () {
      input.value = spanText.textContent;
      button.textContent = "Update Item";
      editItem = li;
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
      li.remove();
      if (editItem === li) {
        editItem = null;
        button.textContent = "Add Item";
        input.value = "";
      }
    };

    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(spanText);
    li.appendChild(spanDate);
    li.appendChild(buttonGroup);

    groceryList.appendChild(li);
  }

  input.value = "";
});
