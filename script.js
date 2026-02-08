const input = document.getElementById("input");
const button = document.getElementById("button");
const groceryList = document.getElementById("groceryList");

button.addEventListener("click", function () {
  const item = input.value.trim();
  if (item !== "") {
    const li = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = item;

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.className = "edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(textSpan);
    li.appendChild(edit);
    li.appendChild(deleteBtn);

    groceryList.appendChild(li);

    input.value = "";
    input.focus();
  }
});
